// @ts-nocheck

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMarket } from 'features/home/marketSlice';

const Filter = () => {
  const { entities, selectedMarket } = useSelector((state) => state.market);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log('change');
    if (selectedMarket !== e.target.value) dispatch(selectMarket(e.target.value));
  };

  return (
    <>
      <select onChange={(e) => handleChange(e)}>

        {entities.map((entity) => (
          <option
            value={entity.market}
            key={entity.market}
          >
            {entity.market}
          </option>
        ))}

      </select>
    </>
  );
};

export default Filter;
