import React from 'react';
import classes from '../Shared/Input/Input.module.css';
import logocontact from '../Assets/Images/contact.svg';

import Button from '../Shared/Button/Button';
import 'react-toastify/dist/ReactToastify.css';
function Contactme() {
  return (
    <div className={classes.formPrimary}>
      <div className={classes.formSecondary}>
        <img src={logocontact} alt='' />

        <Button
          href='mailto:khanindianchef@gmail.com'
          style={{
            backgroundColor: 'var(--lightYellow)',
            color: 'var(--mainBlack) ',
            padding: '10px 100px',
          }}
        >
          Send Email
        </Button>
      </div>
    </div>
  );
}

export default Contactme;
