// @ts-nocheck
/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SymbolCard.module.scss';
import fallbackImage from 'assets/image-not-found.png';

const SymbolCard = ({ image, name, metric }) => {

  return (
    <Link to={`/symbols/${image}`} className={styles.symbolCard}>
      <div className={styles.image}>
        <img
          src={`https://financialmodelingprep.com/image-stock/${image}.jpg`}
          alt={name}
          onError={(e) => e.target.src=fallbackImage}
        />
      </div>
      <div>{ name }</div>
      <div>{ metric }</div>
    </Link>
  );
};

export default SymbolCard;
