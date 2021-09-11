import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.scss';
import Filter from './Filter';

const SectionTitle = ({ title }) => (
  <div className={styles.sectionTitle}>
    { title }

    <Filter />

  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
