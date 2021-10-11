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
        </div>
        <p className="team-desc">
          Hi! Tut is currently focusing on focusing on the implementation on the
          Art & Tech side. We have been working hard to establish our own style,
          and we're continuously looking for new ways to push ourselves. We also
          work with other brands. We will continue to try our best!
        </p>
      </div>
    </div>
  );
};

export default Team;
