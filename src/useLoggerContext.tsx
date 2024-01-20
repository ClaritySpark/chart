import React from 'react';

import { LogProviderProps, UseLoggerReturn } from './types/logger';

const ClearlyLoggerContext = React.createContext<UseLoggerReturn | null>(null);

export function useLoggerContext(): UseLoggerReturn {
  return React.useContext(ClearlyLoggerContext) as UseLoggerReturn;
}

export function LogProvider(props: LogProviderProps): JSX.Element {
  const { children, ...data } = props;

  return (
    <ClearlyLoggerContext.Provider value={data as unknown as UseLoggerReturn}>
      {children}
    </ClearlyLoggerContext.Provider>
  );
}
