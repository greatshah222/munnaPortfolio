import React, { useState, useEffect } from 'react';
import classes from './Progressbar.module.css';
import { Animated } from 'react-animated-css';

function ProgressBar({ width }) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${width}%`,
    };
    setStyle(newStyle);
  }, [width]);
  return (
    <Animated
      animationIn='bounceInLeft'
      animationOut='fadeOut'
      isVisible={true}
    >
      <div className={classes.Progress}>
        <div className={classes.ProgressDone} style={style}>
          {width}%
        </div>
      </div>
    </Animated>
  );
}

export default ProgressBar;
