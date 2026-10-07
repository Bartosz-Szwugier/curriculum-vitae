import { useMemo, useRef } from 'react';
import { prefersReducedMotion } from '../hooks';

const PARTS = [
  { text: 'szwugier', accent: false },
  { text: '.dev', accent: true },
];

function shuffled(length: number) {
  const order = Array.from({ length }, (_, i) => i);
  do {
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  } while (order.every((v, i) => v === i));
  return order;
}

export function ScrambleLogo() {
  const letters = useMemo(() => PARTS.flatMap((p) => [...p.text].map((char) => ({ char, accent: p.accent }))), []);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  const scramble = () => {
    if (prefersReducedMotion()) return;
    const els = refs.current.filter((e): e is HTMLSpanElement => !!e);
    const lefts = els.map((e) => e.offsetLeft);
    const widths = els.map((e) => e.offsetWidth);
    let x = lefts[0];
    shuffled(els.length).forEach((i) => {
      els[i].style.setProperty('--dx', `${x - lefts[i]}px`);
      els[i].style.setProperty('--dy', `${Math.round((Math.random() - 0.5) * 10)}px`);
      x += widths[i];
    });
  };

  const lastMove = useRef(0);
  const onMove = () => {
    const now = performance.now();
    if (now - lastMove.current < 160) return;
    lastMove.current = now;
    scramble();
  };

  const restore = () => {
    refs.current.forEach((e) => {
      e?.style.setProperty('--dx', '0px');
      e?.style.setProperty('--dy', '0px');
    });
  };

  return (
    <span className="scramble" aria-hidden="true" onPointerEnter={scramble} onPointerMove={onMove} onPointerLeave={restore} onFocus={scramble} onBlur={restore}>
      {letters.map((l, i) => (
        <span
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={l.accent ? 'accent' : undefined}
          style={{ '--i': i } as React.CSSProperties}
        >
          {l.char}
        </span>
      ))}
    </span>
  );
}
