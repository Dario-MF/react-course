import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('tests for 08-imp-exp', () => {
    test('evaluamos importacion por id -getHeroeById(id)', () => {
        const id = 1
        const hero = getHeroeById(id)
        const heroId = heroes.find(h => h.id === id)
        expect(hero).toEqual(heroId)
    })
    test('Si no encuentra id return undefind - getHeroeById(id)', () => {
        const id = 20
        expect(getHeroeById(id)).toBe(undefined)
    })

    test('comprobar si la busqueda es correcta - getHeroesByOwner(owner)', () => {
        const owner = 'DC'
        const heroByOwner = heroes.filter(h => h.owner === owner)

        expect(getHeroesByOwner(owner)).toEqual(heroByOwner)
    })
    test('comprobar numero de resultados - getHeroesByOwner(owner)', () => {
        const owner = 'Marvel'
        const heroesMarvel = heroes.filter(h => h.owner === owner)

        expect(getHeroesByOwner(owner).length).toBe(heroesMarvel.length)
    })



})
