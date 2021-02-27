import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import React from 'react'
import PrimeraApp from '../../PrimeraApp'

describe('Tests for component <PrimeraApp /> ', () => {

    /* test('comprobacion de render del subtitulo', () => {
        const saludo = 'Hola soy Dario'
        const { getByText } = render(<PrimeraApp saludo={saludo} />)

        expect(getByText(saludo)).toBeInTheDocument()
    }) */

    test('comprobacion de render del saludo', () => {
        const saludo = 'Hola soy Dario'
        const wrapped = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapped).toMatchSnapshot()
    })

    test('comprobacion del render del subtitulo', () => {
        const saludo = 'Hola soy Dario'
        const subtitulo = 'Hola soy un subtitulo'

        const wrapped = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />)
        const textSaludo = wrapped.find('p').text()
        expect(textSaludo).toBe(subtitulo)

    })



})
