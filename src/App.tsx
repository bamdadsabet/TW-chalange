import Footer from "./components/Footer/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { navbar } from "./MockData"
import { hero } from "./MockData"
import { episodes } from './MockData'
import { EpisodesList } from "./components/Episodes"
function App() {
  return (
    <section className="bg-black h-screen">
      <Navbar links={navbar} />
      <Hero {...hero} />
      {/* <EpisodesList {...episodes} /> */}
      <Footer />
    </section>
  )
}

export default App
