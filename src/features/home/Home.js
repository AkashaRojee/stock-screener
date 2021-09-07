import React from 'react';
import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle';
import SymbolCard from './SymbolCard';
import styles from './Home.module.scss';

const Home = () => (
  <>
    <HighlightCard
      image="AAPL"
      name="HIGHEST-PRICED COMPANY NAME"
      metric="$1000"
    />
    <SectionTitle title="STATS BY COMPANY" />
    <div className={styles.symbolCards}>
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
        name="Apple"
        metric="$1000"
      />
      <SymbolCard
        image="MSFT"
        name="Microsoft"
        metric="$89"
      />
    </div>
  </>
);

export default Home;
