import React, { useState } from 'react';

interface InputNumberProps {
  onChange: (value: number | string) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({ onChange }) => {
  const [value, setValue] = useState(''); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue); 
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default InputNumber;