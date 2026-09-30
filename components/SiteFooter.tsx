import { SITE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>
          © {SITE.year} {SITE.name} · {SITE.location}
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
