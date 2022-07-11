import { render } from "@testing-library/react";
import { FirstAppWatch } from "../../src/FirstApp"

describe('Tets in <FirstAppWatch />', () => {
    
    // test('you must do a math with the snapshot ', () => {
      
    //     const title = 'Hola soy goku';
    //     const {container } = render( <FirstAppWatch title={ title }/> );

    //     expect( container ).toMatchSnapshot();
    // });

    test('It must show the title in an h1 ', () => {
      
        const title = 'Hola soy goku';
        const {container, getByText, getByTestId } = render( <FirstAppWatch title={ title }/> );
        expect( getByText( title )).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('It must show the subtitle in an h1 ', () => {
      
        const title = 'Hola soy goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstAppWatch 
                title={ title }
                subTitle={ subTitle }
            /> 
        );
        expect( getAllByText(subTitle).lenght).toBe(2);

    });
    
});
