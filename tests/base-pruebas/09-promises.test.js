import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test in getHeroeByIdAsync', () => {
  
    test('getHeroeByIdAsync should return a heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
           
            });
    });

    test('getHeroeByIdAsync should receive an error, if the heroe not exist', (done) => {

        const id = 100;
        getHeroeByIdAsync( id )
        .then( hero => {
            expect( hero ).toBeFalsy();
            done();
        })
        .catch( error => {
            expect( error ).toBe( 'No se pudo encontrar el héroe' );
            done();
        });
            
    });

});
