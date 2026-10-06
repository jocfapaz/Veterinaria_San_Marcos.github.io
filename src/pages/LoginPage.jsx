import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext.jsx'
import Button from '../components/Button'

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loginError, setLoginError] = useState('')
  const { login: authLogin } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setLoginError('')
  }

  function validate() {
    const newErrors = {}
    const email = formData.email.trim().toLowerCase()

    if (!email) {
      newErrors.email = 'El correo electrónico es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Ingresa un formato de correo válido.'
    } else {
      const domain = email.split('@')[1]
      if (
        domain !== 'duocuc.cl' &&
        domain !== 'profesor.duoc.cl' &&
        domain !== 'gmail.com' &&
        domain !== 'veterinariasanmarcos.cl'
      ) {
        newErrors.email =
          'Solo se permiten correos @duocuc.cl, @profesor.duoc.cl y @gmail.com.'
      }
    }

    const pass = formData.password
    if (!pass) {
      newErrors.password = 'La contraseña es obligatoria.'
    } else if (pass.length < 6 || pass.length > 50) {
      newErrors.password = 'La contraseña debe tener entre 6 y 50 caracteres.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
      const user = authLogin(formData.email, formData.password)
      if (user) {
        setSuccess(true)
        setFormData({ email: '', password: '' })
        const redirectTo =
          user.role === 'admin'
            ? '/admin'
            : location.state?.from?.pathname || '/'
        navigate(redirectTo)
      } else {
        setLoginError('Correo o contraseña incorrectos')
      }
    }
  }

  const inputWrapperClass = (hasError) =>
    `flex items-center w-full bg-white border h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all ${
      hasError ? 'border-rose-500' : 'border-slate-300'
    }`

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="max-w-96 w-full text-center border border-slate-200 rounded-2xl px-8 bg-white shadow-sm my-auto pt-10"
      >
        <h1 className="text-slate-900 text-3xl font-medium">Iniciar sesión</h1>
        <p className="text-slate-500 text-sm mt-2 mb-6">
          Por favor ingresa tus datos para continuar
        </p>

        {success && (
          <div className="mb-6 p-4 text-sm text-emerald-800 rounded-lg bg-emerald-50 border border-emerald-200 text-left">
            <span className="font-bold">¡Inicio de sesión exitoso!</span>{' '}
            Redirigiendo...
          </div>
        )}

        {loginError && (
          <div className="mb-6 p-4 text-sm text-rose-800 rounded-lg bg-rose-50 border border-rose-200 text-left">
            {loginError}
          </div>
        )}

        <div className={inputWrapperClass(!!errors.email)}>
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@duoc.cl"
            className="bg-transparent text-slate-800 placeholder-slate-400 outline-none text-sm w-full h-full pr-4"
          />
        </div>
        {errors.email && (
          <span className="text-xs text-rose-500 text-left block pl-4 mt-1">
            {errors.email}
          </span>
        )}

        <div className={`${inputWrapperClass(!!errors.password)} mt-4`}>
          <svg
            width="13"
            height="17"
            viewBox="0 0 13 17"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
              fill="#6B7280"
            />
          </svg>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="bg-transparent text-slate-800 placeholder-slate-400 outline-none text-sm w-full h-full pr-4"
          />
        </div>
        {errors.password && (
          <span className="text-xs text-rose-500 text-left block pl-4 mt-1">
            {errors.password}
          </span>
        )}

        <div className="mt-5 text-left text-emerald-600">
          <a className="text-sm hover:underline" href="#">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <Button type="submit" className="mt-4 w-full h-11 rounded-full">
          Iniciar sesión
        </Button>

        <p className="text-slate-500 text-sm mt-3 mb-11">
          ¿Aún no tienes cuenta?{' '}
          <Link
            to="/registro"
            className="text-emerald-600 font-semibold hover:underline"
          >
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  )
}