"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const selectors = ".tl-item, .achievement-card, .donation-tile, .yt-card, .trust-count-cell, .lineage-item, .gallery-item, .fb-panel, .donation-qr-card";
    document.querySelectorAll(selectors).forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(18px)";
      htmlEl.style.transition = "opacity 0.55s ease, transform 0.55s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
