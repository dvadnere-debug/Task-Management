import { createContext } from "react";

const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  return <CounterContext.Provider>{props.child}</CounterContext.Provider>;
};
