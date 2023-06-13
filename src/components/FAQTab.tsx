import { useState } from 'react';
import ArrowIcon from '../assets/icon-arrow.svg';

type Props = {
  question: string;
  answer: string;
};

const FAQTab = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-tab">
      <button
        className="question-container"
        onClick={() => setIsOpen((open) => !open)}
      >
        <p className="question">{question}</p>
        <img
          src={ArrowIcon}
          alt=""
          className="status-icon"
          style={{
            rotate: isOpen ? '180deg' : '',
          }}
        />
      </button>
      <p
        className="answer"
        style={{
          display: isOpen ? 'block' : 'none',
        }}
      >
        {answer}
      </p>
    </div>
  );
};

export default FAQTab;
