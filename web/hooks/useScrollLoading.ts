import { DependencyList, useEffect, useState } from "react";

export type ScrollLoadingConfig = {
  biase?: number;
  wait?: number;
};

export default function useScrollLoading(
  load: () => void,
  deps: DependencyList,
  config?: ScrollLoadingConfig
) {
  const [loading, setLoading] = useState(false);
  const biase = config?.biase ?? 0;
  const wait = config?.wait ?? 0;

  async function loadMore() {
    if (loading) return;

    setLoading(true);
    load();
    setLoading(false);
  }

  useEffect(() => {
    /**
     * @param biase
     * If we use mobile to scroll webpage, we will find out that
     * the scroll can not work in the part of cellphone browser.
     *
     * However, they all can get their height.
     *
     * I see, some cellphone have radius border screen that may be
     * decrease the reality height in browser. So as to level down the standard,
     * we decide to set this var to adjust the biase to trigger scroll loading event.
     */
    const handleScroll = () => {
      const real = window.innerHeight + document.documentElement.scrollTop;
      const offset = document.documentElement.offsetHeight;

      if (real < offset - biase) return;

      setTimeout(loadMore, wait);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, ...deps]);
}
