// @ts-nocheck
/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './SymbolCard.module.scss';
import fallbackImage from 'assets/image-not-found.png';

const SymbolCard = ({ colourClass, image, name, metric }) => {
  const backgroundColour = colourClass === 1 ? styles.colour1 : styles.colour2;

  return (
    <Link to={`/symbols/${image}`} className={`${styles.symbolCard} ${backgroundColour}`}>
      <ArrowForwardIcon />
      <div className={styles.image}>
        <img
          src={`https://financialmodelingprep.com/image-stock/${image}.jpg`}
          alt={name}
          onError={(e) => e.target.src=fallbackImage}
        />
      </div>
      <div className={styles.title}>{ name.toUpperCase() }</div>
      <div className={styles.subtitle}>${ metric }</div>
    </Link>
  );
};

export default SymbolCard;
