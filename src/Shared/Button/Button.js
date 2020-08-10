import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

function Button({
  btnType,
  to,
  exact,
  children,
  disabled,
  type,
  onClick,
  style,
  download,
  href,
  target,
  rel,
}) {
  if (to) {
    return (
      <Link
        to={to}
        exact={exact}
        className={`${classes.Button} ${classes[btnType]}`}
        style={style}
      >
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        className={`${classes.Button} ${classes[btnType]}`}
        style={style}
        href={href}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`${classes.Button} ${classes[btnType]}`}
      disabled={disabled}
      type={type}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
