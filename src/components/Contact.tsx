import { useLang } from '../i18n';
import { PROFILE } from '../data/content';
import { Section } from './Section';

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const rows = [
    { label: c.email, text: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: c.linkedin, text: 'linkedin.com/in/bartoszszwugier', href: PROFILE.linkedin },
    { label: c.github, text: 'github.com/Bartosz-Szwugier', href: PROFILE.github },
    { label: c.location, text: 'Kraków, Poland', href: undefined },
  ];
  return (
    <Section id="contact" index="05" title={c.title}>
      <div className="contact card card--cut">
        <div>
          <p className="contact__lead">{c.lead}</p>
          <p className="muted">{c.note}</p>
          <a className="btn btn--primary" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <ul className="contact__list">
          {rows.map((r) => (
            <li key={r.label}>
              <span className="contact__label">{r.label}</span>
              {r.href ? (
                <a href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {r.text}
                </a>
              ) : (
                <span>{r.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
