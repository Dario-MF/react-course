import '@testing-library/jest-dom'
import heroes from '../../data/heroes'
import {getHeroeByIdAsync} from '../../base/09-promesas'

describe('tests for 09-promesas ', () => {

    test('comprueba si getHeroeByIdAsync(id) devuelve objeto correcto', () => {
        const id = 1
       
        return getHeroeByIdAsync(id)
            .then(hero => {
                expect( hero ).toBe( heroes[0] );
                
            })
            
    });
    
    test('Comprueba si devulve error correcto getHeroeByIdAsync()', () => {
        const id = 22

        return getHeroeByIdAsync(id)
            .catch(error=> { 
                expect(error).toBe('No se pudo encontrar el héroe')
                
            })
            
    });
    
    
})
