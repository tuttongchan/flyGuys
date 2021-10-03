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
  ];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const shuffledBirds = () => {
    setTimeout(() => shuffle(birds), 1000);
    return birds
  };
  console.log(shuffledBirds);


  return (
    <header>
      <div className="birds-container">
        {birds.map((item, i) => (
          <div>
            <img key={i} src={item} alt="Generated birds" />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
