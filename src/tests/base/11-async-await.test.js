import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await'

describe('Tests for 11-async-await', () => {
    test('comprobamos que la peticion devuelve un url', async () => {

        const url = await getImagen()

        expect(url.includes('https://')).toBe(true)

    })

})
