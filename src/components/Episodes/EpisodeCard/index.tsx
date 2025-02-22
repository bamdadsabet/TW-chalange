import { IEpisodeCardProps } from "../types";
import './EpisodeCard.css'

function EpisodeCard({ episode, link, thumbnail, time, title, rate, views, subtitle }: IEpisodeCardProps) {
  return (
    <a href={link} className="episode-card">

      {/* thumbnail */}
      <div className="episode-card__thumbnail">

        {/* thumbnail image */}
        <img src={thumbnail} alt={title} className="episode-card__img" />

        {/* thumbnail time  */}
        <span className="episode-card__time">{time}</span>
      </div>

      {/* episode data  */}
      <div className="episode-card__data">

        {/* episode info  */}
        <div className="episode-card__info">

          {/* title */}
          <h4 className="episode-card__title">{title}</h4>

          {/* subtitle */}
          {!!subtitle && <h5 className="episode-card__subtitle">{subtitle}</h5>}

          {/* metadata  */}
          <div className="episode-card__subsection">

            {/* episode number */}
            <span className="episode-card__text">
              {episode} 
            </span>

            {/* views */}
            { !!views && <span className="episode-card__text">{views}</span> }
          </div>
        </div>

        {/* episode rate  */}
        { !!rate && <span className="episode-card__subsection">{rate}</span> }
      </div>
    </a>
  )
}

export default EpisodeCard