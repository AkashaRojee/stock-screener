import React from 'react';
import PropTypes from 'prop-types';
import styles from './DataRow.module.scss';

const DataRow = ({ colourClass, item, metric }) => {
  const backgroundColour = colourClass ? styles.colour1 : styles.colour2;

  return (
    <div className={`${styles.dataRow} ${backgroundColour}`} aria-label="quote data">
      <span className={styles.title} aria-label="quote data item">{ item }</span>
      <span>{ metric }</span>
    </div>
  );
};

DataRow.propTypes = {
  colourClass: PropTypes.bool.isRequired,
  item: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
};

export default DataRow;
