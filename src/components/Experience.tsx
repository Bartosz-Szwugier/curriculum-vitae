import { useLang } from '../i18n';
import { Section } from './Section';

export function Experience() {
  const { t } = useLang();
  return (
    <Section id="experience" index="02" title={t.experience.title}>
      <ol className="timeline">
        {t.experience.jobs.map((job, i) => (
          <li key={job.company} className="timeline__item">
            <span className={`timeline__dot ${i === 0 ? 'timeline__dot--live' : ''}`} aria-hidden="true" />
            <article className="card card--cut">
              <header className="job__head">
                <div>
                  <h3 className="job__role">{job.role}</h3>
                  <p className="job__company">
                    @ <span className="accent">{job.company}</span> · {job.location}
                  </p>
                </div>
                <span className="badge">{job.period}</span>
              </header>
              <ul className="bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
