import React from 'react';
import styles from './DataRow.module.scss';

/* eslint-disable */
const DataRow = ({ colourClass, item, metric }) => {
  console.log(colourClass);
  const backgroundColour = colourClass ? styles.colour1 : styles.colour2;

  return (
    <div className={`${styles.dataRow} ${backgroundColour}`}>
      <span className={styles.title}>{ item }</span>
      <span>{ metric }</span>
    </div>
  );
};

export default DataRow;
