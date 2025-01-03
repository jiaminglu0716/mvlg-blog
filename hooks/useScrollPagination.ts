import { MutableRefObject, useEffect, useRef, useState } from "react";
import useScrollLoading, { ScrollLoadingConfig } from "./useScrollLoading";

export default function useScrollPagination<T>(
  data: T[],
  config: ScrollLoadingConfig = { biase: 20, wait: 100 }
): [T[], MutableRefObject<T>] {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const ref = useRef(null);

  /**
   * @LoadFunc
   */
  function check() {
    return page < data.length;
  }

  function load() {
    if (check()) {
      const newItems = data[page];
      setPage(page + 1);
      setItems([...items, newItems]);
    }
  }

  /**
   * @Preload
   * @Func Auto flash by page updated
   * @limit Use scroll offset height as a threshold to intercept loop
   * @inc When we use load(), the page will be increased.
   */
  useEffect(() => {
    if (ref.current) {
      let height = ref.current.offsetHeight;
      if (height < document.documentElement.clientHeight && check()) load();
    }
  }, [page]);

  /**
   * @ScrollLoad
   */
  useScrollLoading(load, [page, items], config);

  return [items, ref];
}
