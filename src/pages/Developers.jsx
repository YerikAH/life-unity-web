import { useEffect } from "react"
import { About, Contact, Footer, ListDevelopers, Navigation, Promotion } from "../components"
import { useTitle } from "../hooks"

export function Developers() {
  const { changeTitle } = useTitle()
  useEffect(() => {
    changeTitle('Developers - LifeUnity')
  }, [changeTitle])
  return (
    <>
      <Navigation />
      <main>
        <About />
        <ListDevelopers />
        <Contact />
        <Promotion />
      </main>
      <Footer />
    </>
  )
}
