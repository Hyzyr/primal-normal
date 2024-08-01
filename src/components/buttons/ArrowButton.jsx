import React from 'react';
import useButtonSound from 'src/hooks/useButtonSound';

export const ARROW_DIRECTIONS = {
  RIGHT: 'right',
  LEFT: 'left',
};
const ArrowButton = ({
  direction = ARROW_DIRECTIONS.RIGHT,
  className = '',
  onClick,
  ...restProps
}) => {
  const playSound = useButtonSound();
  let image =
    direction === 'right'
      ? '/images/components/arrow-right.png'
      : '/images/components/arrow-left.png';

  const handleClick = () => {
    console.log('handleClick')
    playSound();
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      className={`btn-arrow btn-arrow-${direction} ${className}`}
      onClick={handleClick}
      {...restProps}>
      <img src={image} alt={`arrow-${direction}`} />
    </button>
  );
};

export default ArrowButton;
