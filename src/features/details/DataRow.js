import React from 'react';
import styles from './DataRow.module.scss';

/* eslint-disable react/prop-types */
const DataRow = ({ item, metric }) => (
  <div className={styles.dataRow}>
    <span>{ item }</span>
    <span>{ metric }</span>
  </div>
);

export default DataRow;
