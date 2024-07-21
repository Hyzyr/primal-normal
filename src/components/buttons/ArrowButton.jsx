import React from 'react';

export const ARROW_DIRECTIONS = {
  RIGHT: 'right',
  LEFT: 'left',
};
const ArrowButton = ({
  direction = ARROW_DIRECTIONS.RIGHT,
  className = '',
  ...restProps
}) => {
  let image =
    direction === 'right'
      ? '/images/components/arrow-right.png'
      : '/images/components/arrow-left.png';

  return (
    <button
      type="button"
      className={`btn-arrow btn-arrow-${direction} ${className}`}
      {...restProps}>
      <img src={image} alt={`arrow-${direction}`} />
    </button>
  );
};

export default ArrowButton;
