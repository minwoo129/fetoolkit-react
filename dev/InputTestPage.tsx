/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useValidateCheckInput } from '../src';
import type { Validators } from './constants/validation';

const InputTestPage = () => {
  // const {
  //   input: [password, handlePasswordChange],
  //   validation: [passwordValidation],
  // } = useAppValidateCheckInput('', ['password_length']);
  const {
    input: [password, handlePasswordChange],
    validation: [passwordValidationStatus, setPasswordValidationStatus],
  } = useValidateCheckInput<typeof Validators>('', ['password_length']);

  // check('email', 'test@test.com');

  return (
    <div>
      <h1>TestPage</h1>
      {/* <input
        type="password"
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      <p>{passwordValidation.errorMessage}</p> */}
    </div>
  );
};

export default InputTestPage;
