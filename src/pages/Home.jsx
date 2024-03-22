import { Faq, HeroSection, Navigation } from "../components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <Faq />
      </main>
    </>
  );
}
