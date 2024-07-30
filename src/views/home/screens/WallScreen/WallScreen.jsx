import React, { useEffect, useState } from "react";
import PaginationButton from "src/components/buttons/PaginationButton";
import usePager from "src/hooks/usePager";
import { wallImages } from "./constants";
import WallPopUp from "./WallPopUp";

const WallScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const slides = usePager({ items: wallImages, itemsPerRow: 8 });
  const [popUp, setPopUp] = useState(false);
  const [imagePath, setImagePath] = useState("");

  const popUpControl = (image) => {
    setImagePath(image);
    setPopUp(!popUp);
  };

  return (
    <div className="wallscreen screen">
      <div className="wallscreen__container">
        <div className="wallscreen__container-row">
          {slides[currentPage].map((item, i) => (
            <WallItem
              key={i}
              text={item.title}
              image={item.fileName}
              alt={item.title}
              onClick={() => {
                popUpControl(item.fileName);
              }}
            />
          ))}
        </div>
        <div className="wallscreen__container-pagination">
          {slides.map((_, i) => (
            <PaginationButton
              text={i + 1}
              key={i}
              className={`wallscreen__button ${
                currentPage === i ? "active" : ""
              }`}
              onClick={() => {
                setCurrentPage(i), setPopUp(false);
              }}
            />
          ))}
        </div>
      </div>
      <WallPopUp popUp={popUp} setPopUp={() => setPopUp()} image={imagePath} />
    </div>
  );
};
const WallItem = ({ text, image, alt, ...props }) => {
  return (
    <div className="wallscreen__frame" {...props}>
      <div className="wallscreen__frame-image">
        <img src={image} alt={alt} />
      </div>
      <div className="wallscreen__frame-text">{text}</div>
      <div className="wallscreen__frame-bg">
        <img src="/images/wall/frame-4.png" loading="lazy" alt="app-screen-frame" />
      </div>
    </div>
  );
};

export default WallScreen;
