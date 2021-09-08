import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title }) => (
  <div className={styles.sectionTitle}>
    { title }
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
