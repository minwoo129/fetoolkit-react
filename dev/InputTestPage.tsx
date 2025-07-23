import React from 'react';
import { useAppValidateCheckInput } from './hook/validation';

const InputTestPage = () => {
  const {
    input: [password, handlePasswordChange],
    validation: [passwordValidation],
  } = useAppValidateCheckInput('', ['password_length']);

  return (
    <div>
      <h1>TestPage</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      <p>{passwordValidation.errorMessage}</p>
    </div>
  );
};

export default InputTestPage;
