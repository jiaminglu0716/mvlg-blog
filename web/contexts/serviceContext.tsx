import React, { createContext, ReactElement } from "react";
import services from "../locales";
import { ServiceConfig, Services } from "../interfaces/service";
import { useLocale } from "../hooks/useLocale";

export const ServiceContext = createContext<ServiceConfig>({} as ServiceConfig);

export const ServiceContextProvider = ({
  children,
  service,
}: {
  service?: Services;
  children: ReactElement;
}) => {
  const { locale } = useLocale();
  const LoadableContextProvider = services[service ?? locale];

  if (!LoadableContextProvider) {
    return null;
  }

  return (
    <LoadableContextProvider Context={ServiceContext}>
      {children}
    </LoadableContextProvider>
  );
};
