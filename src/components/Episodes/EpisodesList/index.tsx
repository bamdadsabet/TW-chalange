import { useMemo, useState } from "react"
import { EpisodeCard, IEpisodeListProps } from "@components/Episodes"
import './EpisodesList.css'
import { Button } from "@components/Button"

function EpisodesList({ episodesList }: IEpisodeListProps) {
  const seasons = useMemo(() => episodesList.map(season => season.season), [episodesList])
  const [selectedSeason, setSelectedSeason] = useState<number>(seasons[0])
  const selectedSeasonEpisodes = useMemo(() => episodesList.find(season => season.season === selectedSeason)?.episodes, [selectedSeason, episodesList])
  const fetchMoreEpisodes = () => {
    console.log('fetch more episodes')
  }

  return (
    <section className="episode--list section-fold">

      {/* seasons tabs */}
      <div className="episode-list__tab__container">
        {
          seasons.map(season => (
            <div
              key={season} 
              className={`episode-list__tab${season === selectedSeason ? ' episode-list__tab--active': ''}`}
              onClick={() => {setSelectedSeason(season)}}
            >
            فصل {season}
            </div>
          ))
        }
        <div className="episode-list__tap--active">

        </div>
      </div>

      {/* episode list  */}
      <div className="episode--list__displayed-episodes">
        {
          selectedSeasonEpisodes?.map((episode, index) => (
            <EpisodeCard {...episode} season={selectedSeason} key={index} />
          ))
        }
      </div>

      {/* show more  */}
      <Button className="episode-list__show-more" action={fetchMoreEpisodes} type="outlined">مشاهده بیشتر</Button>
    </section>
  )
}

export default EpisodesList