// Dominios de correo permitidos en registro e inicio de sesión.
// Regla de negocio del frontend: el backend solo valida el formato del correo.

export const ALLOWED_EMAIL_DOMAINS = [
  'duoc.cl',
  'duocuc.cl',
  'profesor.duoc.cl',
  'gmail.com',
  'veterinariasanmarcos.cl',
]

export const ALLOWED_EMAIL_DOMAINS_MESSAGE =
  'Solo se permiten correos @duoc.cl, @duocuc.cl, @profesor.duoc.cl, @gmail.com y @veterinariasanmarcos.cl.'

export function isAllowedEmailDomain(email) {
  const domain = email.trim().toLowerCase().split('@')[1]
  return ALLOWED_EMAIL_DOMAINS.includes(domain)
}
