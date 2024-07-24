import React, { useEffect, useState } from 'react';
import { FabricJSCanvas } from 'fabricjs-react';
import useEditor from './hooks/useEditor';

const BonngaMaker = () => {
  const wrapperRef = React.useRef();

  const { editor, onReady } = useEditor({ wrapperRef });

  return (
    <div className="boongamaker" ref={wrapperRef}>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
};

export default BonngaMaker;
