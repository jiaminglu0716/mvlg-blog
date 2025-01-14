import { useContext } from "react";
import { ServiceConfig } from "../interfaces/service";
import { ServiceContext } from "../contexts/serviceContext";

export default function useLocaleService(): ServiceConfig {
  return useContext(ServiceContext);
}
