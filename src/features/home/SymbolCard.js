// @ts-nocheck

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './SymbolCard.module.scss';

const SymbolCard = ({
  colourClass, image, name, metric,
}) => {
  const backgroundColour = colourClass === 1 ? styles.colour1 : styles.colour2;

  return (
    <Link to={`/symbols/${image}`} className={`${styles.symbolCard} ${backgroundColour}`}>

      <ArrowForwardIcon />

      <div className={styles.image}>
        <img
          src={`https://financialmodelingprep.com/image-stock/${image}.jpg`}
          alt={name}
        />
      </div>

      <div className={styles.title}>{ name.toUpperCase() }</div>

      <div className={styles.subtitle}>
        $
        { metric }
      </div>

    </Link>
  );
};

SymbolCard.propTypes = {
  colourClass: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  metric: PropTypes.number.isRequired,
};

export default SymbolCard;
