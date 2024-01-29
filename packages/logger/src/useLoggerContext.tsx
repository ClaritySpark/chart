import React from "react";
import { isValidSecretKey } from "@clarity/utils";
import { LogProviderProps, LogContextReturn } from "./types";

const LogContext = React.createContext<LogContextReturn | null>(
  {} as LogContextReturn | null
);

export function useLoggerContext(): LogContextReturn {
  return React.useContext(LogContext) as LogContextReturn;
}

export function LogProvider(props: LogProviderProps): JSX.Element {
  const { children, secretKey } = props;

  if (!isValidSecretKey(secretKey)) {
    console.error("Invalid secret key. LogProvider cannot be initialized.");

    return <>{children}</>;
  }

  return (
    <LogContext.Provider value={{ secretKey }}>{children}</LogContext.Provider>
  );
}
