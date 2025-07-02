/* eslint-disable no-unused-vars */
import { useCallback, useMemo, useState } from 'react';

export function useInput<T>(initialValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  const handleValueChange = useCallback(
    (value: T) => {
      setValue(value);
    },
    [setValue],
  );

  return useMemo(() => [value, handleValueChange], [value, handleValueChange]);
}
