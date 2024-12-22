import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  /**
   * Env: Can window?
   */
  const hasWindow = typeof window !== "undefined";

  /**
   * Size: Width, Height
   */
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;

    return {
      width,
      height,
    };
  }

  /**
   * Size: State
   */
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  /**
   * Func: Resize & setState
   */
  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  /**
   * Tips: useEffect => useClient
   */
  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
