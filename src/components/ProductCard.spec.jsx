import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import ProductCard from './ProductCard'

describe('ProductCard', () => {
  const baseProps = {
    id: 'ME001',
    name: 'Bravecto',
    category: 'Antiparasitarios',
    presentation: 'Comprimido',
    price: 4200,
    image: '/images/bravecto.png',
    discount: 0,
    onAdd: jasmine.createSpy('onAdd'),
  }

  it('renderiza nombre, categoría, presentación y precio', () => {
    render(<ProductCard {...baseProps} />, { wrapper: MemoryRouter })

    expect(screen.getByText('Bravecto')).toBeInTheDocument()
    expect(screen.getByText('Antiparasitarios · Comprimido')).toBeInTheDocument()
    expect(screen.getByText('$4.200')).toBeInTheDocument()
  })

  it('muestra el descuento y el precio tachado cuando aplica', () => {
    render(<ProductCard {...baseProps} discount={20} />, { wrapper: MemoryRouter })

    expect(screen.getByText('-20%')).toBeInTheDocument()
    expect(screen.getByText('$4.200')).toBeInTheDocument()
    expect(screen.getByText('$3.360')).toBeInTheDocument()
  })

  it('no muestra el badge de descuento si el descuento es 0', () => {
    render(<ProductCard {...baseProps} />, { wrapper: MemoryRouter })

    expect(screen.queryByText(/-%/)).not.toBeInTheDocument()
  })

  it('llama a onAdd con el id al hacer clic en Añadir', () => {
    render(<ProductCard {...baseProps} />, { wrapper: MemoryRouter })

    fireEvent.click(screen.getByRole('button', { name: /añadir/i }))
    expect(baseProps.onAdd).toHaveBeenCalledWith('ME001')
  })
})
