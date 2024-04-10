import { useEffect } from "react";
import { Banner, Faq, Features, Footer, HeroSection, Navigation, Product, Promotion, Stats, Testimonials } from "../components";
import { PrivacyNotice } from "../components/PrivacyNotice";
import { useTitle } from "../hooks";

export function Home() {
  const { changeTitle } = useTitle()
  useEffect(() => {
    changeTitle('Home - LifeUnity')
  }, [changeTitle])
  return (
    <>
      <Banner />
      <Navigation />
      <main>
        <HeroSection />
        <Features />
        <Stats />
        <Product />
        <Testimonials />
        <Faq />
        <Promotion />
        <PrivacyNotice />
      </main>
      <Footer />
    </>
  );
}
