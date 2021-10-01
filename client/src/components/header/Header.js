import React from 'react';
import './header.css';
import bird0 from '../../imgs/bird_images/0.png';
import bird1 from '../../imgs/bird_images/1.png';
import bird2 from '../../imgs/bird_images/2.png';
import bird3 from '../../imgs/bird_images/3.png';
import bird4 from '../../imgs/bird_images/4.png';
import bird5 from '../../imgs/bird_images/5.png';
import bird6 from '../../imgs/bird_images/6.png';
import bird7 from '../../imgs/bird_images/7.png';
import bird8 from '../../imgs/bird_images/8.png';
import bird9 from '../../imgs/bird_images/9.png';
import bird10 from '../../imgs/bird_images/10.png';
import bird11 from '../../imgs/bird_images/11.png';
import bird12 from '../../imgs/bird_images/12.png';
import bird13 from '../../imgs/bird_images/13.png';
import bird14 from '../../imgs/bird_images/14.png';
import bird15 from '../../imgs/bird_images/15.png';
import bird16 from '../../imgs/bird_images/16.png';
import bird17 from '../../imgs/bird_images/17.png';
import bird18 from '../../imgs/bird_images/18.png';
import bird19 from '../../imgs/bird_images/19.png';
import bird20 from '../../imgs/bird_images/20.png';
import bird21 from '../../imgs/bird_images/21.png';
import bird22 from '../../imgs/bird_images/22.png';
import bird23 from '../../imgs/bird_images/23.png';
import bird24 from '../../imgs/bird_images/24.png';
import bird25 from '../../imgs/bird_images/25.png';
import bird26 from '../../imgs/bird_images/26.png';
import bird27 from '../../imgs/bird_images/27.png';
import bird28 from '../../imgs/bird_images/28.png';
import bird29 from '../../imgs/bird_images/29.png';
import bird30 from '../../imgs/bird_images/30.png';
import bird31 from '../../imgs/bird_images/31.png';
import bird32 from '../../imgs/bird_images/32.png';
import bird33 from '../../imgs/bird_images/33.png';
import bird34 from '../../imgs/bird_images/34.png';
import bird35 from '../../imgs/bird_images/35.png';
import bird36 from '../../imgs/bird_images/36.png';
import bird37 from '../../imgs/bird_images/37.png';
import bird38 from '../../imgs/bird_images/38.png';
import bird39 from '../../imgs/bird_images/39.png';
import bird40 from '../../imgs/bird_images/40.png';
import bird41 from '../../imgs/bird_images/41.png';
import bird42 from '../../imgs/bird_images/42.png';
import bird43 from '../../imgs/bird_images/43.png';
import bird44 from '../../imgs/bird_images/44.png';
import bird45 from '../../imgs/bird_images/45.png';
import bird46 from '../../imgs/bird_images/46.png';
import bird47 from '../../imgs/bird_images/47.png';
import bird48 from '../../imgs/bird_images/48.png';
import bird49 from '../../imgs/bird_images/49.png';

const Header = () => {
  const birds = [
    bird0,
    bird1,
    bird2,
    bird3,
    bird4,
    bird5,
    bird6,
    bird7,
    bird8,
    bird9,
    bird10,
    bird11,
    bird12,
    bird13,
    bird14,
    bird15,
    bird16,
    bird17,
    bird18,
    bird19,
    bird20,
    bird21,
    bird22,
    bird23,
    bird24,
    bird25,
    bird26,
    bird27,
    bird28,
    bird29,
    bird30,
    bird31,
    // bird32,
    // bird33,
    // bird34,
    // bird35,
    // bird36,
    // bird37,
    // bird38,
    // bird39,
    // bird40,
  ];

  return (
    <header>
      <div className="birds-container">
        {birds.map((item) => (
          <div>
            <img key={item} src={item} alt="" />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
