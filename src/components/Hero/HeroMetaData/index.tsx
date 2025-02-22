import { IHeroMetaDataProps } from "../types"

function HeroMetaData({IMDBbRate, hasDubbed, hasEnded, likes, madeIn, onAirDuration, isPG13, time, total}: IHeroMetaDataProps) {
  <div className="hero__metadata">

    {/* likes */}
    <span className="hero__metadata__text">
      {likes}
    </span>

    {/* IMDB rate */}
    <span className="hero__metadata__text">
      {IMDBbRate}
    </span>

    {/* time */}
    <span className="hero__metadata__text">
      {time}
    </span>

    {/* on air duration */}
    <span className="hero__metadata__text">
      {onAirDuration.start}
      {onAirDuration.end}
    </span>

    {/* made in  */}
    <span className="hero__metadata__text">{madeIn}</span>

    {/* total */}
    <span className="hero__metadata__text">
      {total.seasonTotal}
      {total.episodeTotal}
    </span>

    {/* has dubbed */}
    { hasDubbed && <span className="hero__metadata__text">دوبله فارسی</span> }

    {/* is PG13  */}
    { isPG13 && <span className="hero__metadata__text">دوبله فارسی</span> }
  </div>
}

export default HeroMetaData