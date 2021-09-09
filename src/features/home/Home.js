// @ts-nocheck
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle/SectionTitle';
import LoadingIndicator from 'common/components/LoadingIndicator/LoadingIndicator';
import { findObjInArr, sortObjArrByKey, selectColour } from 'common/utils/helpers';
import { getSymbolsList } from './marketSlice';
import SymbolCard from './SymbolCard';
import styles from './Home.module.scss';

const Home = () => {
  let counter = 1;
  let colour = 0;
  let symbols;

  const { entities, loading } = useSelector((state) => state.market);
  const dispatch = useDispatch();

  useEffect(() => {
    if (entities.length === 0) dispatch(getSymbolsList());
  }, []);

  if (entities.length !== 0) {
    ({ symbols } = findObjInArr(entities, 'market', 'New York Stock Exchange'));
    symbols = sortObjArrByKey(symbols, 'price');
  }

  return (
    <>
      { (loading && (<LoadingIndicator />)) || (

        <>
          <HighlightCard
            image={symbols[0].symbol}
            name={symbols[0].name}
            metric={symbols[0].price}
          />

          <SectionTitle title="STATS BY COMPANY" />

          <div className={styles.symbolCards}>

            {symbols.map(({ symbol, name, price }, index) => {
              [counter, colour] = selectColour(index, counter, colour);

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
