import React from 'react';

import { LogProviderProps, UseLoggerReturn } from './types';
import { isValidSecretKey } from './utils';

const ClearlyLoggerContext = React.createContext<UseLoggerReturn | null>(
  {} as UseLoggerReturn | null,
);

export function useLoggerContext(): UseLoggerReturn {
  return React.useContext(ClearlyLoggerContext) as UseLoggerReturn;
}

export function LogProvider(props: LogProviderProps): JSX.Element {
  const { children, secretKey, ...data } = props;

  if (!isValidSecretKey(secretKey)) {
    console.error('Invalid secret key. LogProvider cannot be initialized.');

    return <>{children}</>;
  }

  return (
    <ClearlyLoggerContext.Provider value={data as UseLoggerReturn}>
      {children}
    </ClearlyLoggerContext.Provider>
  );
}
