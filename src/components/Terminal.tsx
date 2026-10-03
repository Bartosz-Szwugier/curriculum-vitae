import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { useLang } from '../i18n';
import { PROFILE } from '../data/content';
import { Section } from './Section';

interface Line {
  kind: 'in' | 'out';
  text: string;
}

const BASE_COMMANDS = ['about', 'experience', 'skills', 'education', 'contact', 'cv', 'help', 'clear', 'lang', 'sudo hire-me'];

export function Terminal() {
  const { t, lang, setLang } = useLang();
  const term = t.terminal;
  const [lines, setLines] = useState<Line[]>(() => [{ kind: 'out', text: term.welcome }]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setLines((l) => [...l, { kind: 'out', text: term.welcome }]);
  }, [lang]);

  const commands = useMemo<Record<string, () => string[]>>(
    () => ({
      help: () => term.help,
      ...Object.fromEntries(Object.entries(term.commands).map(([k, v]) => [k, () => v])),
      cv: () => {
        window.open(PROFILE.cv[lang], '_blank', 'noopener');
        return [term.cvOpened];
      },
      'sudo hire-me': () => term.hire,
    }),
    [term, lang],
  );

  const run = (raw: string) => {
    const cmd = raw.trim();
    const entry: Line = { kind: 'in', text: cmd };
    if (!cmd) {
      setLines((l) => [...l, entry]);
      return;
    }
    setHistory((h) => [...h, cmd]);
    const lower = cmd.toLowerCase();

    if (lower === 'clear') {
      setLines([]);
      return;
    }
    if (lower.startsWith('lang')) {
      const arg = lower.split(/\s+/)[1];
      if (arg === 'en' || arg === 'pl') {
        setLines((l) => [...l, entry, { kind: 'out', text: term.langSet + arg.toUpperCase() }]);
        setLang(arg);
      } else {
        setLines((l) => [...l, entry, { kind: 'out', text: 'usage: lang <en|pl>' }]);
      }
      return;
    }
    const handler = commands[lower];
    const out = handler ? handler() : [term.unknown + cmd];
    setLines((l) => [...l, entry, ...out.map((text): Line => ({ kind: 'out', text }))]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(value);
      setValue('');
      setCursor(null);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const next = cursor === null ? history.length - 1 : Math.max(0, cursor - 1);
      setCursor(next);
      setValue(history[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cursor === null) return;
      const next = cursor + 1;
      if (next >= history.length) {
        setCursor(null);
        setValue('');
      } else {
        setCursor(next);
        setValue(history[next]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = BASE_COMMANDS.filter((c) => c.startsWith(value.toLowerCase()));
      if (value && match.length === 1) setValue(match[0]);
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <Section id="terminal" index="04" title={term.title}>
      <p className="lead">{term.hint}</p>
      <div className="term card card--cut" onClick={() => inputRef.current?.focus({ preventScroll: true })}>
        <div className="card__bar">
          <span /> <span /> <span />
          <em>bs-shell — 80×24</em>
        </div>
        <div className="term__body" ref={bodyRef} role="log" aria-live="polite">
          {lines.map((l, i) =>
            l.kind === 'in' ? (
              <div key={i} className="term__line">
                <span className="term__prompt">{term.prompt}:~$</span> {l.text}
              </div>
            ) : (
              <div key={i} className="term__out">
                {l.text}
              </div>
            ),
          )}
          <label className="term__line term__input">
            <span className="term__prompt">{term.prompt}:~$</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              aria-label="Terminal input"
            />
          </label>
        </div>
        <div className="term__quick" aria-label="Quick commands">
          {['help', 'about', 'skills', 'contact', 'sudo hire-me'].map((c) => (
            <button key={c} type="button" onClick={(e) => { e.stopPropagation(); run(c); }}>
              {c}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
