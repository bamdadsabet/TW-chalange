import { THeroTagsProps } from "../types"
import './HeroTags.css'

function HeroTags({ tags }: THeroTagsProps) {
  return (
    <div className="hero__tags">
      {
        tags.map((tag, index) => (
          <span className="hero__tag" key={index}>{tag}</span>
        ))
      }
    </div>
  )
}

export default HeroTags