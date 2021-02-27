import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CounterApp from '../../CounterApp'

describe('Tests for <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />)
    beforeEach(() => { wrapper = shallow(<CounterApp />) })


    test('match de props por defecto', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('comprobar si el valor pasado se renderiza correctamente', () => {

        const wrapper = shallow(<CounterApp value={11} />)

        const valueRecived = wrapper.find('h2').text().trim()

        expect(valueRecived).toBe('11')
    })

    test('comprobar funcionamiento button +1', () => {

        wrapper.find('button').at(0).simulate('click')

        const valueRecived = wrapper.find('h2').text().trim()

        expect(valueRecived).toBe('11')
    })

    test('comprobar funcionamiento button -1', () => {

        wrapper.find('button').at(2).simulate('click')

        const valueRecived = wrapper.find('h2').text().trim()

        expect(valueRecived).toBe('9')
    })

    test('comprobar funcionamiento button reset', () => {

        const wrapper = shallow(<CounterApp value={110} />)
        wrapper.find('button').at(0).simulate('click')//+1
        wrapper.find('button').at(2).simulate('click')//-1
        wrapper.find('button').at(1).simulate('click')//reset

        const valueRecived = wrapper.find('h2').text().trim()

        expect(valueRecived).toBe('110')
    })



})
