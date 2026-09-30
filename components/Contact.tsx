import { Section } from "./Section";
import { CONTACT, CONTACT_STATEMENT } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" label="Contact" gap="contact">
      <p className="contact__statement">{CONTACT_STATEMENT}</p>
      <div className="contact__links">
        <div>
          <div className="contact__key">Email</div>
          <a href={CONTACT.email.href} aria-label={CONTACT.email.ariaLabel}>{CONTACT.email.label}</a>
        </div>
        <div>
          <div className="contact__key">LinkedIn</div>
          <a href={CONTACT.linkedin.href} aria-label={CONTACT.linkedin.ariaLabel}>{CONTACT.linkedin.label}</a>
        </div>
        <div>
          <div className="contact__key">GitHub</div>
          <a href={CONTACT.github.href} aria-label={CONTACT.github.ariaLabel}>{CONTACT.github.label}</a>
        </div>
      </div>
    </Section>
  );
}
