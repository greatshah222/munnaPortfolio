import React from 'react';
import ReactDOM from 'react-dom';

import { CSSTransition } from 'react-transition-group';
import classes from './SideBar.module.css';

function SideBar(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={500}
      classNames={classes.SlideInLeft}
      mountOnEnter
      unmountOnExit
    >
      <aside className={classes.SideBar}>{props.children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('sideDrawer-Hook')
  );
}

export default SideBar;
