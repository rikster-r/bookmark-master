import '../styles/features.css';
import { useState } from 'react';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="section-features">
      <div className="features-info">
        <h2 className="features-title">Features</h2>
        <p className="features-subtitle">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="features-nav">
        {['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'].map(
          (text, i) => (
            <button
              className={activeTab === i ? 'active' : ''}
              onClick={() => setActiveTab(i)}
            >
              {text}
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default Features;
