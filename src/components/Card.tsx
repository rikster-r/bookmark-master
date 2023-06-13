import { useState } from 'react';
import Dots from '../assets/bg-dots.svg';
import PrimaryButton from './PrimaryButton';
import '../styles/card.css'

type Props = {
  title: string;
  version: number;
};

const Card = ({ title, version }: Props) => {
  const [image, setImage] = useState<{ default: string }>();
  (async () => {
    setImage(await import(`../assets/logo-${title.toLowerCase()}.svg`));
  })();

  return (
    <div className="card">
      <div className="content">
        <img src={image?.default} alt="" className="img-card" />
        <h1 className="title card-title">Add to {title}</h1>
        <p className="subtitle card-subtitle">Minimum version {version}</p>
      </div>
      <img src={Dots} alt="" className="separator" />
      <div className="btn-container">
        <PrimaryButton
          text="Add & Install Extension"
          color="blue"
          uppercase={false}
        />
      </div>
    </div>
  );
};

export default Card;
