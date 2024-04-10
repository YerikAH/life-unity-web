import { Faq, Features, Footer, HeroSection, Navigation, Promotion, Stats, Testimonials } from "../components";
import { PrivacyNotice } from "../components/PrivacyNotice";

export function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <Features />
        <Stats />
        <Testimonials />
        <Faq />
        <Promotion />
        <PrivacyNotice />
      </main>
      <Footer />
    </>
  );
}
