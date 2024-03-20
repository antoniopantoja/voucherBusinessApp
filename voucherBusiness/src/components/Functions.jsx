import React, { useState } from 'react';

const Functions = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleLogin = () => {

    if (!isValidEmail) {
      return;
    }
  };

  const validateEmail = (text) => {
    const isValid = /\S+@\S+\.\S+/.test(text);
    setIsValidEmail(isValid);
    setEmail(text);
  };

  return { handleLogin, validateEmail, email, isValidEmail };
};

export default Functions;
