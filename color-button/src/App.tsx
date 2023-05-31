import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1'); //explain:  

}

function App() {

  const [buttonColor, setButtonColor] = useState<string>('MediumVioletRed');
  const [checked, setChecked] = useState<boolean>(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div style={ {
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', padding: '20px',
    } }>
      <button
        disabled={ checked }
        onClick={ () => setButtonColor(newButtonColor) }
        style={ { backgroundColor: checked ? 'gray' : buttonColor, color: 'white', width: 200, height: 40, } } >
        Change to { replaceCamelWithSpaces(newButtonColor) }
      </button>
      <div style={ { marginTop: 5 } }>
        <input id='disable-button-checkbox' type='checkbox' checked={ checked } onClick={ () => setChecked(!checked) } />
        <label htmlFor="disable-button-checkbox">Disable Button</label>
      </div>

    </div>

  );
}

export default App;
