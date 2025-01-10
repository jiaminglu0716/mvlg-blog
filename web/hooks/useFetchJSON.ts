import useSWR from "swr";

export default function useFetchJSON(url: string) {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json();
  };

  return useSWR(url, fetcher);
}
