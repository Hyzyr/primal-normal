import React from "react";
import PaginationButton from "src/components/buttons/PaginationButton";

const WallScreen = () => {
  return (
    <div className="wallscreen screen">
      <div className="wallscreen__container">
        <div className="wallscreen__container-row">
          <div className="wallscreen__frame">
            <div className="wallscreen__frame-text">
              PLACEHOLDER
            </div>
            <div className="wallscreen__frame-bg">
              <img src="/images/wall/frame-1.png" alt="app-screen-frame" />
            </div>
          </div>
          <div className="wallscreen__frame">
          <div className="wallscreen__frame-text">
              PLACEHOLDER
            </div>
            <div className="wallscreen__frame-bg">
              <img src="/images/wall/frame-2.png" alt="app-screen-frame" />
            </div>
          </div>
          <div className="wallscreen__frame">
          <div className="wallscreen__frame-text">
              PLACEHOLDER
            </div>
            <div className="wallscreen__frame-bg">
              <img src="/images/wall/frame-3.png" alt="app-screen-frame" />
            </div>
          </div>
          <div className="wallscreen__frame">
          <div className="wallscreen__frame-text">
              PLACEHOLDER
            </div>
            <div className="wallscreen__frame-bg">
              <img src="/images/wall/frame-4.png" alt="app-screen-frame" />
            </div>
          </div>
          <div className="wallscreen__frame">
            <div className="wallscreen__frame-text">
              PLACEHOLDER
            </div>
            <div className="wallscreen__frame-bg">
              <img src="/images/wall/frame-1.png" alt="app-screen-frame" />
            </div>
          </div>
          <div className="wallscreen__frame">
          <div className="wallscreen__frame-text">
              PLACEHOLDER
            </div>
            <div className="wallscreen__frame-bg">
              <img src="/images/wall/frame-2.png" alt="app-screen-frame" />
            </div>
          </div>
          <div className="wallscreen__frame">
          <div className="wallscreen__frame-text">
              PLACEHOLDER
            </div>
            <div className="wallscreen__frame-bg">
              <img src="/images/wall/frame-3.png" alt="app-screen-frame" />
            </div>
          </div>
          <div className="wallscreen__frame">
          <div className="wallscreen__frame-text">
              PLACEHOLDER
            </div>
            <div className="wallscreen__frame-bg">
              <img src="/images/wall/frame-4.png" alt="app-screen-frame" />
            </div>
          </div>
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

export default WallScreen;
