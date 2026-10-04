import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Contacto (){
    const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    comentario: '',
  });

  const [errors, setErrors] = useState({});
  const [mensajeExito, setMensajeExito] = useState(false);

  // Funciones auxiliares de validación
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidName = (name) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-\']+$/.test(name.trim());

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validaciones individuales
  const validateField = (name, value) => {
    let errorMsg = '';
    const val = value.trim();

    if (name === 'nombre') {
      if (!val) {
        errorMsg = 'El nombre completo es obligatorio.';
      } else if (val.length < 3) {
        errorMsg = 'El nombre debe tener al menos 3 caracteres.';
      } else if (!isValidName(val)) {
        errorMsg = 'El nombre solo puede contener letras y espacios.';
      }
    }

    if (name === 'correo') {
      const emailVal = val.toLowerCase();
      if (!emailVal) {
        errorMsg = 'El correo electrónico es obligatorio.';
      } else if (!isValidEmail(emailVal)) {
        errorMsg = 'Ingresa un formato de correo electrónico válido.';
      } else {
        const partes = emailVal.split('@');
        if (
          partes.length === 2 &&
          !['duoc.cl', 'profesor.duoc.cl', 'gmail.com'].includes(partes[1])
        ) {
          errorMsg =
            'Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.';
        }
      }
    }

    if (name === 'comentario') {
      if (!val) {
        errorMsg = 'El comentario es obligatorio.';
      } else if (val.length < 10) {
        errorMsg =
          'El comentario debe ser más detallado (mínimo 10 caracteres).';
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

    const isNombreValid = validateField('nombre', formData.nombre);
    const isCorreoValid = validateField('correo', formData.correo);
    const isComentarioValid = validateField('comentario', formData.comentario);

    if (isNombreValid && isCorreoValid && isComentarioValid) {
      setMensajeExito(true);
      setFormData({ nombre: '', correo: '', comentario: '' });
      setErrors({});

      setTimeout(() => {
        setMensajeExito(false);
      }, 5000);
    }
  };
    return(
        <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased">
      {/* Componente Header */}
      <Header activo="contacto" />

      {/* Contenido principal de Contacto */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="seccion-contacto space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-3xl font-extrabold text-slate-900">Contacto</h1>
            <p className="text-slate-500 text-sm mt-1">
              Ponte en contacto con nuestro equipo para dudas, consultas o emergencias.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Información de la clínica */}
            <div className="space-y-6">
              <div className="datos-clinica bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Información de la Clínica
                </h2>

                <div className="space-y-3 text-sm text-slate-600">
                  <p className="flex items-start gap-3">
                    <span className="text-base shrink-0">📍</span>
                    <span>
                      <strong>Dirección:</strong> Rancagua, Región del Libertador Bernardo O'Higgins
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-base shrink-0">📞</span>
                    <span>
                      <strong>Teléfono:</strong> +56 9 0000 0000
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-base shrink-0">🕒</span>
                    <span>
                      <strong>Horario:</strong> Lunes a sábado, 09:00 a 19:00
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {mensajeExito && (
                  <div
                    className="mb-4 p-4 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200"
                    role="alert"
                  >
                    <span className="font-bold">¡Mensaje enviado!</span> Tus datos pasaron la validación correctamente.
                  </div>
                )}

                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Formulario de contacto
                </h2>

                {/* Campo Nombre */}
                <div className="campo flex flex-col gap-1.5">
                  <label
                    htmlFor="nombre-contacto"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Nombre completo*
                  </label>
                  <input
                    type="text"
                    id="nombre-contacto"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={100}
                    placeholder="Tu nombre y apellido"
                    className={`w-full px-3 py-2.5 bg-slate-50 border ${
                      errors.nombre ? 'border-rose-500' : 'border-slate-200'
                    } rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all`}
                  />
                  {errors.nombre && (
                    <span className="mensaje-error text-xs text-rose-500">
                      {errors.nombre}
                    </span>
                  )}
                </div>

                {/* Campo Correo */}
                <div className="campo flex flex-col gap-1.5">
                  <label
                    htmlFor="correo-contacto"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Correo electrónico*
                  </label>
                  <input
                    type="email"
                    id="correo-contacto"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={100}
                    placeholder="ejemplo@duoc.cl"
                    className={`w-full px-3 py-2.5 bg-slate-50 border ${
                      errors.correo ? 'border-rose-500' : 'border-slate-200'
                    } rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all`}
                  />
                  {errors.correo && (
                    <span className="mensaje-error text-xs text-rose-500">
                      {errors.correo}
                    </span>
                  )}
                </div>

                {/* Campo Comentario */}
                <div className="campo flex flex-col gap-1.5">
                  <label
                    htmlFor="comentario-contacto"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Comentario*
                  </label>
                  <textarea
                    id="comentario-contacto"
                    name="comentario"
                    value={formData.comentario}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={500}
                    rows={4}
                    placeholder="¿En qué te podemos ayudar?"
                    className={`w-full px-3 py-2.5 bg-slate-50 border ${
                      errors.comentario ? 'border-rose-500' : 'border-slate-200'
                    } rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none`}
                  />
                  {errors.comentario && (
                    <span className="mensaje-error text-xs text-rose-500">
                      {errors.comentario}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="boton w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm mt-2"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Componente Footer */}
      <Footer />
    </div>
    );
}