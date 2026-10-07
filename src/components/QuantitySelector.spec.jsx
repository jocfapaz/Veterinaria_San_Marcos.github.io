import { render, screen, fireEvent } from '@testing-library/react'
import QuantitySelector from './QuantitySelector'

describe('QuantitySelector', () => {
  it('renderiza el valor inicial', () => {
    render(<QuantitySelector value={3} onChange={() => {}} />)
    expect(screen.getByDisplayValue('3')).toBeInTheDocument()
  })

  it('incrementa la cantidad cuando se hace clic en +', () => {
    const onChange = jasmine.createSpy('onChange')
    render(<QuantitySelector value={3} onChange={onChange} />)

    fireEvent.click(screen.getByRole('button', { name: /aumentar/i }))
    expect(onChange).toHaveBeenCalledWith(4)
  })

  it('decrementa la cantidad cuando se hace clic en -', () => {
    const onChange = jasmine.createSpy('onChange')
    render(<QuantitySelector value={3} onChange={onChange} />)

    fireEvent.click(screen.getByRole('button', { name: /disminuir/i }))
    expect(onChange).toHaveBeenCalledWith(2)
  })

  it('deshabilita el botón de decremento en el mínimo', () => {
    render(<QuantitySelector value={1} onChange={() => {}} />)

    expect(screen.getByRole('button', { name: /disminuir/i })).toBeDisabled()
  })

  it('deshabilita el botón de incremento en el máximo', () => {
    render(<QuantitySelector value={99} onChange={() => {}} />)

    expect(screen.getByRole('button', { name: /aumentar/i })).toBeDisabled()
  })

  it('actualiza el valor al escribir en el input', () => {
    const onChange = jasmine.createSpy('onChange')
    render(<QuantitySelector value={1} onChange={onChange} />)

    fireEvent.change(screen.getByDisplayValue('1'), { target: { value: '5' } })
    expect(onChange).toHaveBeenCalledWith(5)
  })

  it('ajusta al mínimo si el valor ingresado es menor al mínimo', () => {
    const onChange = jasmine.createSpy('onChange')
    render(<QuantitySelector value={5} onChange={onChange} min={2} />)

    fireEvent.change(screen.getByDisplayValue('5'), { target: { value: '0' } })
    expect(onChange).toHaveBeenCalledWith(2)
  })
})
