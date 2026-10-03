import { useEffect, useState } from 'react';
import { useLang } from '../i18n';
import { prefersReducedMotion } from '../hooks';

const SEEN_KEY = 'boot-seen';

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

export function BootScreen() {
  const { t } = useLang();
  const [visible, setVisible] = useState(() => !alreadySeen() && !prefersReducedMotion());
  const [lines, setLines] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return;
    let leaveTimer = 0;
    let finishTimer = 0;
    const finish = () => {
      if (leaveTimer) return;
      setLeaving(true);
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch {}
      leaveTimer = window.setTimeout(() => setVisible(false), 450);
    };
    const total = t.boot.length;
    const iv = window.setInterval(() => {
      setLines((n) => {
        if (n + 1 >= total) {
          window.clearInterval(iv);
          finishTimer = window.setTimeout(finish, 650);
        }
        return n + 1;
      });
    }, 260);
    window.addEventListener('keydown', finish);
    window.addEventListener('pointerdown', finish);
    return () => {
      window.clearInterval(iv);
      window.clearTimeout(finishTimer);
      window.clearTimeout(leaveTimer);
      window.removeEventListener('keydown', finish);
      window.removeEventListener('pointerdown', finish);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`boot ${leaving ? 'boot--leave' : ''}`} role="status" aria-live="polite">
      <pre className="boot__log">
        {t.boot.slice(0, lines).map((l, i) => (
          <span key={i} className={i === t.boot.length - 1 ? 'boot__ok' : undefined}>
            {l}
            {'\n'}
          </span>
        ))}
        <span className="cursor" />
      </pre>
      <p className="boot__skip">{t.skip}</p>
    </div>
  );
}
