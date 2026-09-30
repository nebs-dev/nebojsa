import { Section } from "./Section";
import { PRODUCTS, PRODUCTS_INTRO, PRODUCTS_LABEL } from "@/content/site";

export function IndependentProducts() {
  return (
    <Section id="projects" label={PRODUCTS_LABEL}>
      <p className="intro">{PRODUCTS_INTRO}</p>
      <ul className="rows">
        {PRODUCTS.map((item) => (
          <li key={item.name} className="product">
            <span className="product__name">{item.name}</span>
            <span className="product__text">{item.text}</span>
            <span className="product__tag">{item.tag}</span>
            {item.links && (
              <span className="product__links">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} aria-label={link.ariaLabel}>
                    {link.label}
                  </a>
                ))}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
