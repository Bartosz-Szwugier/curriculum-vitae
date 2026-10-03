import { useEffect, useState } from 'react';
import { useLang } from '../i18n';
import { useActiveSection } from '../hooks';

const IDS = ['about', 'experience', 'skills', 'terminal', 'contact'] as const;
const SPY = ['top', ...IDS];

export function Header() {
  const { t, lang, setLang } = useLang();
  const active = useActiveSection(SPY);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo" aria-label="Bartosz Szwugier — top">
          <span className="logo__mark">BS</span>
          <span className="logo__text">
            szwugier<span className="accent">.dev</span>
          </span>
        </a>

        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
          <span />
        </button>

        <nav id="nav" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          {IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : undefined}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {t.nav[id]}
            </a>
          ))}
          <div className="lang" role="group" aria-label="Language">
            {(['en', 'pl'] as const).map((l) => (
              <button key={l} className={lang === l ? 'is-active' : undefined} aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
