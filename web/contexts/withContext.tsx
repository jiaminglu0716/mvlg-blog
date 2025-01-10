import React from "react";

// use data first and give them where the data go.
function withContext<T>(data: T) {
  const LoadedContextProvider = ({
    Context,
    children,
  }: {
    Context: React.Context<T>;
    children: React.ReactNode;
  }) => <Context.Provider value={data}>{children}</Context.Provider>;

  return LoadedContextProvider;
}

export default withContext;
