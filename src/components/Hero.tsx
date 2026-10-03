import { useLang } from '../i18n';
import { useTypewriter } from '../hooks';
import { PROFILE } from '../data/content';

export function Hero() {
  const { t, lang } = useLang();
  const role = useTypewriter(t.hero.roles);

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__main">
          <p className="hero__greeting">{t.hero.greeting}</p>
          <h1 className="glitch" data-text="BARTOSZ SZWUGIER">
            BARTOSZ <span className="accent">SZWUGIER</span>
          </h1>
          <p className="hero__role" aria-label={t.hero.roles.join(', ')}>
            <span aria-hidden="true">
              {role}
              <span className="cursor" />
            </span>
          </p>
          <p className="hero__summary">{t.hero.summary}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href={PROFILE.cv[lang]} download>
              {t.hero.ctaCv}
              <span aria-hidden="true">↓</span>
            </a>
            <a className="btn" href="#contact">
              {t.hero.ctaContact}
            </a>
            <a className="btn btn--ghost" href="#terminal">
              {t.hero.ctaTerminal}
              <span aria-hidden="true">_</span>
            </a>
          </div>
        </div>

        <ul className="stats" aria-label="Highlights">
          {t.hero.stats.map((s) => (
            <li key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll">
        <span />
      </a>
    </section>
  );
}
