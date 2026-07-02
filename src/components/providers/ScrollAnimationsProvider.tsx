"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollAnimationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    refresh();

    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return children;
}
