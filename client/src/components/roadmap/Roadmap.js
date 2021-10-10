import React from 'react';
import './roadmap.css';

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <div className="roadmap-top-container">
        <h5>FlyGuys</h5>
        <h1>Roadmap Activations</h1>
        <div className="roadmap-top-desc">
          <p>
            Launch - From day one, we will be building out our Mystery Skin
            feature, which enables you to change the appearance of your Staker
            to its mystery skin (and back to human!), recorded for posterity on
            the Ethereum blockchain. Expect this feature to unlock a few weeks
            after launch.
          </p>
        </div>
      </div>

      <div className="roadmap-bottom-container">
        <div className="roadmap-details">
          <div>
            <i className="fas fa-feather"></i>
          </div>
          <div className="roadmap-bottom-desc">
            <span>40% Sold</span>
            <p>
              Work on our online store, filled with limited-edition Stakers
              merch will begin.
            </p>
          </div>
        </div>
        <div className="roadmap-details">
          <div>
            <i className="fas fa-feather"></i>
          </div>
          <div className="roadmap-bottom-desc">
            <span>60% Sold</span>
            <p>
              Our Stakers Edu-Channel, featuring exclusive educational content
              on the worlds of blockchain and DeFi, launches. We start work on
              our Stakers Metaverse presence, featuring live events and
              exhibitions for our holders.
            </p>
          </div>
        </div>

        <div className="roadmap-details">
          <div>
            <i className="fas fa-feather"></i>
          </div>
          <div className="roadmap-bottom-desc">
            <span>80% Sold</span>
            <p>
              The Stakers lab opens and the countdown begins towards Stakers
              Transformations, a new NFT featuring a transformed version of your
              Staker, available to all holders.
            </p>
          </div>
        </div>
        <div className="roadmap-details">
          <div>
            <i className="fas fa-feather"></i>
          </div>
          <div className="roadmap-bottom-desc">
            <span>100% Sold</span>
            <p>
              Planning begins for our exclusive Stakers community ETH 2.0
              staking pool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
