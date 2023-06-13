import { useState } from 'react';
import Feature from './Feature';
import '../styles/features.css';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="section-features">
      <div className="info features-info">
        <h2 className="title features-title">Features</h2>
        <p className="subtitle features-subtitle">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="features-nav">
        {['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'].map(
          (text, i) => (
            <button
              key={text}
              className={activeTab === i ? 'active' : ''}
              onClick={() => setActiveTab(i)}
            >
              {text}
            </button>
          )
        )}
      </div>
      <Feature tab={activeTab} />
    </section>
  );
};

export default FeaturesSection;
