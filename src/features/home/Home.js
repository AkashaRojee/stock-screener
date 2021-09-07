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
    <SymbolCard
      image="CMCSA"
      name="Comcast Corporation"
      metric="$16"
    />
    <SymbolCard
      image="INTC"
      name="Intel Corporation"
      metric="$53"
    />
    <SymbolCard
      image="AAPL"
      name="Apple Corporation"
      metric="$1000"
    />
  </>
);

export default Home;
