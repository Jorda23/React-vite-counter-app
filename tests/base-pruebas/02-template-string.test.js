import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', ()=> {
    test('getSaludo debe retornar "Hola Jordn"', () => {
        
        const name = 'Jordan';
        const message = getSaludo();

        expect( message ).toBe(`Hola ${ name }`)

    });
} )