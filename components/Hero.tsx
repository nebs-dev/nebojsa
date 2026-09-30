import { CONTACT, HERO, SITE } from "@/content/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__inner">
        <p className="hero__eyebrow">{SITE.role}</p>
        <h1 className="hero__title">{HERO.headline}</h1>
        <p className="hero__lede">{HERO.lede}</p>
        <p className="hero__aside">{HERO.aside}</p>
        <div className="cta">
          <a className="btn" href={HERO.primaryCta.href}>
            {HERO.primaryCta.label}
          </a>
          <div className="cta__links">
            <a href={HERO.secondaryCta.href}>{HERO.secondaryCta.label}</a>
            <a href={CONTACT.linkedin.href} aria-label={CONTACT.linkedin.ariaLabel}>
              {HERO.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
