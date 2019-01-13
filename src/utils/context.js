import React from "react";

const AppContext = React.createContext({});

export const ContextProvider = AppContext.Provider;
export const ContextConsumer = AppContext.Consumer;

export function WithCtx(WrappedProp) {
  return props => (
    <ContextConsumer>
      {ctx => <WrappedProp {...props} {...{ ctx }} />}
    </ContextConsumer>
  );
}
