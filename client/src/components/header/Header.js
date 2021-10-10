import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [count, setCount] = useState(0);

  const detectChange = () => {
    setCount((prev)=> count < 0 ? count === 0 : null )
  }

  const handleSubtract = () => {
    setCount((prev) => (prev -= 1));

    // if (count < 0) {
    //   count === 0;
    // }
  };

  const handleAdd = () => {
    // setCount((prev) => (count += prev));
    setCount((prev) => (prev += 1));
  };

  return (
    <header>
      <div className="birds-container">
        <div className="birds-heading-container">
          <div className="birds-heading-top">
            <h1>FlyGuys</h1>
            <span className="birds-span-1">Public Sale is Active</span>
            <span className="birds-span-2">.07 ETH Each</span>
          </div>
          <div className="birds-heading-bottom">
            <button onClick={handleSubtract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
          </div>
          <div>
            <button className="mint-button">Mint FlyGuys</button>
          </div>
        </div>
        {/* {birds.map((item) => (
          <div>
            <img key={i} src={item} alt="Generated birds" />
          </div>
        ))} */}
      </div>
    </header>
  );
};

export default Header;
