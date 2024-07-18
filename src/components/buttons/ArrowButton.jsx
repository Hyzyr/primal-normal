import React from 'react';

export const ARROW_DIRECTIONS = {
  RIGHT: 'right',
  LEFT: 'left',
};
const ArrowButton = ({ direction = ARROW_DIRECTIONS.RIGHT, ...restProps }) => {
  let image =
    direction === 'right'
      ? '/images/components/arrow-right.png'
      : '/images/components/arrow-left.png';

  return (
    <button
      type="button"
      className={`home-arrow home-arrow-${direction}`}
      {...restProps}>
      <img src={image} alt={`arrow-${direction}`} />
    </button>
  );
};

export default ArrowButton;
