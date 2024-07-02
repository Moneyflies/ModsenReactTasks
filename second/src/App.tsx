import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component from './components/Component/index'

function App() {
  const myText = 'Hello world. Goodbye world. Good evening world.';
  return (
    <div className="App">
      <Component text={myText} />
    </div>
  );
}

export default App;
