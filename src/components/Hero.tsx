import HeroImage from '../assets/illustration-hero.svg';
import PrimaryButton from './PrimaryButton';

import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="hero" className="section-hero">
      <div className="img-hero-wrapper">
        <img src={HeroImage} alt="" className="img-hero" />
        <div className="bg-blue"></div>
      </div>
      <div className="hero-info">
        <h1 className="hero-title">A Simple Bookmark Manager</h1>
        <p className="hero-subtitle">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="btn-container">
          <PrimaryButton
            text="Get it on Chrome"
            uppercase={false}
            color="blue"
          />
          <PrimaryButton
            text="Get it on Firefox"
            uppercase={false}
            color="gray"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
