import { Button } from "@components/Button"
import './HeroActions.css'
import bookmark from '@assets/icons/bookmark.svg'
import download from '@assets/icons/download.svg'
import like from '@assets/icons/like.svg'
import dislike from '@assets/icons/dislike.svg'
import play from '@assets/icons/play.svg'

function HeroActions() {
  return (
    <div className="hero__actions">

      {/* view  */}
      <Button icon={play}>پخش</Button>

      {/* bookmark and download  */}
      <div className="hero__actions__subsection">
        <Button type="outlined" icon={download} />
        <Button type="outlined" icon={bookmark} />
      </div>

      {/* likes and dislike  */}
      <div className="hero__actions__subsection">
        <Button type="outlined" icon={dislike} />
        <Button type="outlined" icon={like} />
      </div>
    </div>
  )
}

export default HeroActions