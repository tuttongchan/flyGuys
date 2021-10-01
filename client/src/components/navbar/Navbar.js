import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <h1>FlyGuys</h1>
      </div>
      <div className="socials-container">
        <button className="discord-button">
          <i class="fab fa-discord"></i>
        </button>
        <button className="twitter-button">
          <i class="fab fa-twitter"></i>
        </button>
        <button className="connect-wallet-button">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
