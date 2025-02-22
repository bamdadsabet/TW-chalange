import Footer from "./components/Footer/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { navbar } from "./MockData"
import { hero } from "./MockData"
function App() {
  return (
    <section className="bg-black h-screen">
      <Navbar links={navbar} />
      <Hero {...hero} />
      <Footer />
    </section>
  )
}

export default App
