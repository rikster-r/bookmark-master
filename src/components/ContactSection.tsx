import '../styles/contact.css';
import PrimaryButton from './PrimaryButton';
import ErrorIcon from '../assets/icon-error.svg';
import { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const input = email.trim();

    if (input && input.length && /^\S+@\S+\.\S+$/.test(input)) {
      setError(undefined);
      alert('Input received successfully. Not actually sent anywhere');
    } else {
      setError("Whoops, make sure it's an email");
    }
  };

  return (
    <section id="contact" className="section-contact">
      <div className="content">
        <p className="contact-subtitle">35,000+ already joined</p>
        <h2 className="title contact-title">
          Stay up-to-date with what we're doing
        </h2>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className={`email-wrapper ${error ? 'error' : ''}`}>
            <input
              type="email"
              className={`contact-email ${error ? 'error' : ''}`}
              placeholder="Enter your email adress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <img
              src={ErrorIcon}
              alt=""
              className="error-icon"
              style={{ display: error ? 'block' : 'none' }}
            />
            <div
              className="error-message"
              style={{ display: error ? 'block' : 'none' }}
            >
              {error}
            </div>
          </div>
          <PrimaryButton text="Contact Us" color="red" uppercase={false} />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
