import { PropsWithChildren } from 'react';

export interface BaseLoggerParams {
  title: string;
}
export interface ClickLoggerParams extends BaseLoggerParams {
  button: string;
}
export interface Logger<TParams> {
  logId: string;
  params: TParams;
}

type MountLogger = (logger: Logger<BaseLoggerParams>) => void;
type ClickLogger = (logger: Logger<ClickLoggerParams>) => void;

export type UseLoggerReturn = {
  mount: MountLogger;
  click: ClickLogger;
};

export type LogContextReturn = {
  secretKey: string;
};

export type LogProviderProps = PropsWithChildren<LogContextReturn>;
