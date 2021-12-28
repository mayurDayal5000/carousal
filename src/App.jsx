import React, { useState } from 'react';
import './app.css';

import prevBtn from './img/prevBtn.png';
import nextBtn from './img/nextBtn.png';

import img01 from './img/img01.jpg';
import img02 from './img/img02.jpg';
import img03 from './img/img03.jpg';

const App = () => {
  const [count, setCount] = useState(0);

  const images = [img01, img02, img03];

  const onPrevClick = () => {
    if (count > 0) setCount(prev => prev - 1);
    else setCount(images.length - 1);
  };

  const onNextClick = () => {
    if (count < images.length - 1) setCount(prev => prev + 1);
    else setCount(0);
  };

  let background = {
    backgroundImage: `URL(${images[count]})`,
  };

  return (
    <section className="carousal-container">
      <button type="button" className="prevBtn" onClick={onPrevClick}>
        <img src={prevBtn} alt="previous button" />
      </button>
      <article className="carousal-content" style={background}></article>
      <button type="button" className="nextBtn" onClick={onNextClick}>
        <img src={nextBtn} alt="next button" />
      </button>
    </section>
  );
};

export default App;
