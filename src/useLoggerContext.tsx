import React from 'react';

import { LogProviderProps, UseLoggerReturn } from './types/logger';

const ClearlyLoggerContext = React.createContext<UseLoggerReturn | null>(null);

export const useLoggerContext = (): UseLoggerReturn =>
  React.useContext(ClearlyLoggerContext) as UseLoggerReturn;

export const LogProvider = (props: LogProviderProps) => {
  const { children, ...data } = props;
  return (
    <ClearlyLoggerContext.Provider value={data as unknown as UseLoggerReturn}>
      {children}
    </ClearlyLoggerContext.Provider>
  );
};
