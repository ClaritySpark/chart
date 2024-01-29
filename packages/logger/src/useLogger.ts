import { ConsoleLogger } from "@clarity/utils";
import type { UseLoggerReturn } from "./types";
import type { LogLevel } from "@clarity/types";

const DEFAULT_LOG_LEVELS: LogLevel[] = [
  "verbose",
  "debug",
  "log",
  "warn",
  "error",
  "fatal",
];

export function useLogger(): UseLoggerReturn {
  // TODO: Change to encapsulated logic
  const logger = new ConsoleLogger(DEFAULT_LOG_LEVELS);

  return {
    // TODO: { logId, params } save database
    mount: ({ logId, params }) => {
      logger.log("mount log", logId, params);
    },
    click: ({ logId, params }) => {
      logger.log("click log", logId, params);
    },
  };
}

export default useLogger;
