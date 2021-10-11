import React from 'react';
import './team.css';
import teamImg from '../../imgs/bird_images/team.png';
import peopleImg from '../../imgs/bird_images/people.png';

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-image-container">
        <img src={teamImg} alt="Tut Bird" className="team-image" />
      </div>
      <div>
        <div className="team-heading-container">
          <div className="team-heading-top">
            <div>
              <div>
                <h1 className="team-heading-1">Who are we?</h1>
              </div>
              <div>
                <h1 className="team-heading-2">Creative teams</h1>
              </div>
            </div>
            <div>
              <img src={peopleImg} alt="" className="people-image" />
            </div>
          </div>
          {/* <div>
            <h1 className="team-heading-1">Who are we?</h1>
            <h1 className="team-heading-2">Creative teams</h1>
          </div>
          <div>
            <img src={peopleImg} alt="" className="people-image" />
          </div> */}
        </div>
        <p className="team-desc">
          Hi! Mattey & Matt. B are two friends currently focusing on 3D & Art
          direction. We have been working hard to establish our own style, and
          we're continuously looking for new ways to push ourselves. We also
          worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!
        </p>
      </div>
    </div>
  );
};

export default Team;
