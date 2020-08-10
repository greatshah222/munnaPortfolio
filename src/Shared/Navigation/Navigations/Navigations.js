import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import classes from './Navigations.module.css';
import Navlinks from '../Navlinks/Navlinks';
import logo from '../../../Assets/Gallery/munnaLogo.png';
import logoSideBar from '../../../Assets/Gallery/munnalogomobile.png';

function Navigations() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const toggleSideBarHandler = () => {
    setOpenSideBar((openSideBar) => !openSideBar);
  };

  return (
    <>
      <SideBar show={openSideBar}>
        <div className={classes.headerMobileNav}>
          <div className={classes.logoContainerSideBar}>
            <img src={logoSideBar} alt='logo' className={classes.logoSideBar} />
          </div>
          <button
            className={classes.closeSideBarButton}
            onClick={toggleSideBarHandler}
          >
            &times;
          </button>
        </div>
        <nav className={classes.MobileNav}>
          <Navlinks closeSideBar={toggleSideBarHandler} />
        </nav>
      </SideBar>
      <>
        <div className={`${classes.mainContaniner}`}>
          <div className={classes.navContainer}>
            <div className={classes.logoContainer}>
              <img src={logo} alt='logo' className={classes.logo} />
            </div>
            <button
              onClick={toggleSideBarHandler}
              className={classes.HamBurgerMenu}
            >
              <span />
              <span />
              <span />
            </button>
            <nav className={classes.DesktopNav}>
              <Navlinks closeSideBar={toggleSideBarHandler} />
            </nav>
          </div>
        </div>
      </>
    </>
  );
}

export default Navigations;
