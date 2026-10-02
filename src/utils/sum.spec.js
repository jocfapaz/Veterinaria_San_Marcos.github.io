// src/utils/sum.spec.js
// Prueba mínima para verificar que el entorno Jasmine + Karma + webpack funciona.
function sum(a, b) {
  return a + b
}

describe('sum', () => {
  it('suma dos números positivos', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('suma números negativos', () => {
    expect(sum(-1, -2)).toBe(-3)
  })
})
