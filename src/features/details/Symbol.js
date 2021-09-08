// @ts-nocheck

import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle/SectionTitle';
import { getCompanyQuote } from 'features/details/symbolsSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DataRow from './DataRow';
import styles from './Symbol.module.scss';

const findSymbol = (symbols, searchValue) => symbols.find((obj) => obj.symbol === searchValue);

const Symbol = () => {
  let colour = 0;
  const { symbol } = useParams();
  const storedSymbols = useSelector((state) => state.symbols);
  const dispatch = useDispatch();

  useEffect(() => {
    if (findSymbol(storedSymbols, symbol) === undefined) dispatch(getCompanyQuote(symbol));
  }, []);

  const wantedSymbol = findSymbol(storedSymbols, symbol)?.data;

  return (
    <>
      {wantedSymbol && (
      <>

        <HighlightCard
          image={symbol}
          name={wantedSymbol.name}
          metric={wantedSymbol.price}
        />

        <SectionTitle title="QUOTE BREAKDOWN" />

        <div className={styles.dataRows}>

          {Object.entries(wantedSymbol).map(([dataItem, dataValue]) => {
            colour = !colour;
            return (
              <DataRow
                colourClass={colour}
                key={dataItem}
                item={dataItem}
                metric={dataValue.toString()}
              />
            );
          })}

        </div>

      </>
      )}
    </>
  );
};

export default Symbol;
