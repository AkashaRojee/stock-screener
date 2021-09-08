// @ts-nocheck
/* eslint-disable */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle/SectionTitle';
import { getSymbolsList } from './marketSlice';
import SymbolCard from './SymbolCard';
import styles from './Home.module.scss';

const Home = () => {
  let counter = 1;
  let colour = 0;
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
      {symbols && (
        <>

          <HighlightCard
            image={symbols[0].symbol}
            name={symbols[0].name}
            metric={symbols[0].price}
          />
        
          <SectionTitle title="STATS BY COMPANY" />

          <div className={styles.symbolCards}>

            {symbols.map(({symbol, name, price}, index) => {

              if (index === 0) {
                colour = 1;
              } else {
                if (counter === 1) {
                  colour = (colour === 1) ? 2 : 1;
                  counter = counter + 1;
                } else {
                  counter = 1;
                }
              }

              return (
                <SymbolCard
                  colourClass={colour}
                  key={symbol}
                  image={symbol}
                  name={name}
                  metric={price}
                />
              );

              

            })}

          </div>

        </>
      )}
    </>
  );
};

export default Home;
