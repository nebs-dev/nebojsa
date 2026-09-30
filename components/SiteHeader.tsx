import { NAV, SITE } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a className="header__name" href="#top">
          {SITE.name}
        </a>

        {/* Desktop navigation */}
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile navigation: native <details>, no JavaScript */}
        <details className="menu">
          <summary>Menu</summary>
          <nav className="menu__panel" aria-label="Primary">
            <div className="wrap">
              {NAV.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
