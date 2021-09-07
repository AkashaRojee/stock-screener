import React from 'react';
import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle';
import SymbolCard from './SymbolCard';

const Home = () => (
  <>
    <HighlightCard
      image="AAPL"
      name="HIGHEST-PRICED COMPANY NAME"
      metric="$1000"
    />
    <SectionTitle title="STATS BY COMPANY" />
    <SymbolCard />
  </>
);

export default Home;
