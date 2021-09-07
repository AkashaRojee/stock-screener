/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle';
import { getSymbolsList } from './marketSlice';
import SymbolCard from './SymbolCard';
import styles from './Home.module.scss';

const Home = () => {
  const markets = useSelector((state) => state.market);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(markets).length === 0) dispatch(getSymbolsList());
  }, []);

  const symbols = markets['New York Stock Exchange'];

  return (
    <>
      <HighlightCard
        image="AAPL"
        name="HIGHEST-PRICED COMPANY NAME"
        metric="$1000"
      />
      
      <SectionTitle title="STATS BY COMPANY" />
        
      <div className={styles.symbolCards}>

        {symbols && Object.entries(symbols).map(([symbol, { name, price }]) => (
          
          <SymbolCard
            key={symbol}
            image={symbol}
            name={name}
            metric={price}
          />

        ))}

      </div>
    </>
  );
};

export default Home;
