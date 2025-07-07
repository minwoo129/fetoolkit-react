import React from 'react';
import type { ContextProviderType } from './types';
import { UserAgentContextsProvider } from './UserAgentContext';

const ContextProvider: ContextProviderType = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) => React.createElement(context, { children: prev }),
    children,
  );

export const FEToolkitProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  return (
    <ContextProvider contexts={[UserAgentContextsProvider]}>
      {children}
    </ContextProvider>
  );
};
