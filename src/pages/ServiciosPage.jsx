import { useState } from 'react'
import { useNavigate } from 'react-router'
import {
  getServices,
  getServicesByCategory,
  SERVICE_CATEGORIES,
} from '../mockDB.js'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'

export default function ServiciosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const navigate = useNavigate()
  const services =
    selectedCategory === 'Todas'
      ? getServices()
      : getServicesByCategory(selectedCategory)

  function handleAddToRequests(serviceId) {
    navigate(`/servicios/${serviceId}`)
  }

  const categories = ['Todas', ...SERVICE_CATEGORIES]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <PageHeader
        title="Nuestros servicios"
        subtitle="Atención médica veterinaria profesional para todas las especies."
      />

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
