import { PropsWithChildren } from 'react';

export type LogContextReturn = {
  secretKey: string;
};

export type LogProviderProps = PropsWithChildren<LogContextReturn>;
