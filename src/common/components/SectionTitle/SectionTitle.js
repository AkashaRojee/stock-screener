/* eslint-disable react/prop-types */

import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title }) => (
  <div className={styles.sectionTitle}>
    { title }
  </div>
);

export default SectionTitle;
