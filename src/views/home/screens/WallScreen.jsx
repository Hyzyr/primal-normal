import React, { useEffect, useState } from 'react';
import PaginationButton from 'src/components/buttons/PaginationButton';
import usePager from 'src/hooks/usePager';

const fakeData = [
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/92c952',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/771796',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/24f355',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/d32776',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/f66b97',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/56a8c2',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/b0f7cc',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/54176f',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/51aa97',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/810b14',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/1ee8a4',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/66b7d2',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/197d29',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/61a65',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/f9cee5',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/fdf73e',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/9c184f',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/1fe46f',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/56acb2',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/8985dc',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/5e12c6',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/45601a',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/e924e6',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/8f209a',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/5e3a73',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/474645',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/c984bf',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/392537',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/602b9e',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/372c93',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/a7c272',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/c70a4d',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/501fe1',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/35185e',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/c96cad',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/4d564d',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/ea51da',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/4f5b8d',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/1e71a2',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/3a0b95',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/659403',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/ca50ac',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/6ad437',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/29fe9f',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/c4084a',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/e9b68',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/b4412f',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/68e0a8',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/2cd88b',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/9e59da',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/8e973b',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/121fa4',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/6efc5f',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/aa8f2e',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/5e04a4',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/f9f067',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/95acce',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/cde4c1',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/a46a91',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/323599',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/e403d1',
  },
  {
    text: 'PLACEHOLDER',
    url: 'https://via.placeholder.com/300/65ad4f',
  },
];

const WallScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const slides = usePager({ items: fakeData, itemsPerRow: 8 });

  return (
    <div className="wallscreen screen">
      <div className="wallscreen__container">
        <div className="wallscreen__container-row">
          {slides[currentPage].map((item, i) => (
            <WallItem
              key={i}
              text={item.text}
              image={item.url}
              alt={item.url}
            />
          ))}
        </div>
        <div className="wallscreen__container-pagination">
          {slides.map((_, i) => (
            <PaginationButton
              text={i + 1}
              key={i}
              className={`wallscreen__button ${
                currentPage === i ? 'active' : ''
              }`}
              onClick={() => setCurrentPage(i)}
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
