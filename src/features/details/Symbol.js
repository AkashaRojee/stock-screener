// @ts-nocheck
/* eslint-disable */

import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle';
import { getCompanyQuote } from 'features/details/symbolsSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DataRow from './DataRow';
import styles from './Symbol.module.scss';

const Symbol = () => {

  const { symbol } = useParams();
  const symbols = useSelector((state) => state.symbols);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyQuote(symbol));
  }, []);

  let wantedSymbol = symbols.find((symbolObj) => symbolObj.symbol === symbol);

  return (
  <>
    {wantedSymbol && (
      <HighlightCard
        image={symbol}
        name={wantedSymbol.data.name}
        metric={wantedSymbol.data.price}
      />
    )}

    <SectionTitle title="QUOTE BREAKDOWN" />

    <div className={styles.dataRows}>

      {wantedSymbol && Object.entries(wantedSymbol.data).map(([dataItem, dataValue]) => (
        <DataRow
          key={dataItem}
          item={dataItem}
          metric={dataValue}
        />
      ))}

    </div>
  </>
);
};

export default Symbol;
