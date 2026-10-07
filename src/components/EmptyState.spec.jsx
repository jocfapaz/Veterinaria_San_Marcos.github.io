import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import EmptyState from './EmptyState'

describe('EmptyState', () => {
  it('renderiza título y mensaje', () => {
    render(
      <EmptyState title="Vacío" message="No hay elementos" />,
      { wrapper: MemoryRouter },
    )

    expect(screen.getByText('Vacío')).toBeInTheDocument()
    expect(screen.getByText('No hay elementos')).toBeInTheDocument()
  })

  it('muestra el enlace de acción cuando se proporcionan actionLabel y actionTo', () => {
    const { container } = render(
      <EmptyState
        title="Vacío"
        message="No hay elementos"
        actionLabel="Ir a la tienda"
        actionTo="/tienda"
      />,
      { wrapper: MemoryRouter },
    )

    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link.textContent).toBe('Ir a la tienda')
    expect(link.getAttribute('href')).toMatch(/\/tienda$/)
  })

  it('no muestra enlace si falta actionLabel o actionTo', () => {
    const { container } = render(<EmptyState title="Vacío" message="No hay elementos" />, {
      wrapper: MemoryRouter,
    })

    expect(container.querySelector('a')).not.toBeInTheDocument()
  })
})
