import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"

describe('Test in 08-imp-exp', () => {
  
  test('getHeroeById should return a hero for ID ', () => {
    
    const id = 1;
    const hero = getHeroeById( id );
    console.log(hero)

    expect( hero ).toEqual({ id:1, name: 'Batman', owner: 'DC'})

  });

  test('getHeroeById should return undefined it does not exist', () => {
    
    const id = 100;
    const hero = getHeroeById( id );

    console.log(hero)

    // expect( hero ).toEqual({ id:1, name: 'Batman', owner: 'DC'})

  });

  test('getHeroesByOwner should return an array the DC heroes ', () => {
    
   const owner = 'DC';
   const heroes = getHeroesByOwner( owner );

    expect( heroes.length ).toBe(3);
    expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

  });

  test('getHeroesByOwner should return an array the Marvel heroes ', () => {
    
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner );
 
     expect( heroes.length ).toBe(2);
     expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
     
   });

});
