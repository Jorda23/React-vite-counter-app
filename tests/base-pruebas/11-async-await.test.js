import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test in 11-async-await', () => {
  
    test('getImagen should of return an url of the imagen', async() => {
        const url = await getImagen();
        expect( typeof url ).toBe('string');
  })
  
})
