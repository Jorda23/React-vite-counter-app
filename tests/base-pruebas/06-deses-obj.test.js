import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Test in 06-deses-obj', () => {

    test('usContext should return an object', () =>{
        const testObjet = {
            nombreClave: 'Jmarvin26#',
            anios: 78 ,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const obj = usContext();
        
        expect( testObjet ).toStrictEqual( obj );
    });

});