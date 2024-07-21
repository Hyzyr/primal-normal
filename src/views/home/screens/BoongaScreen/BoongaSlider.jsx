import React from 'react';
import ArrowButton, {
  ARROW_DIRECTIONS,
} from 'src/components/buttons/ArrowButton';
import usePager from 'src/hooks/usePager';


const BoongaSlider = ({ title, items }) => {
  const slides = usePager({ items, itemsPerRow: 5 });

  return (
    <div className="boongascreen__container-group">
      <div className="boongascreen__container-text">{title}</div>
      <div className="boongascreen__slider">
        <ArrowButton
          direction={ARROW_DIRECTIONS.LEFT}
          className="boongascreen__slider-arrow"
        />
        <div className="boongascreen__slider-track">
          {slides.map((arr, index) => (
            <div className="boongascreen__slider-row" key={`row-${index}`}>
              {arr.map((item, i) => (
                <div className="boongascreen__slider-item" key={`item-${i}`}>
                  <img src={item.img} alt={item.alt} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <ArrowButton
          direction={ARROW_DIRECTIONS.RIGHT}
          className="boongascreen__slider-arrow"
        />
      </div>
    </div>
  );
};

export default BoongaSlider;
