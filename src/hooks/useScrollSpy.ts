"use client";
import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          setActiveId(topmost.target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0.6,
      }
    );

    const elements: HTMLElement[] = sectionIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el instanceof HTMLElement); 

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
