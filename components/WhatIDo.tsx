import { Section } from "./Section";
import { CAPABILITIES } from "@/content/site";

export function WhatIDo() {
  return (
    <Section id="about" label="What I do" gap="loose">
      <div className="caps">
        {CAPABILITIES.map((item) => (
          <div key={item.index}>
            <div className="caps__index">{item.index}</div>
            <h3 className="caps__title">{item.title}</h3>
            <p className="caps__text">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
