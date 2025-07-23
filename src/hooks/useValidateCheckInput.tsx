import { useCallback, useContext, useMemo, useState } from 'react';
import type {
  ValidationStatusType,
  ValidatorActionType,
  ValidatorType,
} from '../contexts/ValidationContext';
import ValidationContexts from '../contexts/ValidationContext';

export type UseValidateCheckInputType<
  T,
  V extends ValidatorType<string>,
> = ReturnType<typeof useValidateCheckInput<T, V>>;

export const useValidateCheckInput = <T, V extends ValidatorType<string>>(
  initialValue: T,
  validateKeys: (keyof V)[],
): {
  // eslint-disable-next-line no-unused-vars
  input: [T, (value: T) => void];
  validation: [
    ValidationStatusType,
    React.Dispatch<React.SetStateAction<ValidationStatusType>>,
  ];
} => {
  const { appValidators } = useContext(ValidationContexts);
  const [value, setValue] = useState<T>(initialValue);
  const [validationStatus, setValidationStatus] =
    useState<ValidationStatusType>({ isPassed: false });

  const handleChange = useCallback(
    (value: T) => {
      setValue(value);

      for (const key of validateKeys) {
        const { validator, errorStatus } = appValidators[
          key as string
        ] as ValidatorActionType<T>;
        const isPassed = validator(value);
        if (isPassed) {
          continue;
        }

        setValidationStatus({
          isPassed,
          errorCode: errorStatus.errorCode,
          errorMessage: errorStatus.errorMessage,
        });

        return;
      }

      setValidationStatus({
        isPassed: true,
      });
    },
    [appValidators, validateKeys],
  );

  return useMemo(
    () => ({
      input: [value, handleChange],
      validation: [validationStatus, setValidationStatus],
    }),
    [value, handleChange, validationStatus, setValidationStatus],
  );
};
