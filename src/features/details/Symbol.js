import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle';
import React from 'react';
import DataRow from './DataRow';

const Symbol = () => (
  <>
    <HighlightCard
      image="MSFT"
      name="SELECTED SYMBOL COMPANY NAME"
      metric="$150"
    />
    <SectionTitle title="QUOTE BREAKDOWN" />
    <DataRow
      item="Price"
      metric="100"
    />
  </>
);

export default Symbol;
