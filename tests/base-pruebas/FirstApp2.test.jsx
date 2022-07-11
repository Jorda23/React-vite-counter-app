import { render, screen } from "@testing-library/react";
import { FirstAppWatch } from "../../src/FirstApp"

describe('Tets in <FirstAppWatch />', () => {
    
    const title= 'Hello, I am Goku';
    const subTitle=  'I am a subTitle';

    test('debe hacer math con el snapshot', () => {
      const { container } = render( <FirstAppWatch title={title} />);
      expect( container ).toMatchSnapshot();
    });

    test('Debe de mostar el mensaje de, "Hello, I am Goku"', () => {
        render( <FirstAppWatch title={ title} />);
        expect( screen.getByText(title)).toBeTruthy();
    });

    test('Debe de mostar el titulo en un h1', () => {
        render( <FirstAppWatch title={ title }/>);
        expect( screen.getByRole('heading', { level: 1}).innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        render( 
            <FirstAppWatch 
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect( screen.getAllByText(subTitle).length ).toBe(1);
    });
    
    
    
});
