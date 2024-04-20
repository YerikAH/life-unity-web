import { useEffect } from "react";
import {
  About,
  Banner,
  Contact,
  Footer,
  ListDevelopers,
  Navigation,
  Promotion,
} from "../components";
import { useTitle } from "../hooks";

export function Developers() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Developers - LifeUnity");
  }, [changeTitle]);
  return (
    <>
      <Banner />
      <Navigation />
      <main>
        <About />
        <ListDevelopers />
        <Contact />
        <Promotion />
      </main>
      <Footer />
    </>
  );
}
