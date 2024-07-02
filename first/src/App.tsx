import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const inputRef = useRef(null); 
  const [value, setValue] = useState(''); 
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault(); 
    const inputValue = inputRef.current; 
    console.log(`Введено: ${inputValue}`); 
    setValue(''); 
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Введите значение:</label>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default App;
