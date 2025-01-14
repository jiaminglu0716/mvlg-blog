import useSWR from "swr";

const isSSR = typeof window === "undefined";

const useStorage = (key: string, defaultValue?: any) => {
  if (isSSR) return;

  const { data } = useSWR(key, async (key) => {
    const value = localStorage.getItem(key) || defaultValue;
    return value;
  });
  const getToken = () => {
    return data;
  };
  const setToken = (newVal: string) =>
    useSWR([key, newVal], async ([key, newVal]) => {
      localStorage.setItem(key, newVal);
    });
  const removeToken = () =>
    useSWR(key, async (key) => {
      localStorage.removeItem(key);
    });
  return {
    getToken,
    setToken,
    removeToken,
  };
};

export default useStorage;
