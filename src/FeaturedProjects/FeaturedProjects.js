import React, { useEffect } from 'react';
import Image from '../Assets/Images/ecommerce.png';
import Image1 from '../Assets/Images/ecommerce1.png';
import Image2 from '../Assets/Images/Screen Shot 2020-08-09 at 5.29.07 AM.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './FeaturedProjects.module.css';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';

function FeaturedProjects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.backgroundColorPrimary}>
      <section className={styles.projects}>
        <h2>Featured Projects</h2>
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <img src={Image1} alt='imageP' className={styles.projectImage} />
          </div>

          <div data-aos='flip-up' className={styles.projectInfo}>
            <span className={styles.projectNumber}>1</span>
            <h3>React & Redux Burger Application</h3>
            <p className={styles.projectDesc}>
              An application which allows users to purchase the burger using the
              allocated ingredients. The user must be logged in to make the
              successfull payment.This application has been developed with the
              help of react hooks and the state management is handled by
              redux-thunk.The authentication and the hosting is managed by
              Firebase.
            </p>
            <div className={styles.projectStack}>
              <span>Redux</span>
              <span>React</span>
              <span>Firebase</span>
              <span>React-Hooks</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href='https://github.com/greatshah222/Burger_react'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithubSquare className={styles.projectIcon} />
              </a>
              <a
                href='https://vidly-10b0b.firebaseapp.com/
              '
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaShareSquare className={styles.projectIcon} />
              </a>
            </div>
          </div>
        </div>{' '}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <img src={Image} alt='imageP' className={styles.projectImage} />
          </div>

          <div data-aos='flip-up' className={styles.projectInfo}>
            <span className={styles.projectNumber}>2</span>
            <h3>React Ecommerce Project</h3>
            <p className={styles.projectDesc}>
              A simple ecommerce project which uses the basic concept of react
              and react-router. The paypal system has also been integrated with
              the deduction of amout according to the cart total.
            </p>
            <div className={styles.projectStack}>
              <span>Redux</span>
              <span>React-Router</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href='https://github.com/greatshah222/Ecommerce_React '
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithubSquare className={styles.projectIcon} />
              </a>
              <a
                href='https://react-ecommerce-shah-bishal.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaShareSquare className={styles.projectIcon} />
              </a>
            </div>
          </div>
        </div>{' '}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <img src={Image2} alt='imageP' className={styles.projectImage} />
          </div>

          <div data-aos='flip-up' className={styles.projectInfo}>
            <span className={styles.projectNumber}>3</span>
            <h3>MERN Project</h3>
            <p className={styles.projectDesc}>
              This application uses the concept of MERN(MangoDB, express, React
              and Node). The backend server is integrated with Node and express
              and is hosted to heroku. The client side concept is hosted as a
              static page which communicates with backend as request and
              response.The client side page may take a few minutes before the
              initial loading because free heroku hosted application goes to
              sleep mode after 30 mins of inactive session. The user can create
              tour(blog) and also add the address which is converted to the
              address in map with the help of Mapbox api. The creator of the
              post can also delete and update their own places.The logged user
              are allowed to create as many places as they want
            </p>
            <div className={styles.projectStack}>
              <span>MangoDB</span>
              <span>React</span>
              <span>React-router</span>
              <span>Express</span>
              <span>Node</span>
              <span>MapBox Api</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href='https://github.com/greatshah222/MERNBLOGAugust'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithubSquare className={styles.projectIcon} />
              </a>
              <a
                href='https://bishalshahmernblog.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaShareSquare className={styles.projectIcon} />
              </a>
            </div>
          </div>
        </div>{' '}
      </section>
    </div>
  );
}

export default FeaturedProjects;
