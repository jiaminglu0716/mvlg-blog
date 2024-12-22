import { useEffect, useState } from "react";

export default function useScrollLoading(load: () => void, ...listenStates) {
  const [loading, setLoading] = useState(false);

  async function loadMore() {
    if (loading) return;

    setLoading(true);
    load();
    setLoading(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      loadMore();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, ...listenStates]);
}
