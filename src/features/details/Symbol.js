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

const findSymbol = (symbols, searchValue) => {
  return symbols.find((symbolObj) => symbolObj.symbol === searchValue);
}

const Symbol = () => {

  const { symbol } = useParams();
  const storedSymbols = useSelector((state) => state.symbols);
  const dispatch = useDispatch();

  useEffect(() => {
    findSymbol(storedSymbols, symbol) || dispatch(getCompanyQuote(symbol));
  }, []);

  const wantedSymbol = findSymbol(storedSymbols, symbol)?.data;

  return (
  <>
    {wantedSymbol && (
      <HighlightCard
        image={symbol}
        name={wantedSymbol.name}
        metric={wantedSymbol.price}
      />
    )}

    <SectionTitle title="QUOTE BREAKDOWN" />

    <div className={styles.dataRows}>

      {wantedSymbol && Object.entries(wantedSymbol).map(([dataItem, dataValue]) => (
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
