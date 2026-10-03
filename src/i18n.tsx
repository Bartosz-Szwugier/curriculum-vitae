import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { content, type Content, type Lang } from './data/content';

interface LangCtx {
  lang: Lang;
  t: Content;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LangCtx | null>(null);

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'pl') return stored;
  } catch {}
  return 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('lang', l);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, t: content[lang], setLang }), [lang, setLang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useLang must be used within LangProvider');
  return v;
}
