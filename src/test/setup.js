// src/test/setup.js
// Agrega matchers como toBeInTheDocument() a expect de Jasmine.
import { cleanup } from '@testing-library/react'
import JasmineDOM from '@testing-library/jasmine-dom'

beforeAll(() => {
  jasmine.addMatchers(JasmineDOM)
})

afterEach(() => {
  cleanup()
})
