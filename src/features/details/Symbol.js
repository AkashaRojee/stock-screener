import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle';
import React from 'react';
import DataRow from './DataRow';
import styles from './Symbol.module.scss';

const Symbol = () => (
  <>
    <HighlightCard
      image="MSFT"
      name="SELECTED SYMBOL COMPANY NAME"
      metric="$150"
    />
    <SectionTitle title="QUOTE BREAKDOWN" />
    <div className={styles.dataRows}>
      <DataRow
        item="Price"
        metric="$100"
      />
      <DataRow
        item="Open"
        metric="$102.30"
      />
      <DataRow
        item="Previous close"
        metric="$109.30"
      />
      <DataRow
        item="Volume"
        metric="828190"
      />
    </div>
  </>
);

export default Symbol;
