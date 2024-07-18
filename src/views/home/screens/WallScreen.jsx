import React from "react";
import PaginationButton from "src/components/buttons/PaginationButton";

const data = [
  {
    text: "PLACEHOLDER",
  },
  {
    text: "PLACEHOLDER",
  },
  {
    text: "PLACEHOLDER",
  },
  {
    text: "PLACEHOLDER",
  },
  {
    text: "PLACEHOLDER",
  },
  {
    text: "PLACEHOLDER",
  },
  {
    text: "PLACEHOLDER",
  },
  {
    text: "PLACEHOLDER",
  },
];

const WallScreen = () => {
  return (
    <div className="wallscreen screen">
      <div className="wallscreen__container">
        <div className="wallscreen__container-row">
          {data.map((item, i) => (
            <WallItem key={i} text={item.text} />
          ))}
        </div>
        <div className="wallscreen__container-pagination">
          <PaginationButton text={"1"} />
          <PaginationButton text={"2"} />
          <PaginationButton text={"3"} />
          <PaginationButton text={"4"} />
          <PaginationButton text={"5"} />
          <PaginationButton text={"6"} />
          <PaginationButton text={"7"} />
          <PaginationButton text={"8"} />
          <PaginationButton text={"9"} />
          <PaginationButton text={"10"} />
          <PaginationButton text={"11"} />
          <PaginationButton text={"12"} />
          <PaginationButton text={"13"} />
        </div>
      </div>
    </div>
  );
};

const WallItem = ({ text }) => {
  return (
    <div className="wallscreen__frame">
      <div className="wallscreen__frame-image">
        <img src="/images/placeholder.jpg" alt="placeholder" />
      </div>
      <div className="wallscreen__frame-text">{text}</div>
      <div className="wallscreen__frame-bg">
        <img src="/images/wall/frame-4.png" alt="app-screen-frame" />
      </div>
    </div>
  );
};

export default WallScreen;
