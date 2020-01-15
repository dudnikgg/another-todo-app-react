import React from 'react';
import logo from '../logo.svg';
import './App.scss';

// Components
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
