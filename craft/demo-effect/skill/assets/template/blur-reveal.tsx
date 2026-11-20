'use client';

// Demo blur reveal. Replace it with your own effect.
// FIXED: words start blurred and transparent, sharpen one after another once visible,
// and show the final state under reduced motion.
// VARIABLE: text, stagger (ms between words), blur (px), duration (ms).

import {useEffect, useRef, useState, type CSSProperties} from 'react';

export type BlurRevealProps = {
  text: string;
  stagger?: number;
  blur?: number;
  duration?: number;
};

const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';

export default function BlurReveal({text, stagger = 60, blur = 8, duration = 500}: BlurRevealProps) {
  const root = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(false);
  const [reduced, setReduced] = useState(false);
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el || reduced) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShown(true);
      observer.disconnect();
    }, {threshold: 0.2});
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <p ref={root} style={{margin: 0}}>
      {words.map((word, i) => {
        const style: CSSProperties = reduced ? {} : {
          display: 'inline-block',
          filter: shown ? 'blur(0px)' : `blur(${blur}px)`,
          opacity: shown ? 1 : 0,
          transition: `filter ${duration}ms ${EASE_OUT} ${i * stagger}ms, opacity ${duration}ms ${EASE_OUT} ${i * stagger}ms`,
        };
        return (
          <span key={i} style={style}>
            {word}
            {i < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
}
