import React from 'react';
import SplitPane from '../SplitPane/SplitPane';
import SplitPaneLayout from '../SplitPane/SplitPaneLayout';
import styles from './HighlightCard.module.scss';

const HighlightCard = () => (
  <SplitPane
    layout={new SplitPaneLayout('row', 'col', 'col', styles)}
    first={
      (
        <img src="https://financialmodelingprep.com/image-stock/AAPL.jpg" alt="AAPL" />
      )
    }
    second={
      (
        <>
          <div>AAPL</div>
          <div>$150.60</div>
        </>
      )
    }
  />
);

export default HighlightCard;
