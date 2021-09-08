/* eslint-disable */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import styles from './Header.module.scss';

const Header = () => {
  const onDetailsPage = useLocation().pathname === '/' ? false : true;

  return (
    <div className={styles.header}>
      <Link to="/" className={onDetailsPage ? styles.show : styles.hide}><ArrowBackIosIcon /></Link>
      <span>{onDetailsPage ? 'symbol value' : 'highest value'}</span>
      <MicIcon />
      <SettingsIcon />
    </div>
  );
};

export default Header;
