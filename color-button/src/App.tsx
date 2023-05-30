import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState<string>('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div style={ {
      display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'start', padding: '20px',
    } }>
      <button
        onClick={ () => setButtonColor(newButtonColor) }
        style={ { backgroundColor: buttonColor, color: 'white', width: 200, height: 40, } } >
          Change to { newButtonColor }
      </button>
      <input type='checkbox' />
    </div>

  );
}

export default App;
