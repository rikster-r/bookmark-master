import BookmarkLogo from '../assets/logo-bookmark.svg';
import HamburgerIcon from '../assets/icon-hamburger.svg';
import PrimaryButton from './PrimaryButton';
import { useState } from 'react';

import '../styles/header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <div className="header">
        <div className="bookmark-logo-wrapper">
          <img src={BookmarkLogo} alt="" className="bookmark-logo" />
        </div>
        <button
          className="btn-dropdown"
          onClick={() => setDropdownOpen((open) => !open)}
        >
          <img src={HamburgerIcon} alt="" />
        </button>
        <div
          className={`dropdown-content ${dropdownOpen ? 'dropdown-open' : ''}`}
        >
          <nav className="section-nav">
            <a href="#" className="section-link">
              Features
            </a>
            <a href="#" className="section-link">
              Pricing
            </a>
            <a href="#" className="section-link">
              Contact
            </a>
          </nav>
          <PrimaryButton text={'Login'} uppercase={true} color="red" />
        </div>
      </div>
    </header>
  );
};

export default Header;
