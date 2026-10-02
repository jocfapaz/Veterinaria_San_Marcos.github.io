import {
  resetDB,
  addToCart,
  getCart,
  getCartTotal,
  createRequest,
  getRequests,
  registerUser,
  getUserByEmail,
  login,
} from './mockDB.js'

describe('mockDB', () => {
  beforeEach(() => {
    resetDB()
  })

  describe('CREATE - Carrito', () => {
    it('añade un producto nuevo al carrito', () => {
      addToCart('ME001', 2)
      const cart = getCart()

      expect(cart.length).toBe(1)
      expect(cart[0].productId).toBe('ME001')
      expect(cart[0].quantity).toBe(2)
    })

    it('incrementa la cantidad si el producto ya existe', () => {
      addToCart('ME001', 1)
      addToCart('ME001', 3)
      const cart = getCart()

      expect(cart.length).toBe(1)
      expect(cart[0].quantity).toBe(4)
    })

    it('calcula el total aplicando descuentos', () => {
      // ME004 = Nexgard: $9.500 con 20% de descuento = $7.600
      addToCart('ME004', 1)

      expect(getCartTotal()).toBe(7600)
    })
  })

  describe('CREATE - Solicitudes de servicio', () => {
    it('crea una nueva solicitud con estado pendiente', () => {
      const req = createRequest({
        userId: 'U002',
        serviceId: 'SERV001',
        petName: 'Rex',
        species: 'Perro',
        requestedDate: '2026-10-15',
      })

      const requests = getRequests()

      expect(requests.length).toBe(1)
      expect(req.status).toBe('pending')
      expect(req.userId).toBe('U002')
      expect(req.serviceId).toBe('SERV001')
    })
  })

  describe('CREATE - Registro de usuarios', () => {
    it('registra un nuevo usuario con rol cliente', () => {
      const user = registerUser({
        email: 'test@example.com',
        password: '123456',
        firstName: 'Test',
        lastName: 'Usuario',
      })

      expect(user.role).toBe('client')
      expect(getUserByEmail('test@example.com')).toBeTruthy()
    })

    it('falla si el correo ya existe', () => {
      expect(() =>
        registerUser({
          email: 'admin@veterinariasanmarcos.cl',
          password: '123456',
          firstName: 'Otro',
          lastName: 'Admin',
        })
      ).toThrow()
    })

    it('permite iniciar sesión con credenciales válidas', () => {
      const user = login('admin@veterinariasanmarcos.cl', 'Admin1234')

      expect(user).toBeTruthy()
      expect(user.email).toBe('admin@veterinariasanmarcos.cl')
      expect(user.password).toBeUndefined()
    })

    it('rechaza credenciales inválidas', () => {
      expect(login('admin@veterinariasanmarcos.cl', 'wrong')).toBeNull()
    })
  })
})