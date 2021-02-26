import '@testing-library/jest-dom'

import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('tests for 05-funciones', () => {
    test('comprueba si la funcion getUser devuelve un objeto ', () => {

        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        expect(getUser()).toEqual(user)

    })
    test('Comprobar que el objeto devuelve el parametro pasado', () => {
        const name = 'Dario'
        const object = {
            uid: 'ABC567',
            username: name
        }
        expect(getUsuarioActivo(name)).toEqual(object)
    })


})
