import { IHeroMetaDataProps } from "@components/Hero"
import './HeroMetaData.css'
import like from '@assets/icons/like-fill.svg'
import IMDB from '@assets/icons/IMDB.svg'

function HeroMetaData({IMDBbRate, hasDubbed, hasEnded, likes, madeIn, onAirDuration, isPG13, time, total}: IHeroMetaDataProps) {
  return (
    <div className="hero__metadata">
    
      {/* likes */}
      <span className="hero__metadata__text">
        <img className="w-3 h-3" src={like} alt="like-icon" />
        {likes}
      </span>
      <span className="text-white pb-2">
        .
      </span>

      {/* IMDB rate */}
      <span className="hero__metadata__text">
        <img className="w-[22px] h-5" src={IMDB} alt="IMDB-icon" />
        {IMDBbRate}
      </span>
      <span className="text-white pb-2">
        .
      </span>

      {/* time */}
      <span className="hero__metadata__text">
        {time} دقیقه
      </span>
      <span className="text-white pb-2">
        .
      </span>

      {/* on air duration */}
      <span className="hero__metadata__text">
        {onAirDuration.start}-{onAirDuration.end} {hasEnded ? '(پایان انتشار)' : ''}
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
        {total.seasonTotal} فصل ({total.episodeTotal} قسمت)
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
      { !isPG13 && <span className="hero__metadata__text">مناسب برای بالای ۱۸ سال</span> }
    </div>
  )
}

export default HeroMetaData