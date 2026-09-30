import { PROFILE } from "@/content/site";

export function ProfileStrip() {
  return (
    <section className="profile" aria-label="Profile">
      <div className="wrap profile__inner">
        <dl className="profile__list">
          {PROFILE.map((item) => (
            <div key={item.label} className="profile__row">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
