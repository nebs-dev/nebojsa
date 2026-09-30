import { Section } from "./Section";
import { WORK, WORK_INTRO } from "@/content/site";

export function SelectedWork() {
  return (
    <Section id="work" label="Selected work">
      <p className="work__intro">{WORK_INTRO}</p>

      {WORK.map((item) => (
        <article key={item.name} className="case">
          <div className="case__head">
            <p className="case__meta">
              <span className="case__index">{item.index}</span>
              <span className="case__sep">·</span>
              Engagement
              <span className="case__sep">·</span>
              {item.context}
            </p>
            <h3 className="case__name">{item.name}</h3>
            <p className="case__label case__label--accent">Problem owned</p>
            <p className="case__problem">{item.problem}</p>
          </div>

          <div className="case__detail">
            <p className="case__label">Ownership</p>
            <ul className="case__list">
              {item.ownership.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="case__foot">
              <span className="case__stack">{item.stack}</span>
              {item.link && (
                <a className="case__link" href={item.link.href} aria-label={item.link.ariaLabel}>
                  {item.link.label}
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </Section>
  );
}
