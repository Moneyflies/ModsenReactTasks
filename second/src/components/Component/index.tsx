import React, {useState}  from 'react';

interface TextProps {
    text: string;
  }

const Component: React.FC<TextProps> = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleClick = () => {
        setIsExpanded(!isExpanded); 
    };
  
    return (
      <div>
        <p>{text.split('.')[0]}.</p>
        <button onClick={handleClick}>{isExpanded ? 'Скрыть' : 'Показать подробнее'}</button>
        {isExpanded && <p>{text}</p>}
      </div>
    );
};

export default Component;
