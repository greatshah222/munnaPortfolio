import React, { useEffect } from 'react';
import Button from '../Shared/Button/Button';
import classes from './Footer.module.css';
// import CV from '../Assets/Images/NewCvUpdated.pdf';
import {
  FaFacebook,
  FaMailchimp,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className={classes.FreelanceImageContainer}>
        <div className={classes.SecondaryContainer}>
          <h3>Let's work together indeed!</h3>
          <div data-aos='fade-right' className={classes.ButtonsSection}>
            <Button
              btnType='hire'
              style={{ padding: '10px 35px' }}
              to='/v1/contactme'
            >
              Hire Me
            </Button>
          </div>
        </div>
      </section>
      <section className={classes.Footerprimary}>
        <div className={classes.Footer}>
          <div data-aos='fade-up-right' className={classes.Aboutme}>
            <h4 className={classes.heading}>About Me</h4>
            <div className={classes.AboutmeInfo}>
              Hello, I am Munna Khan, an Indian Chef working in Oulu, Finland.
            </div>
            <div className={classes.AboutmeIcon}>
              <a
                href='https://www.facebook.com/profile.php?id=100030950023564'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook className={classes.socialIcon} />
              </a>
            </div>
          </div>
          <div data-aos='fade-up' className={classes.Address}>
            <h4 className={classes.heading}>Address</h4>

            <div className={classes.AddressLocation}>
              <FaLocationArrow className={classes.AddressIcon} />
              <h5>Oulu,Finland</h5>
            </div>
            <div className={classes.AddressPhone}>
              <FaPhone className={classes.AddressIcon} />
              <h5>+358452510682</h5>
            </div>
            <div className={classes.AddressEmail}>
              <FaMailBulk className={classes.AddressIcon} />
              <h5>khanindianchef@gmail.com</h5>
            </div>
          </div>
          <div data-aos='fade-up' className={classes.Contactme}>
            <h4 className={classes.heading}>Developed By Bishal Shah</h4>

            <div className={classes.AddressEmail}>
              <FaMailchimp className={classes.AddressIcon} />
              <h5>great.shah222@gmail.com</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
