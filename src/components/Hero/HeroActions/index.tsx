import { Button } from "../../Button"
import './HeroActions.css'

function HeroActions() {
  return (
    <div className="hero__actions">

      {/* view  */}
      <Button icon="">پخش</Button>

      {/* bookmark and download  */}
      <div className="hero__actions__subsection">
        <Button type="outlined" icon="" />
        <Button type="outlined" icon="" />
      </div>

      {/* likes and dislike  */}
      <div className="hero__actions__subsection">
        <Button type="outlined" icon="" />
        <Button type="outlined" icon="" />
      </div>
    </div>
  )
}

export default HeroActions