export interface LoggerParams {
  title: string;
  button: string;
}
export interface Logger {
  logId: string;
  params: LoggerParams;
}

export type UseLoggerReturn = {
  click: ({ logId, params }: Logger) => void;
};

export type LogProviderProps = {
  children: React.ReactNode | React.ReactNode[];
} & UseLoggerReturn;
