// Fuente de datos simulada (mock backend) para Veterinaria San Marcos.
// Trabaja en memoria. La persistencia en localStorage la manejará React Context.

// ─── CATEGORÍAS ───────────────────────────────────────────────────────────────

export const SERVICE_CATEGORIES = [
  'Consultas',
  'Vacunación',
  'Cirugía',
  'Desparasitación',
  'Exámenes',
  'Otros',
]

export const PRODUCT_CATEGORIES = [
  'Antibióticos',
  'Antiparasitarios',
  'Antiinflamatorios',
  'Dermatología',
  'Digestivo',
  'Cardíaco',
  'Analgésicos',
  'Vacunas',
  'Suplementos',
]

// ─── DATOS INICIALES ──────────────────────────────────────────────────────────

const services = [
  { id: 'SERV001', name: 'Consulta general', category: 'Consultas', species: 'Perro / Gato', duration: '30 min', price: 15000, image: '/images/veterinario_gato.png', note: '' },
  { id: 'SERV002', name: 'Consulta urgencia', category: 'Consultas', species: 'Perro / Gato', duration: '30 min', price: 25000, image: '/images/consulta_emergencia.png', note: 'Fuera de horario +$10.000' },
  { id: 'SERV003', name: 'Control postoperatorio', category: 'Consultas', species: 'Perro / Gato', duration: '20 min', price: 10000, image: '/images/post_operatorio.png', note: '' },
  { id: 'SERV004', name: 'Consulta ave / conejo', category: 'Consultas', species: 'Ave / Conejo', duration: '30 min', price: 18000, image: '/images/ave_conejo.png', note: '' },
  { id: 'SERV005', name: 'Segunda opinión médica', category: 'Consultas', species: 'Todas', duration: '40 min', price: 20000, image: '/images/segunda_opcion.png', note: 'Requiere ficha previa' },
  { id: 'SERV006', name: 'Vacuna antirrábica canina', category: 'Vacunación', species: 'Perro', duration: '10 min', price: 12000, image: '/images/vacuna_perro.png', note: 'Obligatoria por ley' },
  { id: 'SERV007', name: 'Vacuna sextuple canina', category: 'Vacunación', species: 'Perro', duration: '10 min', price: 18000, image: '/images/vacuna_sextuple.png', note: 'Refuerzo anual' },
  { id: 'SERV008', name: 'Vacuna bivalente felina', category: 'Vacunación', species: 'Gato', duration: '10 min', price: 15000, image: '/images/vacuna_felina.png', note: 'Refuerzo anual' },
  { id: 'SERV009', name: 'Vacuna triple felina', category: 'Vacunación', species: 'Gato', duration: '10 min', price: 17000, image: '/images/vacuna_triple_felina.png', note: 'Refuerzo anual' },
  { id: 'SERV010', name: 'Vacuna Bordetella canina', category: 'Vacunación', species: 'Perro', duration: '10 min', price: 14000, image: '/images/vacuna_bordetella.png', note: 'Tos de las perreras' },
  { id: 'SERV011', name: 'Vacuna antirrábica felina', category: 'Vacunación', species: 'Gato', duration: '10 min', price: 12000, image: '/images/vacuna_antirrabica_felina.png', note: '' },
  { id: 'SERV012', name: 'Esterilización hembra canina', category: 'Cirugía', species: 'Perra', duration: '90 min', price: 80000, image: '/images/esterilizacion_canina.png', note: 'Incluye anestesia y hospitalización 24h' },
  { id: 'SERV013', name: 'Esterilización macho canino', category: 'Cirugía', species: 'Perro', duration: '60 min', price: 60000, image: '/images/esterilizacion_canino.png', note: 'Incluye anestesia' },
  { id: 'SERV014', name: 'Esterilización hembra felina', category: 'Cirugía', species: 'Gata', duration: '60 min', price: 65000, image: '/images/esterilizacion_felinaa.png', note: 'Incluye anestesia y hospitalización 24h' },
  { id: 'SERV015', name: 'Esterilización macho felino', category: 'Cirugía', species: 'Gato', duration: '65 min', price: 50000, image: '/images/esterilizacion_felino.png', note: 'Incluye anestesia' },
  { id: 'SERV016', name: 'Extirpación de tumor cutáneo', category: 'Cirugía', species: 'Perro / Gato', duration: '60 min', price: 120000, image: '/images/cirugia.png', note: 'Precio referencial' },
  { id: 'SERV017', name: 'Cesárea de urgencia', category: 'Cirugía', species: 'Perra / Gata', duration: '120 min', price: 180000, image: '/images/embarazaso_canina.png', note: '' },
  { id: 'SERV018', name: 'Desparasitación interna pequeños', category: 'Desparasitación', species: 'Perro', duration: '5 min', price: 8000, image: '/images/desparacitacion_perro_pequeño.png', note: '< 10 kg' },
  { id: 'SERV019', name: 'Desparasitación interna medianos', category: 'Desparasitación', species: 'Perro', duration: '5 min', price: 9500, image: '/images/desparacitacion_perro_cachorro.png', note: '10-25 kg' },
  { id: 'SERV020', name: 'Desparasitación interna grandes', category: 'Desparasitación', species: 'Perro', duration: '5 min', price: 11000, image: '/images/desparacitacion_perro_grande.png', note: '> 25 kg' },
  { id: 'SERV021', name: 'Desparasitación interna felina', category: 'Desparasitación', species: 'Gato', duration: '5 min', price: 8000, image: '/images/desparacitacion_felina.png', note: '' },
  { id: 'SERV022', name: 'Antiparasitario externo (pipeta)', category: 'Desparasitación', species: 'Perro / Gato', duration: '5 min', price: 7500, image: '/images/antiparasitario.png', note: 'Incluye aplicación' },
  { id: 'SERV023', name: 'Hemograma completo', category: 'Exámenes', species: 'Perro / Gato', duration: '30 min', price: 22000, image: '/images/hemograma.png', note: 'Resultado en 24-48h' },
  { id: 'SERV024', name: 'Perfil bioquímico completo', category: 'Exámenes', species: 'Perro / Gato', duration: '30 min', price: 35000, image: '/images/perfil_biomico.png', note: 'Resultado en 24-48h' },
  { id: 'SERV025', name: 'Radiografía (1 proyección)', category: 'Exámenes', species: 'Perro / Gato', duration: '20 min', price: 28000, image: '/images/radiografia.png', note: '' },
  { id: 'SERV026', name: 'Ecografía abdominal', category: 'Exámenes', species: 'Perro / Gato', duration: '30 min', price: 45000, image: '/images/ecografia.png', note: '' },
  { id: 'SERV027', name: 'Test de leishmaniasis', category: 'Exámenes', species: 'Perro', duration: '20 min', price: 18000, image: '/images/test_leishmaniasis.png', note: '' },
  { id: 'SERV028', name: 'Corte de uñas', category: 'Otros', species: 'Perro / Gato', duration: '15 min', price: 5000, image: '/images/corte_uñas.png', note: '' },
  { id: 'SERV029', name: 'Limpieza dental', category: 'Otros', species: 'Perro / Gato', duration: '45 min', price: 55000, image: '/images/limpieza_dental.png', note: 'Requiere anestesia' },
  { id: 'SERV030', name: 'Microchip identificación', category: 'Otros', species: 'Perro / Gato', duration: '10 min', price: 15000, image: '/images/microchip.png', note: 'Incluye registro' },
  { id: 'SERV031', name: 'Hospitalización (por día)', category: 'Otros', species: 'Perro / Gato', duration: '24 hrs', price: 30000, image: '/images/hospitalizacion.png', note: 'Incluye monitoreo y alimentación básica' },
]

const products = [
  { id: 'ME001', name: 'Amoxibay 250mg', category: 'Antibióticos', presentation: 'Blíster 10 comp.', price: 4200, image: '/images/amoxilina.png', discount: 0 },
  { id: 'ME002', name: 'Enrox 50mg', category: 'Antibióticos', presentation: 'Blíster 10 comp.', price: 6800, image: '/images/enrox.png', discount: 0 },
  { id: 'ME003', name: 'Metrobay 250mg', category: 'Antibióticos', presentation: 'Blíster 10 comp.', price: 3900, image: '/images/metrocare.png', discount: 0 },
  { id: 'ME004', name: 'Nexgard', category: 'Antiparasitarios', presentation: 'Masticable 1 unid.', price: 9500, image: '/images/nexgard.png', discount: 20 },
  { id: 'ME005', name: 'Bravecto', category: 'Antiparasitarios', presentation: 'Masticable 1 unid.', price: 18900, image: '/images/bravecto.png', discount: 0 },
  { id: 'ME006', name: 'Revolution Plus', category: 'Antiparasitarios', presentation: 'Pipeta 1 unid.', price: 14500, image: '/images/Revolution.png', discount: 15 },
  { id: 'ME007', name: 'Drontal Plus', category: 'Antiparasitarios', presentation: 'Comprimido 1 unid.', price: 3200, image: '/images/drontal.png', discount: 0 },
  { id: 'ME008', name: 'Milbemax Gato', category: 'Antiparasitarios', presentation: 'Comprimido 2 unid.', price: 6800, image: '/images/milbemax.png', discount: 0 },
  { id: 'ME009', name: 'Meloxicam 1mg', category: 'Antiinflamatorios', presentation: 'Blíster 10 comp.', price: 4500, image: '/images/meloxivet.png', discount: 0 },
  { id: 'ME010', name: 'Carprofen 50mg', category: 'Antiinflamatorios', presentation: 'Blíster 10 comp.', price: 9800, image: '/images/Carprofelican.png', discount: 0 },
  { id: 'ME011', name: 'Clorhexidina shampoo', category: 'Dermatología', presentation: 'Frasco 250ml', price: 8900, image: '/images/champo.png', discount: 0 },
  { id: 'ME012', name: 'Malaseb shampoo', category: 'Dermatología', presentation: 'Frasco 250ml', price: 12500, image: '/images/malaseb.png', discount: 15 },
  { id: 'ME013', name: 'Apoquel 16mg', category: 'Dermatología', presentation: 'Blíster 10 comp.', price: 22000, image: '/images/apoquel.png', discount: 0 },
  { id: 'ME014', name: 'Probifor', category: 'Digestivo', presentation: 'Sobre 5ml x10', price: 5600, image: '/images/probifor.png', discount: 0 },
  { id: 'ME015', name: 'Omeprazol 10mg vet', category: 'Digestivo', presentation: 'Blíster 10 comp.', price: 3800, image: '/images/omeprazol.pmg.jpg', discount: 0 },
  { id: 'ME016', name: 'Vetmedin 2.5mg', category: 'Cardíaco', presentation: 'Blíster 10 comp.', price: 28000, image: '/images/vetmedin.png', discount: 0 },
  { id: 'ME017', name: 'Tramadol 50mg vet', category: 'Analgésicos', presentation: 'Blíster 10 comp.', price: 5200, image: '/images/tramadol.png', discount: 0 },
  { id: 'ME018', name: 'Nobivac DHPPi', category: 'Vacunas', presentation: 'Vial 1 dosis', price: 8500, image: '/images/Nobivac.png', discount: 10 },
  { id: 'ME019', name: 'Nobivac Rabies', category: 'Vacunas', presentation: 'Vial 1 dosis', price: 5800, image: '/images/novibac.png', discount: 0 },
  { id: 'ME020', name: 'Felocell CVR', category: 'Vacunas', presentation: 'Vial 1 dosis', price: 7200, image: '/images/Felocell.png', discount: 0 },
  { id: 'ME021', name: 'Omega vet 3-6-9', category: 'Suplementos', presentation: 'Frasco 100ml', price: 9900, image: '/images/omega.png', discount: 25 },
  { id: 'ME022', name: 'Condrovet forte', category: 'Suplementos', presentation: 'Blíster 30 comp.', price: 14500, image: '/images/condro.png', discount: 0 },
]

const users = [
  {
    id: 'U001',
    email: 'admin@veterinariasanmarcos.cl',
    password: 'Admin1234',
    firstName: 'Administrador',
    lastName: 'San Marcos',
    role: 'admin',
    phone: '+56 9 8765 4321',
    address: 'Av. San Marcos #1234',
    region: 'O\'Higgins',
    commune: 'Rancagua',
    pets: [],
  },
  {
    id: 'U002',
    email: 'carlos.mendoza@correo.cl',
    password: 'Cliente1234',
    firstName: 'Carlos',
    lastName: 'Mendoza Pérez',
    role: 'client',
    phone: '+56 9 1234 5678',
    address: 'Av. Siempre Viva 123',
    region: 'O\'Higgins',
    commune: 'Rancagua',
    pets: [{ name: 'Rex', species: 'Perro', breed: 'Labrador' }],
  },
]

// ─── ESTADO DINÁMICO ──────────────────────────────────────────────────────────

let cart = []
let requests = []
let orders = []

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function nextId(prefix, items) {
  const nums = items
    .map(i => parseInt(i.id.replace(prefix, ''), 10))
    .filter(n => !Number.isNaN(n))
  const max = nums.length ? Math.max(...nums) : 0
  return `${prefix}${String(max + 1).padStart(3, '0')}`
}

export function formatPrice(amount) {
  return `$${amount.toLocaleString('es-CL')}`
}

export function calculateDiscountedPrice(price, discount) {
  return Math.round(price * (1 - discount / 100))
}

export function generateOrderNumber() {
  return `ORD-${Date.now()}`
}

// ─── READ: SERVICIOS ──────────────────────────────────────────────────────────

export const getServices = () => [...services]
export const getServiceById = (id) => services.find(s => s.id === id)
export const getServicesByCategory = (category) =>
  category === 'Todas' ? [...services] : services.filter(s => s.category === category)

// ─── CREATE / UPDATE / DELETE: SERVICIOS ──────────────────────────────────────

export function addService(serviceData) {
  const newService = { id: nextId('SERV', services), ...serviceData }
  services.push(newService)
  return newService
}

export function updateService(id, updates) {
  const index = services.findIndex(s => s.id === id)
  if (index === -1) return null
  services[index] = { ...services[index], ...updates }
  return services[index]
}

export function deleteService(id) {
  const index = services.findIndex(s => s.id === id)
  if (index === -1) return false
  services.splice(index, 1)
  return true
}

// ─── READ: PRODUCTOS ──────────────────────────────────────────────────────────

export const getProducts = () => [...products]
export const getProductById = (id) => products.find(p => p.id === id)
export const getProductsByCategory = (category) =>
  category === 'Todas' ? [...products] : products.filter(p => p.category === category)
export const getProductsOnSale = () => products.filter(p => p.discount > 0)

// ─── CREATE / UPDATE / DELETE: PRODUCTOS ──────────────────────────────────────

export function addProduct(productData) {
  const newProduct = { id: nextId('ME', products), discount: 0, ...productData }
  products.push(newProduct)
  return newProduct
}

export function updateProduct(id, updates) {
  const index = products.findIndex(p => p.id === id)
  if (index === -1) return null
  products[index] = { ...products[index], ...updates }
  return products[index]
}

export function deleteProduct(id) {
  const index = products.findIndex(p => p.id === id)
  if (index === -1) return false
  products.splice(index, 1)
  return true
}

// ─── READ: USUARIOS ───────────────────────────────────────────────────────────

export const getUsers = () => [...users]
export const getUserById = (id) => users.find(u => u.id === id)
export const getUserByEmail = (email) => users.find(u => u.email === email)

// ─── CREATE / UPDATE: USUARIOS ────────────────────────────────────────────────

export function registerUser(userData) {
  if (getUserByEmail(userData.email)) {
    throw new Error('El correo ya está registrado')
  }
  const newUser = {
    id: nextId('U', users),
    role: 'client',
    pets: [],
    ...userData,
  }
  users.push(newUser)
  return newUser
}

export function updateUser(id, updates) {
  const index = users.findIndex(u => u.id === id)
  if (index === -1) return null
  users[index] = { ...users[index], ...updates }
  return users[index]
}

// ─── AUTENTICACIÓN SIMULADA ───────────────────────────────────────────────────

export function login(email, password) {
  const user = users.find(u => u.email === email && u.password === password)
  return user ? { ...user, password: undefined } : null
}

// ─── CARRITO ──────────────────────────────────────────────────────────────────

export const getCart = () => [...cart]

export function addToCart(productId, quantity = 1) {
  const existing = cart.find(item => item.productId === productId)
  if (existing) {
    existing.quantity += quantity
  } else {
    cart.push({ productId, quantity })
  }
  return getCart()
}

export function updateCartItem(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId)
    return getCart()
  }
  const item = cart.find(i => i.productId === productId)
  if (item) {
    item.quantity = quantity
  }
  return getCart()
}

export function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId)
  return getCart()
}

export function clearCart() {
  cart = []
}

export function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = getProductById(item.productId)
    if (!product) return total
    const price = calculateDiscountedPrice(product.price, product.discount)
    return total + price * item.quantity
  }, 0)
}

// ─── SOLICITUDES DE SERVICIOS ─────────────────────────────────────────────────

export const getRequests = () => [...requests]
export const getRequestById = (id) => requests.find(r => r.id === id)
export const getUserRequests = (userId) => requests.filter(r => r.userId === userId)

export function createRequest({ userId, serviceId, petName, species, requestedDate }) {
  const request = {
    id: `REQ-${Date.now()}`,
    userId,
    serviceId,
    petName,
    species,
    requestedDate,
    status: 'pending',
    createdAt: new Date().toISOString(),
  }
  requests.push(request)
  return request
}

export function cancelRequest(id) {
  const request = requests.find(r => r.id === id)
  if (!request) return null
  request.status = 'cancelled'
  return request
}

// ─── ÓRDENES DE COMPRA ────────────────────────────────────────────────────────

export const getOrders = () => [...orders]
export const getOrderById = (id) => orders.find(o => o.id === id)
export const getUserOrders = (userId) => orders.filter(o => o.userId === userId)

export function createOrder({ userId, items, shippingAddress, instructions = '' }) {
  const orderItems = items.map(item => {
    const product = getProductById(item.productId)
    return {
      productId: item.productId,
      name: product.name,
      price: product.price,
      discount: product.discount,
      quantity: item.quantity,
    }
  })

  const total = orderItems.reduce((sum, item) => {
    const price = calculateDiscountedPrice(item.price, item.discount)
    return sum + price * item.quantity
  }, 0)

  const order = {
    id: `ORD-${Date.now()}`,
    orderNumber: generateOrderNumber(),
    userId,
    items: orderItems,
    total,
    shippingAddress,
    instructions,
    status: 'paid',
    createdAt: new Date().toISOString(),
  }

  orders.push(order)
  return order
}

// ─── RESET (útil para pruebas) ────────────────────────────────────────────────

export function resetDB() {
  cart = []
  requests = []
  orders = []
}