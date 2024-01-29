import { UseLoggerReturn } from "./types";

export function useLogger(): UseLoggerReturn {
  return {
    // TODO: { logId, params } save database
    mount: ({ logId, params }) => {
      console.log("logId", logId);
      console.log("params", params);
    },
    click: ({ logId, params }) => {
      console.log("logId", logId);
      console.log("params", params);
    },
  };
}

export default useLogger;
