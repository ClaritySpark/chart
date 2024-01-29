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

export type UseLoggerReturn = {
  mount: (logger: Logger<BaseLoggerParams>) => void;
  click: (logger: Logger<ClickLoggerParams>) => void;
};
