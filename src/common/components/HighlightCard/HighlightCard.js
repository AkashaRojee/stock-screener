/* eslint-disable react/prop-types */

import React from 'react';
import SplitPane from '../SplitPane/SplitPane';
import SplitPaneLayout from '../SplitPane/SplitPaneLayout';
import styles from './HighlightCard.module.scss';

const HighlightCard = ({ image, name, metric }) => (
  <SplitPane
    layout={new SplitPaneLayout('row', 'col', 'col', styles)}
    first={
      (
        <img src={`https://financialmodelingprep.com/image-stock/${image}.jpg`} alt={name} />
      )
    }
    second={
      (
        <>
          <div>{ name }</div>
          <div>{ metric }</div>
        </>
      )
    }
  />
);

export default HighlightCard;
