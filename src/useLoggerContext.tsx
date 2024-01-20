import React from 'react';

import { LogProviderProps, LogContextReturn } from './types';
import { isValidSecretKey } from './utils';

const ClearlyLoggerContext = React.createContext<LogContextReturn | null>(
  {} as LogContextReturn | null,
);

export function useLoggerContext(): LogContextReturn {
  return React.useContext(ClearlyLoggerContext) as LogContextReturn;
}

export function LogProvider(props: LogProviderProps): JSX.Element {
  const { children, secretKey } = props;

  if (!isValidSecretKey(secretKey)) {
    console.error('Invalid secret key. LogProvider cannot be initialized.');

    return <>{children}</>;
  }

  return (
    <ClearlyLoggerContext.Provider value={{ secretKey }}>
      {children}
    </ClearlyLoggerContext.Provider>
  );
}
