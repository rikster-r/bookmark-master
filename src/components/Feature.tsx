import { useState } from 'react';
import PrimaryButton from './PrimaryButton';

type Props = {
  tab: number;
};

const Feature = ({ tab }: Props) => {
  const [image, setImage] = useState<{ default: string }>();
  (async () => {
    setImage(await import(`../assets/illustration-features-tab-${tab}.svg`));
  })();

  let title = '',
    subtitle = '';
  switch (tab) {
    case 1:
      title = 'Bookmark in one click';
      subtitle =
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites';
      break;
    case 2:
      title = 'Intelligent search';
      subtitle =
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all your bookmarks';
      break;
    case 3:
      title = 'Share your bookmarks';
      subtitle =
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button';
      break;
  }

  return (
    <div className="feature">
      <div className="img-wrapper">
        <img src={image?.default} alt="" className="img-feature" />
        <div className="bg-blue"></div>
      </div>
      <div className="info feature-info">
        <h2 className="title feature-title">{title}</h2>
        <p className="subtitle feature-subtitle">{subtitle}</p>
        <div className="btn-container">
          <PrimaryButton text="More info" color="blue" uppercase={false} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
