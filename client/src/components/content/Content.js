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
            The FlyGuys is a collection of 8,888 generative Birds with
            hundreds of elements inspired by other bit projects.
          </p>
          <p className="content-second-desc">
            Each artwork is generated with its own color palette and creation, by minting you have a chance of getting a common bird, woodpecker, jay, eagle, or cockatoo.
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
