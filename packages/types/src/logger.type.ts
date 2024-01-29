export type LogLevel = "log" | "error" | "warn" | "debug" | "verbose" | "fatal";

export interface LoggerService {
  log(message: any, ...optionalParams: any[]): any;
  error(message: any, ...optionalParams: any[]): any;
  warn(message: any, ...optionalParams: any[]): any;
  debug?(message: any, ...optionalParams: any[]): any;
  verbose?(message: any, ...optionalParams: any[]): any;
  fatal?(message: any, ...optionalParams: any[]): any;
}
