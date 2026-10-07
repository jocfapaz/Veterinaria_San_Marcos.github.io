import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import ServiceCard from './ServiceCard'

describe('ServiceCard', () => {
  const baseProps = {
    id: 'SERV001',
    name: 'Consulta General',
    category: 'Consultas',
    species: 'Perro / Gato',
    duration: '30 min',
    price: 15000,
    image: '/images/test.png',
    onAddToRequests: jasmine.createSpy('onAddToRequests'),
  }

  it('renderiza el nombre, categoría, especie, duración y precio formateado', () => {
    render(<ServiceCard {...baseProps} />, { wrapper: MemoryRouter })

    expect(screen.getByText('Consulta General')).toBeInTheDocument()
    expect(screen.getByText('Consultas · Perro / Gato · 30 min')).toBeInTheDocument()
    expect(screen.getByText('$15.000')).toBeInTheDocument()
  })

  it('muestra la imagen con el alt correcto', () => {
    render(<ServiceCard {...baseProps} />, { wrapper: MemoryRouter })

    const img = screen.getByAltText('Consulta General')
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('/images/test.png')
  })

  it('muestra la nota cuando se proporciona', () => {
    render(<ServiceCard {...baseProps} note="Requiere reserva previa" />, {
      wrapper: MemoryRouter,
    })

    expect(screen.getByText('Requiere reserva previa')).toBeInTheDocument()
  })

  it('no muestra nota si no se proporciona', () => {
    render(<ServiceCard {...baseProps} />, { wrapper: MemoryRouter })

    expect(screen.queryByText('Requiere reserva previa')).not.toBeInTheDocument()
  })

  it('llama a onAddToRequests con el id al hacer clic en Solicitar', () => {
    render(<ServiceCard {...baseProps} />, { wrapper: MemoryRouter })

    fireEvent.click(screen.getByRole('button', { name: /solicitar/i }))
    expect(baseProps.onAddToRequests).toHaveBeenCalledWith('SERV001')
  })
})
