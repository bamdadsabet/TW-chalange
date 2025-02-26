import { HeroActions, HeroMetaData, HeroTags, IHeroProps } from ".";
import './Hero.css'

function Hero({title, description, images, metaData, tags}: IHeroProps) {
  return (
    <section className="hero">

      {/* desktop thumbnail */}
      <img src={images.thumbnail.desktop} alt={title} className="hero__thumbnail hero__thumbnail--desktop" />

      <img src={images.thumbnail.mobile} alt={title} className="hero__thumbnail hero__thumbnail--mobile" />

      {/* hero content */}
      <div className="hero__content section-fold">

        {/* series logo */}
        <img src={images.logo} alt={title} className="hero__series-logo" />

        {/* title */}
        <h1 className="hero__title">{title}</h1>

        {/* metaData */}
        <HeroMetaData {...metaData} />

        {/* tags */}
        <HeroTags tags={tags} />

        {/* actions */}
        <HeroActions />

        {/* hero footer */}
        <div className="hero__footer">

          {/* description */}
          <p className="hero__description">{description}</p>
          
          {/* streaming network logo */}
          <img src={images.network} alt={title} />
        </div>
      </div>
    </section>
  )
}

export default Hero