import React, { createContext, useMemo } from 'react';

export type ValidatorType<K extends string = string> = Record<
  K,
  ValidatorActionType
>;

type ValidatorActionType = {
  // eslint-disable-next-line no-unused-vars
  validator: (value: string) => boolean;
  errorStatus: {
    errorCode: string;
    errorMessage: string;
  };
};

type ValidationContextsType<K extends string = string> = {
  appValidators: ValidatorType<K>;
};

const ValidationContexts = createContext<ValidationContextsType>({
  appValidators: {},
});

type ProviderArgs<K extends string = string> = {
  validators: ValidatorType<K>;
  children: React.JSX.Element;
};

export type ValidationStatusType = {
  isPassed: boolean;
  errorCode?: string;
  errorMessage?: string;
};

export const ValidationContextsProvider = <K extends string = string>({
  validators,
  children,
}: ProviderArgs<K>) => {
  const appValidators = useMemo(() => {
    return validators;
  }, [validators]);

  return (
    <ValidationContexts.Provider value={{ appValidators }}>
      {children}
    </ValidationContexts.Provider>
  );
};

export default ValidationContexts;
