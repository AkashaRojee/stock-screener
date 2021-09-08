// @ts-nocheck
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
    if (markets.length === 0) dispatch(getSymbolsList());
  }, []);

  let symbols, sortedSymbols;
  if (markets.length != 0) {
    symbols = markets.find((marketObj) => marketObj.market === 'New York Stock Exchange').symbols;
    sortedSymbols = [...symbols];
    sortedSymbols.sort((a, b) => (a.price < b.price) ? 1 : -1);
    symbols = sortedSymbols;
  }

  return (
    <>
      <HighlightCard
        image="AAPL"
        name="AVERAGE PRICE"
        metric="$1000"
      />
      
      <SectionTitle title="STATS BY COMPANY" />
        
      <div className={styles.symbolCards}>

        {symbols && symbols.map(({symbol, name, price}) => (
          
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
