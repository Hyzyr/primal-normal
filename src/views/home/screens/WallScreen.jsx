import React, { useEffect, useState } from "react";
import PaginationButton from "src/components/buttons/PaginationButton";

const fakeData = [
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/771796",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/24f355",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/d32776",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/f66b97",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/56a8c2",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/b0f7cc",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/54176f",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/51aa97",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/810b14",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/1ee8a4",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/66b7d2",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/197d29",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/61a65",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/f9cee5",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/fdf73e",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/9c184f",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/1fe46f",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/56acb2",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/8985dc",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/5e12c6",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/45601a",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/e924e6",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/8f209a",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/5e3a73",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/474645",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/c984bf",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/392537",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/602b9e",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/372c93",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/a7c272",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/c70a4d",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/501fe1",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/35185e",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/c96cad",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/4d564d",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/ea51da",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/4f5b8d",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/1e71a2",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/3a0b95",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/659403",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/ca50ac",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/6ad437",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/29fe9f",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/c4084a",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/e9b68",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/b4412f",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/68e0a8",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/2cd88b",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/9e59da",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/8e973b",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/121fa4",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/6efc5f",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/aa8f2e",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/5e04a4",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/f9f067",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/95acce",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/cde4c1",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/a46a91",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/323599",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/e403d1",
  },
  {
    text: "PLACEHOLDER",
    url: "https://via.placeholder.com/600/65ad4f",
  },
];

const WallScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const pages = [];
  for (let i = 1; i <= Math.ceil(fakeData.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const Data = new Array();

  for (let i = 0; i <= itemsPerPage; i++) {
    Data.push([]);
    for (let j = (i - 1) * itemsPerPage; j < i * itemsPerPage; j++) {
      Data[i][j] = fakeData[j];
    }
  }
  return (
    <div className="wallscreen screen">
      <div className="wallscreen__container">
        <div className="wallscreen__container-row">
          {Data[currentPage].map((item, i) => {
            if (item != undefined) {
              return (
                <WallItem
                  key={i}
                  text={item.text}
                  image={item.url}
                  alt={item.url}
                />
              );
            }
          })}
        </div>
        <div className="wallscreen__container-pagination">
          {pages.map((item, i) => (
            <PaginationButton
              text={i + 1}
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const WallItem = ({ text, image, alt }) => {
  return (
    <div className="wallscreen__frame">
      <div className="wallscreen__frame-image">
        <img src={image} alt={alt} />
      </div>
      <div className="wallscreen__frame-text">{text}</div>
      <div className="wallscreen__frame-bg">
        <img src="/images/wall/frame-4.png" alt="app-screen-frame" />
      </div>
    </div>
  );
};

export default WallScreen;
