import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, shown] as const;
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);

  return active;
}

export function useTypewriter(words: string[], speed = 70, pause = 1600) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '');
  const key = words.join('|');

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0]);
      return;
    }
    let w = 0;
    let i = 0;
    let deleting = false;
    let timer: number;
    const tick = () => {
      const word = words[w];
      if (!deleting) {
        i++;
        setText(word.slice(0, i));
        if (i === word.length) {
          deleting = true;
          timer = window.setTimeout(tick, pause);
          return;
        }
      } else {
        i--;
        setText(word.slice(0, i));
        if (i === 0) {
          deleting = false;
          w = (w + 1) % words.length;
        }
      }
      timer = window.setTimeout(tick, deleting ? speed / 2 : speed);
    };
    timer = window.setTimeout(tick, 300);
    return () => window.clearTimeout(timer);
  }, [key, speed, pause]);

  return text;
}
