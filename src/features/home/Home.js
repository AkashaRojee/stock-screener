import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle';
import { getSymbolsList } from './marketSlice';
import SymbolCard from './SymbolCard';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSymbolsList());
  }, []);

  return (
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
};

export default Home;
