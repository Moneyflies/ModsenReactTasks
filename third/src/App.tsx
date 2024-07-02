import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './components/InputNumber/index';
import Message from './components/Message/index';

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="App">
      <InputNumber
        onChange={(newValue) => setInputValue(newValue as string)}
      />
      <Message value={inputValue} />
    </div>
  );
}

export default App;
