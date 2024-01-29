import { ConsoleLogger } from "./consoleLogger";
import type { LogLevel, LoggerService } from "./types/logger.type";

const DEFAULT_LOG_LEVELS: LogLevel[] = [
  "verbose",
  "debug",
  "log",
  "warn",
  "error",
  "fatal",
];

const DEFAULT_LOGGER = new ConsoleLogger(DEFAULT_LOG_LEVELS);

export class Logger {
  protected static instanceRef?: LoggerService = DEFAULT_LOGGER;

  public static overrideLogger = (logger?: LoggerService): void => {
    this.instanceRef = logger;
  };

  public static error(message: any, stack?: string): void;
  public static error(
    message: any,
    ...optionalParams: [string, ...any[]]
  ): void;
  public static error(message: any, ...optionalParams: any[]) {
    this.instanceRef?.error(message, ...optionalParams);
  }

  public static log(message: any, ...optionalParams: any[]) {
    this.instanceRef?.log(message, ...optionalParams);
  }

  public static warn(message: any, ...optionalParams: any[]) {
    this.instanceRef?.warn(message, ...optionalParams);
  }

  public static debug(message: any, ...optionalParams: any[]) {
    this.instanceRef?.debug?.(message, ...optionalParams);
  }

  public static verbose(message: any, ...optionalParams: any[]) {
    this.instanceRef?.verbose?.(message, ...optionalParams);
  }

  public static fatal(message: any, stack?: string): void;
  public static fatal(
    message: any,
    ...optionalParams: [string, ...any[]]
  ): void;
  public static fatal(message: any, ...optionalParams: any[]) {
    this.instanceRef?.fatal?.(message, ...optionalParams);
  }
}
