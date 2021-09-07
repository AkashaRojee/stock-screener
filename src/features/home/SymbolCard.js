/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SymbolCard.module.scss';

const SymbolCard = ({ image, name, metric }) => (
  <Link to="/details" className={styles.symbolCard}>
    <div className={styles.image}>
      <img src={`https://financialmodelingprep.com/image-stock/${image}.jpg`} alt={name} />
    </div>
    <div>{ name }</div>
    <div>{ metric }</div>
  </Link>
);

export default SymbolCard;
