import React from 'react';
import { FabricJSCanvas } from 'fabricjs-react';

const BoongaMaker = React.forwardRef(({ editor }, ref) => {
  const { onReady } = editor;

  return (
    <div className="boongamaker" ref={ref}>
      <FabricJSCanvas className="boongamaker-canvas" onReady={onReady} />
    </div>
  );
});
 
export default BoongaMaker;
