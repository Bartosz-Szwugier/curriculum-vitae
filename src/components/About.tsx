import { useLang } from '../i18n';
import { Section } from './Section';

export function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <Section id="about" index="01" title={a.title}>
      <div className="about">
        <div className="about__text">
          {a.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <h3 className="h3">{a.strengthsTitle}</h3>
          <ul className="checklist">
            {a.strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <aside className="card card--cut about__card" aria-label="Profile summary">
          <div className="card__bar">
            <span /> <span /> <span />
            <em>profile.json</em>
          </div>
          <pre className="json">
            {'{\n'}
            {a.facts.map((f) => (
              <span key={f.k}>
                {'  '}
                <span className="json__k">"{f.k}"</span>: <span className="json__v">"{f.v}"</span>,{'\n'}
              </span>
            ))}
            {'  '}
            <span className="json__k">"{a.interestsTitle.toLowerCase()}"</span>: [{'\n'}
            {a.interests.map((i, idx) => (
              <span key={i}>
                {'    '}
                <span className="json__v">"{i}"</span>
                {idx < a.interests.length - 1 ? ',' : ''}
                {'\n'}
              </span>
            ))}
            {'  ]\n}'}
          </pre>
        </aside>
      </div>
    </Section>
  );
}
