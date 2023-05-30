import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState<string>('red');
  const [checked, setChecked] = useState<boolean>(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div style={ {
      display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'start', padding: '20px',
    } }>
      <button
        disabled={checked}
        onClick={ () => setButtonColor(newButtonColor) }
        style={ { backgroundColor: buttonColor, color: 'white', width: 200, height: 40, } } >
          Change to { newButtonColor }
      </button>
      <input type='checkbox' checked={checked} onClick={() => setChecked(!checked)} />
    </div>

  );
}

export default App;
