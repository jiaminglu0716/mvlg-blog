import { MutableRefObject, useEffect, useRef, useState } from "react";
import useScrollLoading from "./useScrollLoading";

export default function useScrollPagination(
  data: any[]
): [any[], MutableRefObject<any>] {
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
  useScrollLoading(load, page, items);

  return [items, ref];
}
