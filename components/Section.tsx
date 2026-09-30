import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  /** Adjusts the mobile gap under the label to match the approved design. */
  gap?: "default" | "loose" | "contact";
  children: ReactNode;
};

/** Ruled section with a small-caps label column (desktop) / label above (mobile). */
export function Section({ id, label, gap = "default", children }: Props) {
  return (
    <section id={id} className={`section section--${gap}`}>
      <div className="wrap section__inner">
        <h2 className="section__label">{label}</h2>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}
