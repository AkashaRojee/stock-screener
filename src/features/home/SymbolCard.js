/* eslint-disable react/prop-types */

import React from 'react';
import styles from './SymbolCard.module.scss';

const SymbolCard = ({ image, name, metric }) => (
  <div className={styles.symbolCard}>
    <div className={styles.image}>
      <img src={`https://financialmodelingprep.com/image-stock/${image}.jpg`} alt={name} />
    </div>
    <div>{ name }</div>
    <div>{ metric }</div>
  </div>
);

export default SymbolCard;
