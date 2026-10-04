import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Login (){
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: '',
  });

  const [errors, setErrors] = useState({});
  const [mensajeExito, setMensajeExito] = useState(false);

  // Funciones auxiliares de validación
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validaciones individuales
  const validateField = (name, value) => {
    let errorMsg = '';

    if (name === 'correo') {
      const emailVal = value.trim().toLowerCase();
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

    if (name === 'contrasena') {
      const passVal = value;
      if (!passVal) {
        errorMsg = 'La contraseña es obligatoria.';
      } else if (passVal.length < 6 || passVal.length > 50) {
        errorMsg = 'La contraseña debe tener entre 6 y 50 caracteres.';
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

    const isCorreoValid = validateField('correo', formData.correo);
    const isPassValid = validateField('contrasena', formData.contrasena);

    if (isCorreoValid && isPassValid) {
      setMensajeExito(true);
      setFormData({ correo: '', contrasena: '' });
      setErrors({});

      setTimeout(() => {
        setMensajeExito(false);
      }, 5000);
    }
  };
    return(
        <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800 antialiased">
      {/* Componente Header */}
      <Header />

      {/* Contenido principal de Login */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-96 w-full text-center border border-slate-200 rounded-2xl px-8 bg-white shadow-sm my-auto pt-10"
        >
          <h1 className="text-slate-900 text-3xl font-medium">Iniciar sesión</h1>
          <p className="text-slate-500 text-sm mt-2 mb-6">
            Por favor ingresa tus datos para continuar
          </p>

          {mensajeExito && (
            <div
              className="mb-6 p-4 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200 text-left"
              role="alert"
            >
              <span className="font-bold">¡Inicio de sesión exitoso!</span> Redirigiendo...
            </div>
          )}

          {/* Campo Correo */}
          <div className="mb-1">
            <div
              className={`campo flex items-center w-full bg-white border ${
                errors.correo ? 'border-rose-500' : 'border-slate-300'
              } h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all`}
            >
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                  fill="#6B7280"
                />
              </svg>
              <input
                type="email"
                id="correo-login"
                name="correo"
                placeholder="ejemplo@duoc.cl"
                value={formData.correo}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={100}
                className="bg-transparent text-slate-800 placeholder-slate-400 outline-none text-sm w-full h-full pr-4"
                required
              />
            </div>
            {errors.correo && (
              <span className="mensaje-error text-xs text-rose-500 text-left block pl-4 mt-1">
                {errors.correo}
              </span>
            )}
          </div>

          {/* Campo Contraseña */}
          <div className="mt-4 mb-1">
            <div
              className={`campo flex items-center w-full bg-white border ${
                errors.contrasena ? 'border-rose-500' : 'border-slate-300'
              } h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all`}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                  fill="#6B7280"
                />
              </svg>
              <input
                type="password"
                id="contrasena-login"
                name="contrasena"
                placeholder="Contraseña"
                value={formData.contrasena}
                onChange={handleChange}
                onBlur={handleBlur}
                minLength={6}
                maxLength={50}
                className="bg-transparent text-slate-800 placeholder-slate-400 outline-none text-sm w-full h-full pr-4"
                required
              />
            </div>
            {errors.contrasena && (
              <span className="mensaje-error text-xs text-rose-500 text-left block pl-4 mt-1">
                {errors.contrasena}
              </span>
            )}
          </div>

          <div className="mt-5 text-left text-emerald-600">
            <a className="text-sm hover:underline" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="boton mt-4 w-full h-11 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 font-medium transition-colors shadow-sm"
          >
            Iniciar sesión
          </button>
          <p className="ayuda-login text-slate-500 text-sm mt-3 mb-11">
            ¿Aún no tienes cuenta?{' '}
            <a
              className="text-emerald-600 font-semibold hover:underline"
              href="registro.html"
            >
              Regístrate
            </a>
          </p>
        </form>
      </main>

      {/* Componente Footer */}
      <Footer />
    </div>
    );
}