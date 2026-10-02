// src/test/setup.js
// Agrega matchers como toBeInTheDocument() a expect de Jasmine.
import JasmineDOM from '@testing-library/jasmine-dom'

beforeAll(() => {
  jasmine.addMatchers(JasmineDOM)
})
