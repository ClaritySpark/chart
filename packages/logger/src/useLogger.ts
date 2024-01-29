import { Logger } from "@clarity/utils";
import type { UseLoggerReturn } from "./types";

export function useLogger(): UseLoggerReturn {
  return {
    /**
     * TODO
     * Change to encapsulated logic
     * { logId, params } save database
     */
    mount: ({ logId, params }) => {
      Logger.log("mount log", logId, params);
    },
    click: ({ logId, params }) => {
      Logger.log("click log", logId, params);
    },
  };
}

export default useLogger;
