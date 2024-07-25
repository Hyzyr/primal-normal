import React, { useState } from 'react';
import { FabricJSCanvas } from 'fabricjs-react';
import useEditor from './hooks/useEditor';

const BonngaMaker = React.forwardRef(({ editor }, ref) => {
  const { onReady, appendImage } = editor;

  return (
    <div className="boongamaker" ref={ref}>
      <FabricJSCanvas className="boongamaker-canvas" onReady={onReady} />
    </div>
  );
});

export default BonngaMaker;
