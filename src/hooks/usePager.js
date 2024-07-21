import React from 'react';

const usePager = ({ items, itemsPerRow }) => {
  const pagesArr = [];
  let n = Math.ceil(items.length / itemsPerRow);

  for (let index = 0; index < n; index++) {
    let startFrom = itemsPerRow * index;
    let endAt = startFrom + itemsPerRow;
    pagesArr.push(items.slice(startFrom, endAt));
  }
  
  return pagesArr;
};

export default usePager;
