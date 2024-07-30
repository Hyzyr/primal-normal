import React from 'react';
import { FabricJSCanvas } from 'fabricjs-react';

const BonngaMaker = React.forwardRef(({ editor }, ref) => {
  const { onReady, appendImage } = editor;

  return (
    <div className="boongamaker" ref={ref}>
      <FabricJSCanvas className="boongamaker-canvas" onReady={onReady} />
    </div>
  );
});

export default BonngaMaker;
