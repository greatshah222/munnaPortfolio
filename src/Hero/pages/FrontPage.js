import React from 'react';
import profile from '../../Assets/Images/IMG_3970.JPG';
import classes from './FrontPage.module.css';

import { FaFacebookSquare } from 'react-icons/fa';
import Button from '../../Shared/Button/Button';
import { Animated } from 'react-animated-css';

function FrontPage() {
  return (
    <section className={classes.home}>
      <div className={classes.showcase}>
        <div className={classes.info}>
          {' '}
          <h2>I'm Munna Khan</h2>
          <p>Indian Chef in Finland</p>
          <Button btnType='hire' to='/v1/contactme'>
            Hire Me
          </Button>
          <div className={classes.footer}>
            <a
              href='https://www.facebook.com/profile.php?id=100030950023564'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <FaFacebookSquare className={classes.socialIcon} />
            </a>
          </div>
        </div>

        <div className={classes.profile}>
          <Animated
            animationIn='fadeInRight'
            animationOut='fadeOut'
            isVisible={true}
          >
            <img src={profile} alt='profile' className={classes.profileImage} />
          </Animated>
        </div>
      </div>
    </section>
  );
}

export default FrontPage;
