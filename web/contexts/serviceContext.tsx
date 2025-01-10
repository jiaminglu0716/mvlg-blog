import React, { createContext, ReactElement } from "react";
import { Services } from "../../models/types/global";
import services from "../../lib/config/services/index";
import { ServiceConfig } from "../interfaces/service";

export const ServiceContext = createContext<ServiceConfig>({} as ServiceConfig);

export const ServiceContextProvider = ({
  children,
  service,
}: {
  children: ReactElement;
  service: Services;
}) => {
  const LoadableContextProvider = services[service];

  if (!LoadableContextProvider) {
    return null;
  }

  return (
    <LoadableContextProvider Context={ServiceContext}>
      {children}
    </LoadableContextProvider>
  );
};
