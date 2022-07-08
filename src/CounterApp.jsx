import { useState } from 'react';
import PropTypes from 'prop-types'



export const CounterApp = ( { value } ) => {

    // console.log('render');
    //API...... FETCH.........

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1); //el setCounter cambia el valor de counter que es el valor de value
        // setCounter( (c) => c + 1);
    }

    const handleSubtract = () => {
        setCounter( counter - 1); 
    }

    const initialReset = () => {
        setCounter( value ); 
    }

    return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSubtract }>-1</button>
      <button onClick={  initialReset }>Reset</button>
    </>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

