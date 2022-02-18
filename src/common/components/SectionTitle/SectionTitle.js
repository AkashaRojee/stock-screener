import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.scss';
import Filter from './Filter';

const SectionTitle = ({ title, filter }) => (
  <div className={styles.sectionTitle}>
    { title }

    {filter && (<Filter />)}

  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.bool,
};

SectionTitle.defaultProps = {
  filter: true,
};

export default SectionTitle;
