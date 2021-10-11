import React from 'react';
import './content.css';
import Carousel from '../carousel/Carousel';

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-left-container">
        <div className="content-left-desc">
          <div className="content-left-heading">
            <h1>50 unique Mekas</h1>
            <h1>who need Drivers.</h1>
          </div>
          <p className="content-first-desc">
            The MekaVerse is a collection of 8,888 generative Mekas with
            hundreds of elements inspired by the Japan Mecha universes.
          </p>
          <p className="content-second-desc">
            Each artwork is original, with its own color palette and creation.
            The objective was to make each Meka unique in order to prioritize
            quality above quantity.
          </p>
        </div>
      </div>
      <div className="content-right-container">
        <Carousel />
      </div>
    </div>
  );
};

export default Content;
