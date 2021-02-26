import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('test for 02-template-string', () => {
    test('return = Hola Dario', () => {
        const nombre = 'Dario'
        const saludo = getSaludo(nombre)

        expect(saludo).toBe('Hola ' + nombre)
    })
    test('return default = Hola Pedro', () => {
        const text = 'Hola Pedro'
        const saludo = getSaludo()

        expect(saludo).toBe(text)
    })




})
