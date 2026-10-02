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
  getServices,
  getProducts,
  getProductById,
  getProductsByCategory,
  getProductsOnSale,
  createOrder,
  getUserHistory,
  updateCartItem,
  updateProduct,
  updateService,
  updateUser,
  cancelRequest,
} from './mockDB.js'

describe('mockDB', () => {
  beforeEach(() => {
    resetDB()
  })

  describe('READ - Lectura de datos', () => {
    it('obtiene el catálogo completo de servicios', () => {
      const services = getServices()
      expect(services.length).toBe(31)
      expect(services[0].id).toBe('SERV001')
    })

    it('obtiene el catálogo completo de productos', () => {
      const products = getProducts()
      expect(products.length).toBe(22)
    })

    it('encuentra un producto por su ID', () => {
      const product = getProductById('ME004')
      expect(product.name).toBe('Nexgard')
      expect(product.discount).toBe(20)
    })

    it('devuelve undefined si el producto no existe', () => {
      expect(getProductById('NO_EXISTE')).toBeUndefined()
    })

    it('filtra productos por categoría', () => {
      const antibiotics = getProductsByCategory('Antibióticos')
      expect(antibiotics.length).toBe(3)
    })

    it('devuelve productos en oferta', () => {
      const onSale = getProductsOnSale()
      expect(onSale.length).toBeGreaterThan(0)
      expect(onSale.every(p => p.discount > 0)).toBe(true)
    })

    it('lee el contenido del carrito', () => {
      addToCart('ME001', 2)
      addToCart('ME004', 1)

      const cart = getCart()
      expect(cart.length).toBe(2)
      expect(cart[0].quantity).toBe(2)
    })

    it('lee el historial de un usuario (órdenes y solicitudes)', () => {
      // Crear una solicitud
      createRequest({
        userId: 'U002',
        serviceId: 'SERV001',
        petName: 'Rex',
        species: 'Perro',
        requestedDate: '2026-10-15',
      })

      // Crear una orden
      createOrder({
        userId: 'U002',
        items: [{ productId: 'ME001', quantity: 1 }],
        shippingAddress: 'Av. Siempre Viva 123',
      })

      const history = getUserHistory('U002')

      expect(history.requests.length).toBe(1)
      expect(history.orders.length).toBe(1)
      expect(history.orders[0].total).toBe(4200)
    })
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

  describe('UPDATE - Actualizaciones', () => {
    it('actualiza la cantidad de un item en el carrito', () => {
      addToCart('ME001', 1)
      updateCartItem('ME001', 5)
      const cart = getCart()

      expect(cart[0].quantity).toBe(5)
    })

    it('elimina el item del carrito si la cantidad es 0', () => {
      addToCart('ME001', 1)
      updateCartItem('ME001', 0)

      expect(getCart().length).toBe(0)
    })

    it('actualiza datos de un producto', () => {
      const updated = updateProduct('ME001', { price: 5000 })
      expect(updated.price).toBe(5000)
      expect(getProductById('ME001').price).toBe(5000)
    })

    it('actualiza datos de un servicio', () => {
      const updated = updateService('SERV001', { price: 20000 })
      expect(updated.price).toBe(20000)
    })

    it('actualiza datos de un usuario', () => {
      const updated = updateUser('U002', { phone: '+56 9 9999 9999' })
      expect(updated.phone).toBe('+56 9 9999 9999')
    })

    it('cancela una solicitud médica', () => {
      const req = createRequest({
        userId: 'U002',
        serviceId: 'SERV001',
        petName: 'Rex',
        species: 'Perro',
        requestedDate: '2026-10-15',
      })

      const cancelled = cancelRequest(req.id)
      expect(cancelled.status).toBe('cancelled')
      expect(getRequests()[0].status).toBe('cancelled')
    })
  })
})