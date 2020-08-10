import React, { useEffect } from 'react';
import { FaDev, FaRegGem, FaMobileAlt } from 'react-icons/fa';
import classes from './Services.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cuisine from '../Assets/Images/cuisine_service.jpg';
import menuDesign from '../Assets/Images/menu_desgin_-service.jpg';

function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className={classes.Services}>
      <h2>Services</h2>
      <div className={classes.ServicesPrimary}>
        <div data-aos='fade-right' className={classes.ServicesSecondary}>
          <div className={classes.logo}>
            <img src={cuisine} alt='' className={classes.socialIcon} />
          </div>
          <h3 className={classes.title}>Cuisine</h3>
          <div className={classes.underline}></div>
          <ul className={classes.info}>
            <li>Continental</li>
            <li>Experimental</li>
            <li>Pan Asian </li>
            <li>Indian / Contemporary Indian </li>
          </ul>
        </div>
        <div data-aos='fade-left' className={classes.ServicesSecondary}>
          <div className={classes.logo}>
            <img src={menuDesign} alt='' className={classes.socialIcon} />
          </div>
          <h3 className={classes.title}>Menu Design</h3>
          <div className={classes.underline}></div>
          <ul className={classes.info}>
            <li>Casual Dining</li>
            <li>Fine Dining</li>
            <li>Quick Serving Restaurant </li>
            <li>Confectionery </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
