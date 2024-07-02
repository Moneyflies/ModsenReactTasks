import React, { useState, useEffect } from 'react';

interface MessageProps {
  value: number | string;
}

const Message: React.FC<MessageProps> = ({ value }) => {
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    if (value > 0) {
      setMessage('Число больше нуля');
    } else if (value < 0) {
      setMessage('Число меньше нуля');
    } else {
      setMessage('Число равно нулю');
    }
  }, [value]);

  return <p>{message}</p>;
};

export default Message;