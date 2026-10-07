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

export const USER_ROLES = [
  'admin',
  'vendedor',
  'veterinario',
  'client',
]

// ─── DATOS INICIALES ──────────────────────────────────────────────────────────

const initialServices = [
  { id: 'SERV001',
    code: 'SERV001', name: 'Consulta general', description: 'Servicio veterinario: Consulta general.',
    category: 'Consultas', species: 'Perro / Gato', duration: '30 min', price: 15000, image: '/images/veterinario_gato.png', note: '' },
  { id: 'SERV002',
    code: 'SERV002', name: 'Consulta urgencia', description: 'Servicio veterinario: Consulta urgencia.',
    category: 'Consultas', species: 'Perro / Gato', duration: '30 min', price: 25000, image: '/images/consulta_emergencia.png', note: 'Fuera de horario +$10.000' },
  { id: 'SERV003',
    code: 'SERV003', name: 'Control postoperatorio', description: 'Servicio veterinario: Control postoperatorio.',
    category: 'Consultas', species: 'Perro / Gato', duration: '20 min', price: 10000, image: '/images/post_operatorio.png', note: '' },
  { id: 'SERV004',
    code: 'SERV004', name: 'Consulta ave / conejo', description: 'Servicio veterinario: Consulta ave / conejo.',
    category: 'Consultas', species: 'Ave / Conejo', duration: '30 min', price: 18000, image: '/images/ave_conejo.png', note: '' },
  { id: 'SERV005',
    code: 'SERV005', name: 'Segunda opinión médica', description: 'Servicio veterinario: Segunda opinión médica.',
    category: 'Consultas', species: 'Todas', duration: '40 min', price: 20000, image: '/images/segunda_opcion.png', note: 'Requiere ficha previa' },
  { id: 'SERV006',
    code: 'SERV006', name: 'Vacuna antirrábica canina', description: 'Servicio veterinario: Vacuna antirrábica canina.',
    category: 'Vacunación', species: 'Perro', duration: '10 min', price: 12000, image: '/images/vacuna_perro.png', note: 'Obligatoria por ley' },
  { id: 'SERV007',
    code: 'SERV007', name: 'Vacuna sextuple canina', description: 'Servicio veterinario: Vacuna sextuple canina.',
    category: 'Vacunación', species: 'Perro', duration: '10 min', price: 18000, image: '/images/vacuna_sextuple.png', note: 'Refuerzo anual' },
  { id: 'SERV008',
    code: 'SERV008', name: 'Vacuna bivalente felina', description: 'Servicio veterinario: Vacuna bivalente felina.',
    category: 'Vacunación', species: 'Gato', duration: '10 min', price: 15000, image: '/images/vacuna_felina.png', note: 'Refuerzo anual' },
  { id: 'SERV009',
    code: 'SERV009', name: 'Vacuna triple felina', description: 'Servicio veterinario: Vacuna triple felina.',
    category: 'Vacunación', species: 'Gato', duration: '10 min', price: 17000, image: '/images/vacuna_triple_felina.png', note: 'Refuerzo anual' },
  { id: 'SERV010',
    code: 'SERV010', name: 'Vacuna Bordetella canina', description: 'Servicio veterinario: Vacuna Bordetella canina.',
    category: 'Vacunación', species: 'Perro', duration: '10 min', price: 14000, image: '/images/vacuna_bordetella.png', note: 'Tos de las perreras' },
  { id: 'SERV011',
    code: 'SERV011', name: 'Vacuna antirrábica felina', description: 'Servicio veterinario: Vacuna antirrábica felina.',
    category: 'Vacunación', species: 'Gato', duration: '10 min', price: 12000, image: '/images/vacuna_antirrabica_felina.png', note: '' },
  { id: 'SERV012',
    code: 'SERV012', name: 'Esterilización hembra canina', description: 'Servicio veterinario: Esterilización hembra canina.',
    category: 'Cirugía', species: 'Perra', duration: '90 min', price: 80000, image: '/images/esterilizacion_canina.png', note: 'Incluye anestesia y hospitalización 24h' },
  { id: 'SERV013',
    code: 'SERV013', name: 'Esterilización macho canino', description: 'Servicio veterinario: Esterilización macho canino.',
    category: 'Cirugía', species: 'Perro', duration: '60 min', price: 60000, image: '/images/esterilizacion_canino.png', note: 'Incluye anestesia' },
  { id: 'SERV014',
    code: 'SERV014', name: 'Esterilización hembra felina', description: 'Servicio veterinario: Esterilización hembra felina.',
    category: 'Cirugía', species: 'Gata', duration: '60 min', price: 65000, image: '/images/esterilizacion_felinaa.png', note: 'Incluye anestesia y hospitalización 24h' },
  { id: 'SERV015',
    code: 'SERV015', name: 'Esterilización macho felino', description: 'Servicio veterinario: Esterilización macho felino.',
    category: 'Cirugía', species: 'Gato', duration: '65 min', price: 50000, image: '/images/esterilizacion_felino.png', note: 'Incluye anestesia' },
  { id: 'SERV016',
    code: 'SERV016', name: 'Extirpación de tumor cutáneo', description: 'Servicio veterinario: Extirpación de tumor cutáneo.',
    category: 'Cirugía', species: 'Perro / Gato', duration: '60 min', price: 120000, image: '/images/cirugia.png', note: 'Precio referencial' },
  { id: 'SERV017',
    code: 'SERV017', name: 'Cesárea de urgencia', description: 'Servicio veterinario: Cesárea de urgencia.',
    category: 'Cirugía', species: 'Perra / Gata', duration: '120 min', price: 180000, image: '/images/embarazaso_canina.png', note: '' },
  { id: 'SERV018',
    code: 'SERV018', name: 'Desparasitación interna pequeños', description: 'Servicio veterinario: Desparasitación interna pequeños.',
    category: 'Desparasitación', species: 'Perro', duration: '5 min', price: 8000, image: '/images/desparacitacion_perro_pequeño.png', note: '< 10 kg' },
  { id: 'SERV019',
    code: 'SERV019', name: 'Desparasitación interna medianos', description: 'Servicio veterinario: Desparasitación interna medianos.',
    category: 'Desparasitación', species: 'Perro', duration: '5 min', price: 9500, image: '/images/desparacitacion_perro_cachorro.png', note: '10-25 kg' },
  { id: 'SERV020',
    code: 'SERV020', name: 'Desparasitación interna grandes', description: 'Servicio veterinario: Desparasitación interna grandes.',
    category: 'Desparasitación', species: 'Perro', duration: '5 min', price: 11000, image: '/images/desparacitacion_perro_grande.png', note: '> 25 kg' },
  { id: 'SERV021',
    code: 'SERV021', name: 'Desparasitación interna felina', description: 'Servicio veterinario: Desparasitación interna felina.',
    category: 'Desparasitación', species: 'Gato', duration: '5 min', price: 8000, image: '/images/desparacitacion_felina.png', note: '' },
  { id: 'SERV022',
    code: 'SERV022', name: 'Antiparasitario externo (pipeta)', description: 'Servicio veterinario: Antiparasitario externo (pipeta).',
    category: 'Desparasitación', species: 'Perro / Gato', duration: '5 min', price: 7500, image: '/images/antiparasitario.png', note: 'Incluye aplicación' },
  { id: 'SERV023',
    code: 'SERV023', name: 'Hemograma completo', description: 'Servicio veterinario: Hemograma completo.',
    category: 'Exámenes', species: 'Perro / Gato', duration: '30 min', price: 22000, image: '/images/hemograma.png', note: 'Resultado en 24-48h' },
  { id: 'SERV024',
    code: 'SERV024', name: 'Perfil bioquímico completo', description: 'Servicio veterinario: Perfil bioquímico completo.',
    category: 'Exámenes', species: 'Perro / Gato', duration: '30 min', price: 35000, image: '/images/perfil_biomico.png', note: 'Resultado en 24-48h' },
  { id: 'SERV025',
    code: 'SERV025', name: 'Radiografía (1 proyección)', description: 'Servicio veterinario: Radiografía (1 proyección).',
    category: 'Exámenes', species: 'Perro / Gato', duration: '20 min', price: 28000, image: '/images/radiografia.png', note: '' },
  { id: 'SERV026',
    code: 'SERV026', name: 'Ecografía abdominal', description: 'Servicio veterinario: Ecografía abdominal.',
    category: 'Exámenes', species: 'Perro / Gato', duration: '30 min', price: 45000, image: '/images/ecografia.png', note: '' },
  { id: 'SERV027',
    code: 'SERV027', name: 'Test de leishmaniasis', description: 'Servicio veterinario: Test de leishmaniasis.',
    category: 'Exámenes', species: 'Perro', duration: '20 min', price: 18000, image: '/images/test_leishmaniasis.png', note: '' },
  { id: 'SERV028',
    code: 'SERV028', name: 'Corte de uñas', description: 'Servicio veterinario: Corte de uñas.',
    category: 'Otros', species: 'Perro / Gato', duration: '15 min', price: 5000, image: '/images/corte_uñas.png', note: '' },
  { id: 'SERV029',
    code: 'SERV029', name: 'Limpieza dental', description: 'Servicio veterinario: Limpieza dental.',
    category: 'Otros', species: 'Perro / Gato', duration: '45 min', price: 55000, image: '/images/limpieza_dental.png', note: 'Requiere anestesia' },
  { id: 'SERV030',
    code: 'SERV030', name: 'Microchip identificación', description: 'Servicio veterinario: Microchip identificación.',
    category: 'Otros', species: 'Perro / Gato', duration: '10 min', price: 15000, image: '/images/microchip.png', note: 'Incluye registro' },
  { id: 'SERV031',
    code: 'SERV031', name: 'Hospitalización (por día)', description: 'Servicio veterinario: Hospitalización (por día).',
    category: 'Otros', species: 'Perro / Gato', duration: '24 hrs', price: 30000, image: '/images/hospitalizacion.png', note: 'Incluye monitoreo y alimentación básica' },
]

let services = [...initialServices]

const initialProducts = [
  { id: 'ME001',
    code: 'ME001', name: 'Amoxibay 250mg', category: 'Antibióticos', presentation: 'Blíster 10 comp.', price: 4200, description: 'Producto veterinario: Amoxibay 250mg.',
    stock: 28,
    stockCritical: 5,
        image: '/images/amoxilina.png', discount: 0 },
  { id: 'ME002',
    code: 'ME002', name: 'Enrox 50mg', category: 'Antibióticos', presentation: 'Blíster 10 comp.', price: 6800, description: 'Producto veterinario: Enrox 50mg.',
    stock: 28,
    stockCritical: 5,
        image: '/images/enrox.png', discount: 0 },
  { id: 'ME003',
    code: 'ME003', name: 'Metrobay 250mg', category: 'Antibióticos', presentation: 'Blíster 10 comp.', price: 3900, description: 'Producto veterinario: Metrobay 250mg.',
    stock: 28,
    stockCritical: 5,
        image: '/images/metrocare.png', discount: 0 },
  { id: 'ME004',
    code: 'ME004', name: 'Nexgard', category: 'Antiparasitarios', presentation: 'Masticable 1 unid.', price: 9500, description: 'Producto veterinario: Nexgard.',
    stock: 28,
    stockCritical: 5,
        image: '/images/nexgard.png', discount: 20 },
  { id: 'ME005',
    code: 'ME005', name: 'Bravecto', category: 'Antiparasitarios', presentation: 'Masticable 1 unid.', price: 18900, description: 'Producto veterinario: Bravecto.',
    stock: 28,
    stockCritical: 5,
        image: '/images/bravecto.png', discount: 0 },
  { id: 'ME006',
    code: 'ME006', name: 'Revolution Plus', category: 'Antiparasitarios', presentation: 'Pipeta 1 unid.', price: 14500, description: 'Producto veterinario: Revolution Plus.',
    stock: 28,
    stockCritical: 5,
        image: '/images/Revolution.png', discount: 15 },
  { id: 'ME007',
    code: 'ME007', name: 'Drontal Plus', category: 'Antiparasitarios', presentation: 'Comprimido 1 unid.', price: 3200, description: 'Producto veterinario: Drontal Plus.',
    stock: 28,
    stockCritical: 5,
        image: '/images/drontal.png', discount: 0 },
  { id: 'ME008',
    code: 'ME008', name: 'Milbemax Gato', category: 'Antiparasitarios', presentation: 'Comprimido 2 unid.', price: 6800, description: 'Producto veterinario: Milbemax Gato.',
    stock: 28,
    stockCritical: 5,
        image: '/images/milbemax.png', discount: 0 },
  { id: 'ME009',
    code: 'ME009', name: 'Meloxicam 1mg', category: 'Antiinflamatorios', presentation: 'Blíster 10 comp.', price: 4500, description: 'Producto veterinario: Meloxicam 1mg.',
    stock: 28,
    stockCritical: 5,
        image: '/images/meloxivet.png', discount: 0 },
  { id: 'ME010',
    code: 'ME010', name: 'Carprofen 50mg', category: 'Antiinflamatorios', presentation: 'Blíster 10 comp.', price: 9800, description: 'Producto veterinario: Carprofen 50mg.',
    stock: 28,
    stockCritical: 5,
        image: '/images/Carprofelican.png', discount: 0 },
  { id: 'ME011',
    code: 'ME011', name: 'Clorhexidina shampoo', category: 'Dermatología', presentation: 'Frasco 250ml', price: 8900, description: 'Producto veterinario: Clorhexidina shampoo.',
    stock: 28,
    stockCritical: 5,
        image: '/images/champo.png', discount: 0 },
  { id: 'ME012',
    code: 'ME012', name: 'Malaseb shampoo', category: 'Dermatología', presentation: 'Frasco 250ml', price: 12500, description: 'Producto veterinario: Malaseb shampoo.',
    stock: 28,
    stockCritical: 5,
        image: '/images/malaseb.png', discount: 15 },
  { id: 'ME013',
    code: 'ME013', name: 'Apoquel 16mg', category: 'Dermatología', presentation: 'Blíster 10 comp.', price: 22000, description: 'Producto veterinario: Apoquel 16mg.',
    stock: 28,
    stockCritical: 5,
        image: '/images/apoquel.png', discount: 0 },
  { id: 'ME014',
    code: 'ME014', name: 'Probifor', category: 'Digestivo', presentation: 'Sobre 5ml x10', price: 5600, description: 'Producto veterinario: Probifor.',
    stock: 28,
    stockCritical: 5,
        image: '/images/probifor.png', discount: 0 },
  { id: 'ME015',
    code: 'ME015', name: 'Omeprazol 10mg vet', category: 'Digestivo', presentation: 'Blíster 10 comp.', price: 3800, description: 'Producto veterinario: Omeprazol 10mg vet.',
    stock: 28,
    stockCritical: 5,
        image: '/images/omeprazol.pmg.jpg', discount: 0 },
  { id: 'ME016',
    code: 'ME016', name: 'Vetmedin 2.5mg', category: 'Cardíaco', presentation: 'Blíster 10 comp.', price: 28000, description: 'Producto veterinario: Vetmedin 2.5mg.',
    stock: 28,
    stockCritical: 5,
        image: '/images/vetmedin.png', discount: 0 },
  { id: 'ME017',
    code: 'ME017', name: 'Tramadol 50mg vet', category: 'Analgésicos', presentation: 'Blíster 10 comp.', price: 5200, description: 'Producto veterinario: Tramadol 50mg vet.',
    stock: 28,
    stockCritical: 5,
        image: '/images/tramadol.png', discount: 0 },
  { id: 'ME018',
    code: 'ME018', name: 'Nobivac DHPPi', category: 'Vacunas', presentation: 'Vial 1 dosis', price: 8500, description: 'Producto veterinario: Nobivac DHPPi.',
    stock: 28,
    stockCritical: 5,
        image: '/images/Nobivac.png', discount: 10 },
  { id: 'ME019',
    code: 'ME019', name: 'Nobivac Rabies', category: 'Vacunas', presentation: 'Vial 1 dosis', price: 5800, description: 'Producto veterinario: Nobivac Rabies.',
    stock: 28,
    stockCritical: 5,
        image: '/images/novibac.png', discount: 0 },
  { id: 'ME020',
    code: 'ME020', name: 'Felocell CVR', category: 'Vacunas', presentation: 'Vial 1 dosis', price: 7200, description: 'Producto veterinario: Felocell CVR.',
    stock: 28,
    stockCritical: 5,
        image: '/images/Felocell.png', discount: 0 },
  { id: 'ME021',
    code: 'ME021', name: 'Omega vet 3-6-9', category: 'Suplementos', presentation: 'Frasco 100ml', price: 9900, description: 'Producto veterinario: Omega vet 3-6-9.',
    stock: 28,
    stockCritical: 5,
        image: '/images/omega.png', discount: 25 },
  { id: 'ME022',
    code: 'ME022', name: 'Condrovet forte', category: 'Suplementos', presentation: 'Blíster 30 comp.', price: 14500, description: 'Producto veterinario: Condrovet forte.',
    stock: 28,
    stockCritical: 5,
        image: '/images/condro.png', discount: 0 },
]

let products = [...initialProducts]

const initialUsers = [
  {
    id: 'U001',
    run: '12.345.678-5',
    email: 'admin@veterinariasanmarcos.cl',
    password: 'Admin1234',
    firstName: 'Administrador',
    lastName: 'San Marcos',
    role: 'admin',
    birthDate: '1985-06-15',
    phone: '+56 9 8765 4321',
    address: 'Av. San Marcos #1234',
    region: 'O\'Higgins',
    commune: 'Rancagua',
    pets: [],
  },
  {
    id: 'U002',
    run: '8.765.432-0',
    email: 'carlos.mendoza@correo.cl',
    password: 'Cliente1234',
    firstName: 'Carlos',
    lastName: 'Mendoza Pérez',
    role: 'client',
    birthDate: '1990-03-22',
    phone: '+56 9 1234 5678',
    address: 'Av. Siempre Viva 123',
    region: 'O\'Higgins',
    commune: 'Rancagua',
    pets: [{ name: 'Rex', species: 'Perro', breed: 'Labrador' }],
  },
  {
    id: 'U003',
    run: '13.579.246-3',
    email: 'ni.catalanv@duocuc.cl',
    password: '123456',
    firstName: 'Nicolás',
    lastName: 'Catalán V.',
    role: 'client',
    birthDate: '1995-01-10',
    phone: '+56 9 8166 1878',
    address: 'Av. Siempre Viva 123',
    region: 'O\'Higgins',
    commune: 'Rancagua',
    pets: [{ name: 'Apolo', species: 'Perro', breed: 'Labrador' }],
  },
  {
    id: 'U004',
    run: '19.283.746-1',
    email: 'jose.roca@duocuc.cl',
    password: '123456',
    firstName: 'Josefa',
    lastName: 'Roca L.',
    role: 'client',
    birthDate: '1998-02-15',
    phone: '+56 9 8367 5828',
    address: 'Av. Siempre Viva 123',
    region: 'O\'Higgins',
    commune: 'Rancagua',
    pets: [{ name: 'Facundo', species: 'Perro', breed: 'Schnauzer' }],
  },
  {
    id: 'U005',
    run: '14.258.369-7',
    email: 'vendedor@duoc.cl',
    password: 'Vendedor1234',
    firstName: 'Josefa',
    lastName: 'Roca',
    role: 'vendedor',
    birthDate: '1992-07-08',
    phone: '+56 9 1111 2222',
    address: 'Av. Los Vendedores 456',
    region: 'Metropolitana',
    commune: 'Santiago',
    pets: [],
  },
  {
    id: 'U006',
    run: '16.493.827-4',
    email: 'veterinario@duoc.cl',
    password: 'Veterinario1234',
    firstName: 'Patricio',
    lastName: 'Soto',
    role: 'veterinario',
    birthDate: '1988-11-03',
    phone: '+56 9 3333 4444',
    address: 'Calle Los Álamos 789',
    region: 'Maule',
    commune: 'Talca',
    pets: [],
  }
]

let users = [...initialUsers]

// ─── BLOG ─────────────────────────────────────────────────────────────────────

const initialPosts = [
  {
    id: 'POST001',
    slug: 'calendario-vacunacion-cachorros',
    title: 'Calendario de vacunación para cachorros',
    category: 'Salud & Prevención',
    excerpt: 'Qué vacunas necesita tu cachorro y en qué momento aplicarlas para garantizar su inmunidad.',
    image: '/images/calendario_vacunas.png',
    alt: 'Calendario de vacunación',
    date: '2026-09-15',
    content: [
      {
        type: 'paragraph',
        text: 'Las vacunas son clave para proteger a tu cachorro de enfermedades graves. En Veterinaria San Marcos recomendamos iniciar el plan de vacunación entre las 6 y 8 semanas de vida, con refuerzos periódicos según la vacuna (séxtuple, antirrábica, Bordetella) hasta completar el esquema anual.',
      },
      {
        type: 'callout',
        text: 'Puedes solicitar una hora de vacunación directamente desde la sección de Servicios de nuestro sitio.',
      },
    ],
  },
  {
    id: 'POST002',
    slug: 'signos-dolor-mascota',
    title: 'Cómo identificar signos de dolor en tu mascota',
    category: 'Bienestar Animal',
    excerpt: 'Señales comportamentales y físicas sutiles que pueden indicar que tu mascota necesita una consulta urgente.',
    image: '/images/signos_dolor.png',
    alt: 'Veterinario examinando a un gato',
    date: '2026-09-22',
    content: [
      {
        type: 'paragraph',
        text: 'Perros y gatos suelen ocultar el dolor de forma instintiva. Cambios en el apetito, menor actividad, posturas inusuales o irritabilidad al ser tocados pueden ser señales de alerta.',
      },
      {
        type: 'callout',
        text: 'Si notas alguno de estos signos, te recomendamos agendar una consulta general lo antes posible desde la sección de Servicios.',
      },
    ],
  },
]

let posts = [...initialPosts]

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


// ─── VALIDACIÓN DE RUN CHILENO ────────────────────────────────────────────────

export function validateRun(run) {
  if (!run) return false
  const clean = run.replace(/\./g, '').replace('-', '').toUpperCase()
  if (!/^\d{7,8}[0-9K]$/.test(clean)) return false

  const body = clean.slice(0, -1)
  const dv = clean.slice(-1)
  let sum = 0
  let multiplier = 2

  for (let i = body.length - 1; i >= 0; i--) {
    sum += Number(body[i]) * multiplier
    multiplier = multiplier === 7 ? 2 : multiplier + 1
  }

  const expectedDv = 11 - (sum % 11)
  let dvChar
  if (expectedDv === 11) dvChar = '0'
  else if (expectedDv === 10) dvChar = 'K'
  else dvChar = String(expectedDv)

  return dv === dvChar
}

export function formatRun(run) {
  if (!run) return ''
  const clean = run.replace(/\./g, '').replace('-', '').toUpperCase()
  if (!/^\d{7,8}[0-9K]$/.test(clean)) return run
  const body = clean.slice(0, -1)
  const dv = clean.slice(-1)
  return `${Number(body).toLocaleString('es-CL').replace(/,/g, '.')}-${dv}`
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
  const newProduct = {
    id: nextId('ME', products),
    discount: 0,
    stock: 0,
    stockCritical: 0,
    ...productData,
  }
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

// ─── READ: BLOG ─────────────────────────────────────────────────────────────────

export const getPosts = () => [...posts]
export const getPostById = (id) => posts.find(p => p.id === id)
export const getPostBySlug = (slug) => posts.find(p => p.slug === slug)

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

export function deleteUser(id) {
  const index = users.findIndex(u => u.id === id)
  if (index === -1) return false
  users.splice(index, 1)
  return true
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

export function updateRequestStatus(id, status) {
  const request = requests.find(r => r.id === id)
  if (!request) return null
  request.status = status
  return request
}

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

export function updateOrderStatus(id, status) {
  const order = orders.find(o => o.id === id)
  if (!order) return null
  order.status = status
  return order
}

export function getUserHistory(userId) {
  return {
    orders: getUserOrders(userId),
    requests: getUserRequests(userId),
  }
}

// ─── RESET (útil para pruebas) ────────────────────────────────────────────────

export function resetDB() {
  services = [...initialServices]
  products = [...initialProducts]
  users = [...initialUsers]
  posts = [...initialPosts]
  cart = []
  requests = []
  orders = []
}