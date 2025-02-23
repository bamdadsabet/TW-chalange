import { IHeroMetaDataProps } from "../types"
import './HeroMetaData.css'

function HeroMetaData({IMDBbRate, hasDubbed, hasEnded, likes, madeIn, onAirDuration, isPG13, time, total}: IHeroMetaDataProps) {
  return (
    <div className="hero__metadata">
    
      {/* likes */}
      <span className="hero__metadata__text">
        {likes}
      </span>
      <span className="text-white pb-2">
        .
      </span>

      {/* IMDB rate */}
      <span className="hero__metadata__text">
        {IMDBbRate}
      </span>
      <span className="text-white pb-2">
        .
      </span>

      {/* time */}
      <span className="hero__metadata__text">
        {time}
      </span>
      <span className="text-white pb-2">
        .
      </span>

      {/* on air duration */}
      <span className="hero__metadata__text">
        {onAirDuration.start}
        {onAirDuration.end}
        {hasEnded}
      </span>
      <span className="text-white pb-2">
        .
      </span>

      {/* made in  */}
      <span className="hero__metadata__text">{madeIn}</span>
      <span className="text-white pb-2">
        .
      </span>

      {/* total */}
      <span className="hero__metadata__text">
        {total.seasonTotal}
        {total.episodeTotal}
      </span>
      <span className="text-white pb-2">
        .
      </span>

      {/* has dubbed */}
      { 
        hasDubbed && <>
          <span className="hero__metadata__text">دوبله فارسی</span> 
          { !isPG13 && <span className="text-white pb-2">.</span> }
        </>
      }

      {/* is PG13  */}
      { !isPG13 && <span className="hero__metadata__text">دوبله فارسی</span> }
    </div>
  )
}

export default HeroMetaData