const WithContexts = (Component: any) => {
  const WithContextsContainer = () => {
    const { service } = getRouteProps();

    return (
      <ServiceContextProvider service={service}>
        <Component />
      </ServiceContextProvider>
    );
  };

  return WithContextsContainer;
};

export default WithContexts;
