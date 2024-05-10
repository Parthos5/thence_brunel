import React, { useState } from 'react';
import './InputComp.css';
import exclaim from '../../assets/exclaim.png'

export default function InputComp(props) {
  const { type, value, onChange, placeholder } = props;
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (type === 'email') {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(value)) {
        setError(' Please enter a valid email address');
      } else {
        setError('');
        onChange(event); // Call onChange if email is valid
      }
    }
    onChange(event)
  };

  return (
    <>
      <div className={`inputWrapper ${error ? 'error' : ''}`}>
        <input
          type={type}
          placeholder={placeholder}
          className='inputComp'
          value={value}
          onChange={handleInputChange}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'error-message' : undefined}
        />
        {type === 'email' && error && (
          <div id="error-message" className="errorMessage"><img src={exclaim} alt="" />{error}</div>
        )}
      </div>
    </>
  );
}
