import { useLang } from '../i18n';
import { Section } from './Section';

export function Skills() {
  const { t } = useLang();
  const { groups } = t.skills;
  const edu = t.education;
  return (
    <Section id="skills" index="03" title={t.skills.title}>
      <div className="grid grid--3">
        {groups.map((g) => (
          <article key={g.title} className="card card--cut skill">
            <h3 className="skill__title">
              <span className="skill__icon" aria-hidden="true">
                {g.icon}
              </span>
              {g.title}
            </h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s.name}>
                  {s.name}
                  {s.level && <small className="chips__level">{s.level}</small>}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="h3 h3--spaced">{edu.title}</h3>
      <div className="grid grid--3">
        <article className="card card--cut">
          <h4 className="h4">{edu.label}</h4>
          <ul className="edu">
            {edu.items.map((e) => (
              <li key={e.name}>
                <strong>{e.name}</strong>
                <span>{e.place}</span>
                <small>
                  {e.period} · {e.note}
                </small>
              </li>
            ))}
          </ul>
        </article>
        <article className="card card--cut">
          <h4 className="h4">{edu.certsTitle}</h4>
          <ul className="edu">
            {edu.certs.map((c) => (
              <li key={c.code}>
                <strong>{c.code}</strong>
                <span>{c.name}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card card--cut">
          <h4 className="h4">{edu.langTitle}</h4>
          <ul className="edu">
            {edu.langs.map((l) => (
              <li key={l.name}>
                <strong>{l.name}</strong>
                <span className="badge">{l.level}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
