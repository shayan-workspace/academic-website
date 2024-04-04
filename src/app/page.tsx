import {
  AboutSection,
  HeroSection,
  PurposeSection,
  PillarsSection,
  ContactSection,
  ServiceSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PurposeSection />
      <ServiceSection />
      <PillarsSection />
      <ContactSection />
    </main>
  );
}
