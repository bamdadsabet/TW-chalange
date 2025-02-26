import { footer } from "@mock";
import bale from '@assets/icons/bale.svg';
import instagram from '@assets/icons/instagram.svg';
import linkedin from '@assets/icons/linkedin.svg';


const socialMediaIcons = {
  bale,
  instagram,
  linkedin
}

function FooterSocialMedias() {
  return (
    <>
      {footer.socialMedias.map((socialMedia: ILink) => (
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={socialMedia.href}
          key={socialMedia.name}
          className="footer__text"
        >
          <img src={socialMediaIcons[socialMedia.name as keyof typeof socialMediaIcons]} alt={socialMedia.name} />
        </a>
      ))}
    </>
  )
} 

export default FooterSocialMedias