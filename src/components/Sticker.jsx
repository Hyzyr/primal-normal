import React from 'react';
import { ResizableBox } from 'react-resizable';
import './sticker.css'; // Import custom CSS

const Sticker = ({ sticker, onMove, onResize, onRotate }) => {
  return (
    <div
      className="sticker"
      style={{
        left: sticker.x,
        top: sticker.y,
        transform: `rotate(${sticker.rotation}deg)`,
      }}
      draggable
      onDrag={(e) => onMove(sticker.id, e.clientX, e.clientY)}>
      <ResizableBox
        width={sticker.width}
        height={sticker.height}
        minConstraints={[50, 50]}
        onResize={(e, data) =>
          onResize(sticker.id, data.size.width, data.size.height)
        }>
        <div className="sticker-content">
          {/* Sticker content such as image or text can go here */}
          <div className="rotate-control">
            <input
              type="range"
              min="0"
              max="360"
              value={sticker.rotation}
              onChange={(e) => onRotate(sticker.id, e.target.value)}
            />
          </div>
        </div>
      </ResizableBox>
    </div>
  );
};

export default Sticker;
