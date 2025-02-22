import { EpisodeCard } from "../."
import './EpisodesList.css'

function EpisodesList() {
  return (
    <section className="episode--list">

      {/* seasons tabs */}
      <div className="episode-list__tab__container">
        <div className="episode-list__tab">

        </div>
        <div className="episode-list__tap--active">

        </div>
      </div>

      {/* episode list  */}
      <div className="episode--list__displayed-episodes">
        <EpisodeCard />
      </div>
    </section>
  )
}

export default EpisodesList