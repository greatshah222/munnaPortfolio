import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classes from './Skills.module.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaCode,
} from 'react-icons/fa';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.SkillsHeading}>
      <h2>SKILLS</h2>
      <div className={classes.Skills}>
        <div data-aos='fade-right' className={classes.SkillsPrimary}>
          <h4>HTML5 </h4> <FaHtml5 className={classes.socialIcon} />
          <ProgressBar width='90' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-left' className={classes.SkillsPrimary}>
          <h4>CSS3 </h4>
          <FaCss3 className={classes.socialIcon} />
          <ProgressBar width='90' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-right' className={classes.SkillsPrimary}>
          <h4>React </h4>
          <FaReact className={classes.socialIcon} />

          <ProgressBar width='90' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-left' className={classes.SkillsPrimary}>
          <h4>React-Router </h4>
          <FaReact className={classes.socialIcon} />

          <ProgressBar width='90' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-right' className={classes.SkillsPrimary}>
          <h4>Node</h4>
          <FaNode className={classes.socialIcon} />
          <ProgressBar width='80' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-left' className={classes.SkillsPrimary}>
          <h4>Php</h4>
          <FaPhp className={classes.socialIcon} />
          <ProgressBar width='70' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-right' className={classes.SkillsPrimary}>
          <h4>Laravel</h4>
          <FaLaravel className={classes.socialIcon} />

          <ProgressBar width='80' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-left' className={classes.SkillsPrimary}>
          <h4>Express</h4>
          <FaCode className={classes.socialIcon} />

          <ProgressBar width='80' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-right' className={classes.SkillsPrimary}>
          <h4>Redux</h4>
          <FaCode className={classes.socialIcon} />

          <ProgressBar width='90' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-left' className={classes.SkillsPrimary}>
          <h4>mangodb</h4>
          <FaDatabase className={classes.socialIcon} />

          <ProgressBar width='80' className={classes.ProgressBar} />
        </div>
        <div data-aos='fade-right' className={classes.SkillsPrimary}>
          <h4>JavaScript</h4>
          <FaCode className={classes.socialIcon} />

          <ProgressBar width='95' className={classes.ProgressBar} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
