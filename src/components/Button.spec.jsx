import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renderiza el texto hijo', () => {
    render(<Button>Guardar</Button>)
    expect(screen.getByRole('button', { name: /guardar/i })).toBeInTheDocument()
  })

  it('ejecuta onClick cuando se hace clic', () => {
    const onClick = jasmine.createSpy('onClick')
    render(<Button onClick={onClick}>Haz clic</Button>)

    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('usa el type proporcionado', () => {
    render(<Button type="submit">Enviar</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('aplica la clase del variant secundario', () => {
    render(<Button variant="secondary">Secundario</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-emerald-50')
  })
})
