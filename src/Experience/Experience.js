import React, { useState, useEffect } from 'react';
import classes from './Experience.module.css';
import { FaServicestack } from 'react-icons/fa';
import { NavLink, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  const [contenttext, setcontentText] = useState();
  const url = useParams().url;
  const contentExperience = (
    <div data-aos='fade-up-left' className={classes.ExperienceInfo}>
      <div className={classes.title}>Indian Chef</div>
      <div className={classes.tag}>Chennai, India</div>
      <div className={classes.TimePeriod}> May 2010- Present</div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Worked in Nazrene Food Court, Chennai from May 2010 to July 2011{' '}
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Worked in Goldmine Hotels Chennai from August 2010 to October 2012
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Worked in Radha Regent Hotel Chennai from february 2014 to March 2015
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Worked in Radisson Hotel Chennai from March 2015 to July 2015
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Worked in VM Hospitality Chennai from December 2015 to September 2016
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Worked in Indian Cuisine Finland from October 2016 to Present
        </div>
      </div>
    </div>
  );

  let contentEducation;
  contentEducation = (
    <div data-aos='fade-right' className={classes.ExperienceInfo}>
      <div className={classes.title}>
        Diploma in International Airline & Travel Managment
      </div>
      <div className={classes.tag}>Anamal Institute Of Hotel Management</div>
      <div className={classes.TimePeriod}> 2013-2014 (Chennai,India)</div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>Food & Beverage Services managment</div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>Accomodation Operation Management</div>
      </div>{' '}
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Food & Beverage Production Management{' '}
        </div>
      </div>
      <div className={classes.textPrimary}>
        <div className={classes.icon}>
          <FaServicestack
            className={classes.socialIcon}
            color='var(--darkBlue)'
          />
        </div>
        <div className={classes.text}>
          Hotel Accountancy & Hygiene and Sanitation{' '}
        </div>
      </div>
    </div>
  );
  useEffect(() => {
    !url && setcontentText(contentEducation);
    if (url === 'experience') {
      setcontentText(contentExperience);
    }

    AOS.init({ duration: 1000 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  if (!contenttext) {
    return <p>Loading....</p>;
  }
  const setContextHandler = (value) => {
    setcontentText(value);
  };
  return (
    contenttext && (
      <section className={classes.Experience}>
        <h2>Experience & Education</h2>

        <div className={classes.ExperiencePrimary}>
          <div className={classes.ExperienceLinks}>
            <NavLink
              to='/'
              exact
              onClick={() => setContextHandler(contentEducation)}
              activeClassName={classes.active}
            >
              Education
            </NavLink>

            <NavLink
              exact
              to='/experience'
              onClick={() => setContextHandler(contentExperience)}
              activeClassName={classes.active}
            >
              Experience
            </NavLink>
          </div>

          {contenttext}
        </div>
      </section>
    )
  );
}

export default Experience;
