/* eslint-disable */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import styles from './Header.module.scss';

const Header = () => {
  const onHomePage = useLocation().pathname === '/';

  return (
    <div className={styles.header}>
      <Link to="/" className={onHomePage ? styles.hide : styles.show}><ArrowBackIosIcon /></Link>
      <span>{onHomePage ? 'highest value' : 'symbol value'}</span>
      <MicIcon />
      <SettingsIcon />
    </div>
  );
};

export default Header;
