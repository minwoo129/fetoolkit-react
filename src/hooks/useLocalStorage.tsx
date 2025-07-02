/* eslint-disable no-unused-vars */
import { useCallback, useMemo } from 'react';

type ReturnType = [
  <T>(key: string) => T | null,
  <T>(key: string, data: T) => void,
  (key: string) => void,
  () => void,
];

export function useLocalStorage(): ReturnType {
  const get = useCallback(<T,>(key: string) => {
    const response = localStorage.getItem(key);

    return response ? (JSON.parse(response) as T) : null;
  }, []);

  const set = useCallback(<T,>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
  }, []);

  const remove = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  const clear = useCallback(() => {
    localStorage.clear();
  }, []);

  return useMemo(() => [get, set, remove, clear], [get, set, remove, clear]);
}
