/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  useAppValidateCheckInput,
  useAppValidationCheck,
} from './hook/validation';

const InputTestPage = () => {
  // const {
  //   input: [password, handlePasswordChange],
  //   validation: [passwordValidation],
  // } = useAppValidateCheckInput('', ['password_length']);
  // const {
  //   input: [password, handlePasswordChange],
  //   validation: [passwordValidationStatus, setPasswordValidationStatus],
  // } = useValidateCheckInput<typeof Validators>('', ['password_length']);
  const { check } = useAppValidationCheck();

  check('email', 'test@test.com');
  const {
    input: [email, handleEmailChange],
    validation: [emailValidation, setEmailValidation],
  } = useAppValidateCheckInput('', ['email']);

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
