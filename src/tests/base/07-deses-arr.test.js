import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr'

describe('tests for 0-deses-arr', () => {
    test('Comprobar que la funcion  devuelva los array', () => {
        const arrPrueba = ['ABC', 123]

        expect(retornaArreglo()).toEqual(arrPrueba)
    })
    test('comprobar tipeOf de funcion retornaArreglo', () => {
        const [letras, numeros] = retornaArreglo()

        expect(typeof letras).toBe('string')
        expect(typeof numeros).toBe('number')
    })


})
