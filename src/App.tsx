import Footer from "@components/Footer/Footer";
import { Hero } from "@components/Hero";
import { Navbar } from "@components/Navbar";
import { navbar } from "./mockData";
import { hero } from "@mock";
import { episodes } from "@mock";
import { EpisodesList } from "@components/Episodes";
function App() {
  return (
    <section className="bg-black h-screen">
      <Navbar links={navbar} />
      <Hero {...hero} />
      <EpisodesList episodesList={episodes} />
      <Footer />
    </section>
  );
}

export default App;
