import React from 'react';
import PropTypes from 'prop-types';
import SplitPane from '../SplitPane/SplitPane';
import SplitPaneLayout from '../SplitPane/SplitPaneLayout';
import styles from './HighlightCard.module.scss';

const HighlightCard = ({ image, name, metric }) => (
  <SplitPane
    layout={new SplitPaneLayout('row', 'col', 'col', styles)}
    first={
      (
        <div className={styles.image}>
          <img src={`https://financialmodelingprep.com/image-stock/${image}.jpg`} alt={name} />
        </div>
      )
    }
    second={
      (
        <>
          <div className={styles.title}>{ name.toUpperCase() }</div>
          <div>
            $
            { metric }
          </div>
        </>
      )
    }
  />
);

HighlightCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  metric: PropTypes.number.isRequired,
};

export default HighlightCard;
