import { ServiceContextProvider } from "../../../contexts/serviceContext";

const WithContexts = (Component: any) => {
  const WithContextsContainer = () => {
    const service = "en";

    return (
      <ServiceContextProvider service={service}>
        <Component />
      </ServiceContextProvider>
    );
  };

  return WithContextsContainer;
};

export default WithContexts;
