import { useEffect } from 'react';

/**
 * Custom scroll-reveal animation using IntersectionObserver + MutationObserver.
 * Replaces AOS without any library dependency.
 *
 * Supported data-reveal values:
 *   fade-up, fade-in, scale-in
 *
 * Add data-reveal-delay="N" for staggered reveals (ms).
 *
 * Uses MutationObserver to auto-detect new [data-reveal] elements
 * added to the DOM after initial mount (e.g. filter changes, lazy load).
 */
export function useScrollReveal() {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
            if (delay > 0) {
              el.style.transitionDelay = `${delay}ms`;
            }
            requestAnimationFrame(() => {
              el.classList.add('revealed');
            });
            intersectionObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' },
    );

    // Observe all current [data-reveal] elements
    const observeAll = () => {
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
        intersectionObserver.observe(el);
      });
    };
    observeAll();

    // MutationObserver: watch for new [data-reveal] elements added to DOM
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue;
          // Check if the node itself or its children have data-reveal
          if (node.hasAttribute?.('data-reveal') && !node.classList.contains('revealed')) {
            intersectionObserver.observe(node);
          }
          node.querySelectorAll?.('[data-reveal]:not(.revealed)').forEach((child) => {
            intersectionObserver.observe(child);
          });
        }
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
