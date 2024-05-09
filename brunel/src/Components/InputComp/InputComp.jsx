import React, { useState } from 'react';
import './InputComp.css';
// import errorIcon from '../../assets/ErrorIcon.png'
export default function InputComp(props) {
  const { type } = props;
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (type === 'email') {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; //regex for email
      if (!emailRegex.test(value)) {
        setError(' ! Please enter a valid email address');
      } else {
        setError('');
      }
    }
  };

  return (
    <>
      <input
        type={type}
        placeholder={`Enter your ${type}`}
        className='inputComp'
        value={inputValue}
        onChange={handleInputChange}
      />
      {type === 'email' && error && <div className="error">{error}</div>}
    </>
  );
}
