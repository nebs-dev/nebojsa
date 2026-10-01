import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ProfileStrip } from "@/components/ProfileStrip";
import { Experience } from "@/components/Experience";
import { SelectedWork } from "@/components/SelectedWork";
import { WhatIDo } from "@/components/WhatIDo";
import { IndependentProducts } from "@/components/IndependentProducts";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />
        <ProfileStrip />
        <Experience />
        <SelectedWork />
        <WhatIDo />
        <IndependentProducts />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
