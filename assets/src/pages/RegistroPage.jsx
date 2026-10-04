import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const INICIAL = {
  run: '',
  nombre: '',
  apellidos: '',
  correo: '',
  contrasena: '',
  confirmarContrasena: '',
  telefono: '',
  direccion: '',
  region: 'ohiggins',
  comuna: '',
  nombreMascota: '',
  especieMascota: '',
  razaMascota: '',
};

export function Registro (){
  const [formData, setFormData] = useState(INICIAL);
  const [errors, setErrors] = useState({});
  const [mensajeExito, setMensajeExito] = useState(false);

  // Funciones auxiliares de validación
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidName = (name) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-']+$/.test(name.trim());

  const isValidPhone = (phone) => /^(\+?56)?[1-9]\d{8}$/.test(phone.replace(/\s+/g, ''));

  const isValidRun = (run) => {
    const limpio = run.replace(/\./g, '').replace('-', '').toUpperCase();
    if (!/^[0-9]{7,8}[0-9K]$/.test(limpio)) return false;
    const body = limpio.slice(0, -1);
    const dv = limpio.slice(-1);
    let sum = 0;
    let mult = 2;
    for (let i = body.length - 1; i >= 0; i--) {
      sum += parseInt(body.charAt(i)) * mult;
      mult = mult === 7 ? 2 : mult + 1;
    }
    const res = 11 - (sum % 11);
    let calcDv;
    if (res === 11) calcDv = '0';
    else if (res === 10) calcDv = 'K';
    else calcDv = String(res);
    return calcDv === dv;
  };

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validaciones individuales
  const validateField = (name, value) => {
    let errorMsg = '';

    if (name === 'run') {
      const runVal = value.trim().toUpperCase();
      if (!runVal) {
        errorMsg = 'El RUN es obligatorio.';
      } else if (!isValidRun(runVal)) {
        errorMsg = 'Ingresa un RUN válido (ej: 19011022K).';
      }
    }

    if (name === 'nombre') {
      const nombreVal = value.trim();
      if (!nombreVal) {
        errorMsg = 'El nombre es obligatorio.';
      } else if (!isValidName(nombreVal)) {
        errorMsg = 'El nombre solo puede contener letras y espacios.';
      }
    }

    if (name === 'apellidos') {
      const apellidosVal = value.trim();
      if (!apellidosVal) {
        errorMsg = 'Los apellidos son obligatorios.';
      } else if (!isValidName(apellidosVal)) {
        errorMsg = 'Los apellidos solo puede contener letras y espacios.';
      }
    }

    if (name === 'correo') {
      const correoVal = value.trim().toLowerCase();
      if (!correoVal) {
        errorMsg = 'El correo electrónico es obligatorio.';
      } else if (!isValidEmail(correoVal)) {
        errorMsg = 'Ingresa un formato de correo electrónico válido.';
      } else {
        const partes = correoVal.split('@');
        if (
          partes.length === 2 &&
          !['duoc.cl', 'profesor.duoc.cl', 'gmail.com'].includes(partes[1])
        ) {
          errorMsg =
            'Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.';
        }
      }
    }

    if (name === 'contrasena') {
      const passVal = value;
      if (!passVal) {
        errorMsg = 'La contraseña es obligatoria.';
      } else if (passVal.length < 6 || passVal.length > 50) {
        errorMsg = 'La contraseña debe tener al menos 6 caracteres.';
      }
    }

    if (name === 'confirmarContrasena') {
      const pass2Val = value;
      if (!pass2Val) {
        errorMsg = 'Debes confirmar tu contraseña.';
      } else if (pass2Val !== formData.contrasena) {
        errorMsg = 'Las contraseñas no coinciden.';
      }
    }

    if (name === 'telefono') {
      const telVal = value.trim();
      if (telVal && !isValidPhone(telVal)) {
        errorMsg = 'Ingresa un teléfono chileno válido (ej: +56 9 1234 5678).';
      }
    }

    if (name === 'direccion') {
      if (!value.trim()) {
        errorMsg = 'La dirección es obligatoria.';
      }
    }

    if (name === 'region') {
      if (!value) {
        errorMsg = 'Debes seleccionar una región.';
      }
    }

    if (name === 'comuna') {
      if (!value) {
        errorMsg = 'Debes seleccionar una comuna.';
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return !errorMsg;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const resultados = [
      validateField('run', formData.run),
      validateField('nombre', formData.nombre),
      validateField('apellidos', formData.apellidos),
      validateField('correo', formData.correo),
      validateField('contrasena', formData.contrasena),
      validateField('confirmarContrasena', formData.confirmarContrasena),
      validateField('telefono', formData.telefono),
      validateField('direccion', formData.direccion),
      validateField('region', formData.region),
      validateField('comuna', formData.comuna),
    ];

    if (resultados.every((r) => r)) {
      setMensajeExito(true);
      setFormData(INICIAL);
      setErrors({});

      setTimeout(() => {
        setMensajeExito(false);
      }, 5000);
    }
  };

  const inputClass = (campo) =>
    `w-full px-3 py-2 bg-slate-50 border rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 ${
      errors[campo] ? 'border-rose-500' : 'border-slate-200'
    }`;

  const labelClass = 'block text-xs font-semibold text-slate-700 mb-1';

  return(
        <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased">
      {/* Componente Header */}
      <Header />

      {/* CONTENIDO PRINCIPAL / FORMULARIO */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 bg-[url('https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/auth/auth-background-2.png')] bg-cover bg-center bg-no-repeat">

        <div className="relative flex items-center justify-center w-full max-w-2xl">

          {/* Tarjeta principal del formulario */}
          <div className="bg-white shadow-xl relative z-10 w-full space-y-6 rounded-2xl p-6 sm:p-8 border border-slate-100 backdrop-blur-sm">

            {/* Título y Descripción */}
            <div>
              <h3 className="text-slate-900 mb-1.5 text-2xl font-semibold">Registro de Usuario</h3>
              <p className="text-slate-600 text-sm mb-4">Crea tu cuenta para gestionar tus citas e historial clínico.</p>
            </div>

            {mensajeExito && (
              <div className="mb-4 p-4 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200" role="alert">
                <span className="font-bold">¡Registro exitoso!</span> Todos los datos son válidos y tu cuenta ha sido simulada.
              </div>
            )}

            {/* Formulario */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">

              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 border-b border-slate-100 pb-1">Datos del Dueño</h4>

              {/* RUN */}
              <div>
                <label htmlFor="run" className={labelClass}>RUN*</label>
                <input
                  type="text"
                  id="run"
                  name="run"
                  placeholder="Ej: 12.345.678-5"
                  value={formData.run}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  minLength={7}
                  maxLength={9}
                  className={inputClass('run')}
                  required
                />
                {errors.run && <span className="mensaje-error text-xs text-rose-500">{errors.run}</span>}
              </div>

              {/* Nombre y Apellidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre-completo" className={labelClass}>Nombre*</label>
                  <input
                    type="text"
                    id="nombre-completo"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={50}
                    className={inputClass('nombre')}
                    required
                  />
                  {errors.nombre && <span className="mensaje-error text-xs text-rose-500">{errors.nombre}</span>}
                </div>
                <div>
                  <label htmlFor="apellidos" className={labelClass}>Apellidos*</label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={100}
                    className={inputClass('apellidos')}
                    required
                  />
                  {errors.apellidos && <span className="mensaje-error text-xs text-rose-500">{errors.apellidos}</span>}
                </div>
              </div>

              {/* Correo */}
              <div>
                <label htmlFor="correo" className={labelClass}>Correo Electrónico*</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="ejemplo@duoc.cl"
                  value={formData.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={100}
                  className={inputClass('correo')}
                  required
                />
                {errors.correo && <span className="mensaje-error text-xs text-rose-500">{errors.correo}</span>}
              </div>

              {/* Contraseñas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contrasena" className={labelClass}>Contraseña*</label>
                  <input
                    type="password"
                    id="contrasena"
                    name="contrasena"
                    placeholder="········"
                    value={formData.contrasena}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    minLength={6}
                    maxLength={50}
                    className={inputClass('contrasena')}
                    required
                  />
                  {errors.contrasena && <span className="mensaje-error text-xs text-rose-500">{errors.contrasena}</span>}
                </div>
                <div>
                  <label htmlFor="confirmar-contrasena" className={labelClass}>Confirmar contraseña*</label>
                  <input
                    type="password"
                    id="confirmar-contrasena"
                    name="confirmarContrasena"
                    value={formData.confirmarContrasena}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    minLength={6}
                    maxLength={50}
                    className={inputClass('confirmarContrasena')}
                    required
                  />
                  {errors.confirmarContrasena && <span className="mensaje-error text-xs text-rose-500">{errors.confirmarContrasena}</span>}
                </div>
              </div>

              {/* Teléfono y Dirección */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className={labelClass}>Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="+56 9 1234 5678"
                    value={formData.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('telefono')}
                  />
                  {errors.telefono && <span className="mensaje-error text-xs text-rose-500">{errors.telefono}</span>}
                </div>
                <div>
                  <label htmlFor="direccion" className={labelClass}>Dirección*</label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={300}
                    className={inputClass('direccion')}
                    required
                  />
                  {errors.direccion && <span className="mensaje-error text-xs text-rose-500">{errors.direccion}</span>}
                </div>
              </div>

              {/* Región y Comuna */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="region" className={labelClass}>Región*</label>
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('region')}
                    required
                  >
                    <option value="">-- Seleccionar --</option>
                    <option value="ohiggins">O'Higgins</option>
                    <option value="rm">Metropolitana</option>
                  </select>
                  {errors.region && <span className="mensaje-error text-xs text-rose-500">{errors.region}</span>}
                </div>
                <div>
                  <label htmlFor="comuna" className={labelClass}>Comuna*</label>
                  <select
                    id="comuna"
                    name="comuna"
                    value={formData.comuna}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass('comuna')}
                    required
                  >
                    <option value="">-- Seleccionar --</option>
                    <option value="rancagua">Rancagua</option>
                    <option value="machali">Machalí</option>
                    <option value="graneros">Graneros</option>
                  </select>
                  {errors.comuna && <span className="mensaje-error text-xs text-rose-500">{errors.comuna}</span>}
                </div>
              </div>

              {/* Datos Mascota (Opcional) */}
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 border-b border-slate-100 pb-1 pt-2">
                Datos de la Mascota <span className="text-slate-400 font-normal lowercase">(opcional)</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="nombre-mascota" className={labelClass}>Nombre</label>
                  <input
                    type="text"
                    id="nombre-mascota"
                    name="nombreMascota"
                    value={formData.nombreMascota}
                    onChange={handleChange}
                    maxLength={50}
                    className={inputClass('nombreMascota')}
                  />
                </div>
                <div>
                  <label htmlFor="especie-mascota" className={labelClass}>Especie</label>
                  <select
                    id="especie-mascota"
                    name="especieMascota"
                    value={formData.especieMascota}
                    onChange={handleChange}
                    className={inputClass('especieMascota')}
                  >
                    <option value="">-- Seleccionar --</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="conejo">Conejo</option>
                    <option value="ave">Ave</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="raza-mascota" className={labelClass}>Raza</label>
                  <input
                    type="text"
                    id="raza-mascota"
                    name="razaMascota"
                    value={formData.razaMascota}
                    onChange={handleChange}
                    maxLength={50}
                    className={inputClass('razaMascota')}
                  />
                </div>
              </div>

              {/* Botón de Registro */}
              <button type="submit" className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-4">
                Crear Cuenta
              </button>
            </form>

            {/* Pie de tarjeta / Cambio de pantalla */}
            <p className="text-slate-600 text-sm text-center">
              ¿Ya tienes una cuenta?
              <a href="login.html" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">Iniciar sesión</a>
            </p>

          </div>
        </div>
      </main>

      {/* Componente Footer */}
      <Footer />
    </div>
    );
}