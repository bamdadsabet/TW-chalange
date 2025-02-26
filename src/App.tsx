import Footer from "@components/Footer/Footer";
import { Hero } from "@components/Hero";
import { Navbar } from "@components/Navbar";
import { navbar } from "./mockData";
import { hero } from "@mock";
import { episodes } from "@mock";
import { EpisodesList } from "@components/Episodes";
import { NavigationBar } from "./components/NavigationBar";
function App() {
  return (
    <section>
      <Navbar links={navbar} />
      <Hero {...hero} />
      <EpisodesList episodesList={episodes} />
      <Footer />
      <NavigationBar />
    </section>
  );
}

export default App;
