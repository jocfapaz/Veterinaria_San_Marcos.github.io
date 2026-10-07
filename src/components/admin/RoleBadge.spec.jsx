import { render, screen } from '@testing-library/react'
import RoleBadge from './RoleBadge'

describe('RoleBadge', () => {
  it('muestra el label Administrador para rol admin', () => {
    render(<RoleBadge role="admin" />)
    expect(screen.getByText('Administrador')).toBeInTheDocument()
  })

  it('muestra el label Vendedor para rol vendedor', () => {
    render(<RoleBadge role="vendedor" />)
    expect(screen.getByText('Vendedor')).toBeInTheDocument()
  })

  it('muestra el label Veterinario para rol veterinario', () => {
    render(<RoleBadge role="veterinario" />)
    expect(screen.getByText('Veterinario')).toBeInTheDocument()
  })

  it('muestra el label Cliente para rol client', () => {
    render(<RoleBadge role="client" />)
    expect(screen.getByText('Cliente')).toBeInTheDocument()
  })

  it('usa el estilo de Cliente como fallback para un rol desconocido', () => {
    render(<RoleBadge role="desconocido" />)
    expect(screen.getByText('Cliente')).toBeInTheDocument()
  })
})
