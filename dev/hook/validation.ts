/* eslint-disable no-unused-vars */
import {
  useValidateCheckInput,
  useValidationCheck,
  type UseValidateCheckInputType,
  type UseValidationCheckType,
  type ValidatorType,
} from '../../src';
import type { Validators } from '../constants/validation';

export const useValidator: <
  T extends ValidatorType = typeof Validators,
>() => UseValidationCheckType<T> = useValidationCheck;

export const useAppValidateCheckInput: <
  T,
  V extends ValidatorType = typeof Validators,
>(
  initialValue: T,
  validateKeys: (keyof V)[],
) => UseValidateCheckInputType<T, V> = useValidateCheckInput;
