import '../styles/footer.css';
import BookmarkLogo from '../assets/logo-bookmark-white.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import FacebookIcon from '../assets/icon-facebook.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="bookmark-logo-wrapper">
          <img src={BookmarkLogo} alt="" className="bookmark-logo" />
        </div>
        <nav className="section-nav">
          <a href="#features" className="section-link">
            Features
          </a>
          <a href="#" className="section-link">
            Pricing
          </a>
          <a href="#" className="section-link">
            Contact
          </a>
        </nav>

        <div className="social-media-links">
          <a href="#" aria-label="Facebook">
            <img src={FacebookIcon} alt="" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={TwitterIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
