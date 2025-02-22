import './Footer.css';
import { footer } from '../../MockData';
function Footer() {
  return (
    <footer className="footer">

      {/* social medias */}
      <ul className="footer__subsection">
        <li className="footer__social-media">
          {
            footer.socialMedias.map((socialMedia) => (
              <a target='_blank' rel='noreferrer noopener' href={socialMedia.href} key={socialMedia.name} className='footer__text'>
                {socialMedia.name}
              </a>
            ))
          }
        </li>
        <li className='text-[12px] text-neutral-700'>.تمامی حقوق برای تلوبیون محفوظ است</li>
      </ul>

      {/* links */}
      <ul className="footer__subsection">
        <li></li>
        <li className="footer__links">
          {
            footer.links.map((link) => (
              <a href={link.href} key={link.name} className='text-[12px] text-neutral-400'>
                {link.name}
              </a>
            ))
          }
        </li>
      </ul>
    </footer>
  )
}

export default Footer