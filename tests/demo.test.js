
describe('Pruebas en <DemoComponent />', () =>{

    test('Esta pruba no debe de fallar', () => {
            //1. Inicializacion
            const message1= 'Hello World';
            
            //2. Estimulo
            const message2 = message1.trim();
            
            //3. Observar el comportamiento... esperando
            expect( message1 ).toBe( message2 );
    });

});
