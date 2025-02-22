import Footer from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar"
import { navbar } from "./MockData"
function App() {
  return (
    <section className="bg-black h-screen">
      <Navbar links={navbar} />
      <Footer />
    </section>
  )
}

export default App
