import React from 'react';
import classes from './About.module.css';
import { Animated } from 'react-animated-css';
import profile from '../Assets/Images/IMG_3818-removebg-preview (2).png';

function About() {
  return (
    <div className={classes.MainContainer1}>
      <h2>About Me</h2>
      <div className={classes.SecondaryContainer1}>
        <div className={classes.profile1}>
          <Animated
            animationIn='fadeInLeft'
            animationOut='fadeOut'
            isVisible={true}
          >
            <img
              src={profile}
              alt='profile'
              className={classes.profileImage1}
            />
          </Animated>
        </div>
        <div className={classes.TextContainer}>
          <Animated
            animationIn='fadeInRight'
            animationOut='fadeOut'
            isVisible={true}
          >
            <div className={classes.textInfo}>
              Hello, I am Bishal Shah and I am a Full Stack Web Developer. I
              have been living in Oulu,Finland for past 5 years. I completed my
              graudation in Bachelor of Enginnering in Information Technology
              from Oulu University of Applied Science in 2019. I spend most of
              my day, experimenting with HTML, CSS and JavaScript (and its
              endless list of frameworks). I enjoy coding and the challenge of
              learning something new everyday.
            </div>
            <div className={classes.projectStack}>
              <span>Html5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React-Hooks</span>
              <span>Redux</span>
              <span>React</span>
              <span>Firebase</span>
              <span>Laravel</span>
              <span>Php</span>
              <span>Heroku</span>
              <span>Node </span>
              <span>Express</span>
              <span>MangoDB</span>
              <span>SQL </span>
              <span>Express</span>
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
}

export default About;
