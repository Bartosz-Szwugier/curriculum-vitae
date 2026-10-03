import type { ReactNode } from 'react';
import { useReveal } from '../hooks';

interface Props {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, index, title, children }: Props) {
  const [ref, shown] = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} className={`section reveal ${shown ? 'reveal--in' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`} className="section__title">
          <span className="section__index">{index}</span>
          <span>{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
}
