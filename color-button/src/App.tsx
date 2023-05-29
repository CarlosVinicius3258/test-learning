import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', 
}}>
      <button style={ { backgroundColor: 'red', color: 'white', width: 200, height: 40, } } >Change to blue</button>
    </div>

  );
}

export default App;
