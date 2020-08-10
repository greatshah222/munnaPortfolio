import React, { useEffect, useState } from 'react';
import Button from '../Shared/Button/Button';
import classes from './Footer.module.css';
import axios from 'axios';
import CV from '../Assets/Images/NewCvUpdated.pdf';
import {
  FaFacebook,
  FaLinkedin,
  FaGithubSquare,
  FaTwitter,
  FaMailchimp,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [Email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const EmailChangehandler = (e) => {
    setEmail(e.target.value);
  };
  const MessageChangehandler = (e) => {
    setMessage(e.target.value);
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios({
        method: 'POST',
        data: {
          email: Email,
          message: message,
        },
        url: `${process.env.REACT_APP_BACKEND_URL}/email`,
      });
      setMessage('');
      setEmail('');
      await toast.success('Thankyou for the Message');
      setLoading(false);
    } catch (error) {
      await toast.error(error.response.data.error.response);
      console.log(error.response.data.error.response);
      setLoading(false);
    }
  };
  return (
    <>
      <section className={classes.FreelanceImageContainer}>
        <ToastContainer />
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
