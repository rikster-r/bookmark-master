import FAQTab from './FAQTab';
import '../styles/faq.css';
import PrimaryButton from './PrimaryButton';

const FAQContent = [
  {
    id: 1,
    question: 'What is Bookmark?',
    answer:
      'A bookmark is a saved link to a specific webpage that allows you to quickly access it in the future without having to search for it again. It acts as a shortcut to your favorite or frequently visited websites.',
  },
  {
    id: 2,
    question: 'How can I request a new browser?',
    answer:
      "If you would like to request support for a new browser in our bookmark manager app, please reach out to our support team or contact us through the designated feedback channel on our website. We value user feedback and suggestions, and we'll consider your request for adding support for the requested browser in future updates. Your input helps us improve and expand our services, so we appreciate your involvement in making our app better.",
  },
  {
    id: 3,
    question: 'Is there a mobile app?',
    answer:
      'Yes, our bookmark manager app is available for mobile devices. You can download it from the respective app stores for Android and iOS. With the mobile app, you can access and manage your bookmarks on the go, syncing them seamlessly with your desktop browser.',
  },
  {
    id: 4,
    question: 'What about other chromium browsers?',
    answer:
      'Our bookmark manager app currently supports Chrome, Firefox, and Opera, which are popular web browsers. As they are based on the Chromium engine, our app should work smoothly on other Chromium-based browsers as well. While we primarily focus on the aforementioned browsers, we strive to provide compatibility across various Chromium derivatives.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-faq">
      <div className="info faq-info">
        <h2 className="title faq-title">Frequently Asked Questions</h2>
        <p className="subtitle faq-subtitle">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="faq-tabs-wrapper">
        <div className="faq-tabs">
          {FAQContent.map((data) => (
            <FAQTab
              key={data.id}
              question={data.question}
              answer={data.answer}
            />
          ))}
        </div>
      </div>
      <div className="center">
        <PrimaryButton text="More info" color="blue" uppercase={false} />
      </div>
    </section>
  );
};

export default FAQSection;
