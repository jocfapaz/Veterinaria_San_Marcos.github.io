import { useState } from 'react'
import {
  getServices,
  getServicesByCategory,
  SERVICE_CATEGORIES,
  createRequest,
} from '../mockDB.js'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'

export default function ServiciosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const services =
    selectedCategory === 'Todas'
      ? getServices()
      : getServicesByCategory(selectedCategory)

  function handleAddToRequests(serviceId) {
    createRequest({
      userId: 'U002',
      serviceId,
      petName: 'Mascota',
      species: 'Perro',
      requestedDate: new Date().toISOString().split('T')[0],
    })
    alert('Servicio agregado a tus solicitudes')
  }

  const categories = ['Todas', ...SERVICE_CATEGORIES]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Nuestros servicios</h1>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'secondary'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            onAddToRequests={handleAddToRequests}
          />
        ))}
      </section>
    </div>
  )
}