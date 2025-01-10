import { useState } from "react";

export default function usePageState(defaultPage?: number) {
  const [page, setPage] = useState(defaultPage ?? 1);
  return {
    page,
    setPage,
    prevPage() {
      setPage(page > 1 ? page - 1 : page);
    },
    nextPage() {
      setPage(page + 1);
    },
  };
}
