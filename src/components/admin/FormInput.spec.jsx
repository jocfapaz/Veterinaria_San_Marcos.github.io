import { render, screen, fireEvent } from '@testing-library/react'
import FormInput from './FormInput'

describe('FormInput', () => {
  it('renderiza el label y el input', () => {
    render(<FormInput id="name" label="Nombre" />)

    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
  })

  it('pasa el placeholder y el type al input', () => {
    render(<FormInput id="email" label="Correo" type="email" placeholder="tu@correo.cl" />)

    const input = screen.getByLabelText('Correo')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('placeholder', 'tu@correo.cl')
  })

  it('muestra el mensaje de error cuando se proporciona', () => {
    render(<FormInput id="name" label="Nombre" error="Campo requerido" />)

    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  })

  it('no muestra mensaje de error si no se proporciona', () => {
    render(<FormInput id="name" label="Nombre" />)

    expect(screen.queryByText('Campo requerido')).not.toBeInTheDocument()
  })

  it('aplica el borde rojo cuando hay error', () => {
    render(<FormInput id="name" label="Nombre" error="Campo requerido" />)

    expect(screen.getByLabelText('Nombre')).toHaveClass('border-rose-500')
  })

  it('actualiza el valor al escribir', () => {
    const onChange = jasmine.createSpy('onChange')
    render(<FormInput id="name" label="Nombre" value="" onChange={onChange} />)

    fireEvent.change(screen.getByLabelText('Nombre'), {
      target: { value: 'Juan' },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
