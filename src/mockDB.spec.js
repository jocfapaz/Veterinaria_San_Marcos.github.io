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
  getServiceById,
  getServicesByCategory,
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
  updateRequestStatus,
  updateOrderStatus,
  removeFromCart,
  deleteProduct,
  deleteService,
  deleteUser,
  addProduct,
  addService,
  clearCart,
  getPosts,
  getPostBySlug,
  validateRun,
  formatRun,
  getUsers,
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

    it('devuelve todos los servicios cuando la categoría es Todas', () => {
      const all = getServicesByCategory('Todas')
      expect(all.length).toBe(31)
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

    it('ignora productos eliminados al calcular el total', () => {
      addToCart('ME001', 1)
      deleteProduct('ME001')

      expect(getCartTotal()).toBe(0)
    })

    it('vacía completamente el carrito', () => {
      addToCart('ME001', 1)
      addToCart('ME002', 2)
      clearCart()

      expect(getCart().length).toBe(0)
      expect(getCartTotal()).toBe(0)
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

    it('no hace nada si se actualiza un item que no está en el carrito', () => {
      addToCart('ME001', 1)
      updateCartItem('NO_EXISTE', 5)

      expect(getCart().length).toBe(1)
      expect(getCart()[0].quantity).toBe(1)
    })

    it('elimina el item del carrito si la cantidad es 0', () => {
      addToCart('ME001', 1)
      updateCartItem('ME001', 0)

      expect(getCart().length).toBe(0)
    })

    it('crea un producto con stock y stock crítico por defecto en 0', () => {
      const newProduct = addProduct({
        name: 'Producto de prueba',
        category: 'Antibióticos',
        presentation: 'Blíster test',
        price: 1000,
        image: '/images/test.png',
      })
      expect(newProduct.stock).toBe(0)
      expect(newProduct.stockCritical).toBe(0)
    })

    it('actualiza datos de un producto', () => {
      const newProduct = addProduct({
        name: 'Producto de prueba',
        category: 'Antibióticos',
        presentation: 'Blíster test',
        price: 1000,
        image: '/images/test.png',
      })
      const updated = updateProduct(newProduct.id, { price: 2000, stock: 15 })
      expect(updated.price).toBe(2000)
      expect(updated.stock).toBe(15)
      expect(getProductById(newProduct.id).price).toBe(2000)
    })

    it('actualiza datos de un servicio', () => {
      const newService = addService({
        name: 'Servicio de prueba',
        category: 'Consultas',
        species: 'Perro / Gato',
        duration: '30 min',
        price: 10000,
        image: '/images/test.png',
      })
      const updated = updateService(newService.id, { price: 20000 })
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

    it('retorna null al cancelar una solicitud inexistente', () => {
      expect(cancelRequest('REQ-9999')).toBeNull()
    })

    it('actualiza el estado de una solicitud médica', () => {
      const req = createRequest({
        userId: 'U002',
        serviceId: 'SERV001',
        petName: 'Rex',
        species: 'Perro',
        requestedDate: '2026-10-15',
      })

      const updated = updateRequestStatus(req.id, 'confirmed')
      expect(updated.status).toBe('confirmed')
      expect(getRequests()[0].status).toBe('confirmed')
    })

    it('retorna null al actualizar una solicitud inexistente', () => {
      expect(updateRequestStatus('REQ-9999', 'confirmed')).toBeNull()
    })

    it('actualiza el estado de una orden', () => {
      const order = createOrder({
        userId: 'U002',
        items: [{ productId: 'ME001', quantity: 1 }],
        shippingAddress: 'Av. Siempre Viva 123',
      })

      const updated = updateOrderStatus(order.id, 'shipped')
      expect(updated.status).toBe('shipped')
    })

    it('retorna null al actualizar una orden inexistente', () => {
      expect(updateOrderStatus('ORD-9999', 'cancelled')).toBeNull()
    })
  })

  describe('DELETE - Eliminaciones', () => {
    it('elimina un producto del carrito', () => {
      addToCart('ME001', 1)
      addToCart('ME002', 1)
      removeFromCart('ME001')

      expect(getCart().length).toBe(1)
      expect(getCart()[0].productId).toBe('ME002')
    })

    it('elimina un producto del catálogo', () => {
      const newProduct = addProduct({
        name: 'Producto a eliminar',
        category: 'Antibióticos',
        presentation: 'Blíster test',
        price: 1000,
        image: '/images/test.png',
      })
      const deleted = deleteProduct(newProduct.id)
      expect(deleted).toBe(true)
      expect(getProductById(newProduct.id)).toBeUndefined()
    })

    it('elimina un servicio del catálogo', () => {
      const newService = addService({
        name: 'Servicio a eliminar',
        category: 'Consultas',
        species: 'Perro / Gato',
        duration: '30 min',
        price: 10000,
        image: '/images/test.png',
      })
      const deleted = deleteService(newService.id)
      expect(deleted).toBe(true)
      expect(getServiceById(newService.id)).toBeUndefined()
    })
  })

  describe('READ - Blog', () => {
    it('obtiene el listado completo de artículos', () => {
      const posts = getPosts()
      expect(posts.length).toBe(2)
      expect(posts[0].slug).toBe('calendario-vacunacion-cachorros')
    })

    it('encuentra un artículo por su slug', () => {
      const post = getPostBySlug('signos-dolor-mascota')
      expect(post).toBeTruthy()
      expect(post.title).toBe('Cómo identificar signos de dolor en tu mascota')
    })

    it('devuelve undefined si el slug no existe', () => {
      expect(getPostBySlug('no-existe')).toBeUndefined()
    })
  })

  describe('VALIDACIÓN - RUN chileno', () => {
    it('valida RUNs correctos con y sin puntos', () => {
      expect(validateRun('11.111.111-1')).toBe(true)
      expect(validateRun('11111111-1')).toBe(true)
      expect(validateRun('22.222.222-2')).toBe(true)
      expect(validateRun('22222222-2')).toBe(true)
    })

    it('rechaza RUNs inválidos', () => {
      expect(validateRun('12345678-K')).toBe(false)
      expect(validateRun('1234567')).toBe(false)
      expect(validateRun('')).toBe(false)
      expect(validateRun('abcdefgh-5')).toBe(false)
    })

    it('formatea un RUN limpio al formato con puntos', () => {
      expect(formatRun('11111111-1')).toBe('11.111.111-1')
      expect(formatRun('22222222-2')).toBe('22.222.222-2')
    })
  })

  describe('CAMPOS DEL ERS - Productos, servicios y usuarios', () => {
    it('los productos incluyen código, descripción, stock y stock crítico', () => {
      const product = getProductById('ME001')
      expect(product.code).toBe('ME001')
      expect(product.description).toBeTruthy()
      expect(typeof product.stock).toBe('number')
      expect(typeof product.stockCritical).toBe('number')
    })

    it('los servicios incluyen código y descripción', () => {
      const service = getServiceById('SERV001')
      expect(service.code).toBe('SERV001')
      expect(service.description).toBeTruthy()
    })

    it('los usuarios incluyen RUN y fecha de nacimiento', () => {
      const user = getUserByEmail('admin@veterinariasanmarcos.cl')
      expect(user.run).toBeTruthy()
      expect(user.birthDate).toBeTruthy()
    })

    it('existen usuarios semilla de vendedor y veterinario', () => {
      const users = getUsers()
      expect(users.some((u) => u.role === 'vendedor')).toBe(true)
      expect(users.some((u) => u.role === 'veterinario')).toBe(true)
    })
  })

  describe('DELETE - Usuarios', () => {
    it('elimina un usuario del sistema', () => {
      const deleted = deleteUser('U004')
      expect(deleted).toBe(true)
      expect(getUsers().length).toBe(5)
    })

    it('retorna false al eliminar un usuario inexistente', () => {
      expect(deleteUser('U999')).toBe(false)
    })
  })

  describe('LOGIN - Perfiles adicionales', () => {
    it('permite iniciar sesión como vendedor', () => {
      const user = login('vendedor@duoc.cl', 'Vendedor1')
      expect(user).toBeTruthy()
      expect(user.role).toBe('vendedor')
    })

    it('permite iniciar sesión como veterinario', () => {
      const user = login('veterinario@duoc.cl', 'Veter1234')
      expect(user).toBeTruthy()
      expect(user.role).toBe('veterinario')
    })
  })
})