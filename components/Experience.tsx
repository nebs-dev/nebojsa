import { Section } from "./Section";
import { COMPANIES, EXPERIENCE_INTRO, EXPERIENCE_LABEL } from "@/content/site";

export function Experience() {
  return (
    <Section id="experience" label={EXPERIENCE_LABEL}>
      <p className="intro">{EXPERIENCE_INTRO}</p>
      <ul className="companies">
        {COMPANIES.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Section>
  );
}
