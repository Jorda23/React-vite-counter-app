// Tarea
//Pruebas con el <counterApp />

// test: debe de hacer math con el snapshot
// test: debe de mostar el valor inicial de 100 <CounterApp value={100} />
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp} from "../../src/CounterApp";

describe('Pruebas con el <counterApp />', () => {

  const initialValue = 10;

  test(' test: debe de hacer math con el snapshot', () => {
    const { container } = render( <CounterApp value={ initialValue }/>);
    expect( container ).toMatchSnapshot();
  });

  test('test: debe de mostar el valor inicial de 100 <CounterApp value={100} />', () => {
    render( <CounterApp value={ 100 }/>);
    expect( screen.getByText(100)).toBeTruthy();

    // expect( screen.getByRole('heading',{ level:2}).innerHTML).toContain('100');
  });

  test('debe de incrementar con el boton +1', () => {

    render( <CounterApp value={ initialValue }/>),
    fireEvent.click( screen.getByText('+1'));
    expect( screen.getByText('11')).toBeTruthy();

  });


  test('debe de decrementar con el boton -1', () => {

    render( <CounterApp value={ initialValue }/>),
    fireEvent.click( screen.getByText('-1'));
    expect( screen.getByText('9')).toBeTruthy();

  });

  test('Debe de funcionar el boton de reset', () => {
    render( <CounterApp value={ 355 }/>),
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));
    // fireEvent.click( screen.getByText('+1'));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'})),

    expect( screen.getByText( 355 )).toBeTruthy();
  });

});
