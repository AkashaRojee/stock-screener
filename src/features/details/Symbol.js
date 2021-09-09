// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HighlightCard from 'common/components/HighlightCard/HighlightCard';
import SectionTitle from 'common/components/SectionTitle/SectionTitle';
import { findObjInArr } from 'common/utils/helpers';
import { getCompanyQuote } from 'features/details/symbolsSlice';
import LoadingIndicator from 'common/components/LoadingIndicator/LoadingIndicator';
import DataRow from './DataRow';
import styles from './Symbol.module.scss';

const Symbol = () => {
  let colour = 0;

  const { symbol } = useParams();
  const { entities, loading } = useSelector((state) => state.symbols);
  const dispatch = useDispatch();

  useEffect(() => {
    if (findObjInArr(entities, 'symbol', symbol) === undefined) dispatch(getCompanyQuote(symbol));
  });

  const wantedSymbol = findObjInArr(entities, 'symbol', symbol)?.data;

  return (
    <>
      { (loading && (<LoadingIndicator />)) || (wantedSymbol && (
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
      ))}
    </>
  );
};

export default Symbol;
