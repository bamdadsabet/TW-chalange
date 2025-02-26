import "./Footer.css";
import { Button } from "@components/Button";
import downloadIcon from '@assets/icons/download.svg';
import FooterSocialMedias from "./FooterSocialMedias";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <>
      {/* desktop footer  */}
      <footer className="footer">
        {/* links */}
        <ul className="footer__subsection">
          <li>
            <Button icon={downloadIcon} type="outlined">دانلود اپلیکیشن</Button>
          </li>
          <li className="footer__links">
            <FooterLinks />
          </li>
        </ul>

        {/* social medias */}
        <ul className="footer__subsection">
        <li className="footer__copyright">
            .تمامی حقوق برای تلوبیون محفوظ است
          </li>
          <li className="footer__social-media">
            <FooterSocialMedias />
          </li>
        </ul>
      </footer>

      {/* mobile footer  */}
      <footer className="footer--mobile">
        {/* links */}
        <div className="footer--mobile__links">
          <FooterLinks />
        </div>

        {/* social medias  */}
        <div className="footer--mobile__social-media">
        <Button icon={downloadIcon} type="outlined">دانلود اپلیکیشن</Button>
          <FooterSocialMedias />
        </div>

        {/* copyright  */}
        <div className="footer__copyright">
        .تمامی حقوق برای تلوبیون محفوظ است
        </div>
      </footer>
    </>
  );
}

export default Footer;
