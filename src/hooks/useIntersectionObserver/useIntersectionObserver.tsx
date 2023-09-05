import { RefObject, useEffect } from "react";

interface IUseIntersectionObserver {
  root?: RefObject<HTMLElement>;
  target: RefObject<HTMLElement>;
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "100px",
  enabled = true,
}: IUseIntersectionObserver) => {
  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;

    if (!el) return;

    observer.observe(el);
  }, [enabled, onIntersect, root, rootMargin, target, threshold]);
};

export default useIntersectionObserver;
