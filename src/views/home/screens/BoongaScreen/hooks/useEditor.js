import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { useFabricJSEditor } from 'fabricjs-react';
// import { FabricImage } from 'fabric';

const useEditor = ({ wrapperRef, imageFile }) => {
  const { editor, onReady } = useFabricJSEditor();
  const history = [];
  const [color, setColor] = useState('#35363a');
  const [cropImage, setCropImage] = useState(true);
  const link = React.useRef(null);

  const getWrapperSize = () => {
    if (!wrapperRef.current) return null;
    return {
      width: wrapperRef.current.clientWidth,
      height: wrapperRef.current.clientHeight,
    };
  };

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    console.log('add listeners');
    if (cropImage) {
      editor.canvas.__eventListeners = {};
      return;
    }

    if (!editor.canvas.__eventListeners['mouse:wheel']) {
      console.log('mouse:wheel');
      editor.canvas.on('mouse:wheel', function (opt) {
        var delta = opt.e.deltaY;
        var zoom = editor.canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        editor.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });
    }

    if (!editor.canvas.__eventListeners['mouse:down']) {
      editor.canvas.on('mouse:down', function (opt) {
        var evt = opt.e;
        if (evt.ctrlKey === true) {
          this.isDragging = true;
          this.selection = false;
          this.lastPosX = evt.clientX;
          this.lastPosY = evt.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners['mouse:move']) {
      editor.canvas.on('mouse:move', function (opt) {
        if (this.isDragging) {
          var e = opt.e;
          var vpt = this.viewportTransform;
          vpt[4] += e.clientX - this.lastPosX;
          vpt[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners['mouse:up']) {
      editor.canvas.on('mouse:up', function (opt) {
        // on mouse up we want to recalculate new interaction
        // for all objects, so we call setViewportTransform
        this.setViewportTransform(this.viewportTransform);
        this.isDragging = false;
        this.selection = true;
      });
    }

    editor.canvas.renderAll();
  }, [editor]);

  // const addBackground = () => {
  //   if (!editor || !fabric) return;

  //   fabric.Image.fromURL('https://via.placeholder.com/800x600', (image) => {
  //     editor.canvas.setBackgroundImage(
  //       image,
  //       editor.canvas.renderAll.bind(editor.canvas)
  //     );
  //   });
  // };

  useEffect(() => {
    if (!editor || !fabric) return;
    const wrapperSize = getWrapperSize();
    let wrapperWidth = wrapperSize.width;
    let wrapperHeight = wrapperSize.height;
    console.log({
      wrapperWidth,
      wrapperHeight,
    });
    editor.canvas.setWidth(wrapperWidth);
    editor.canvas.setHeight(wrapperHeight);
    // addBackground();
    // editor.canvas.renderAll();
  }, [editor, fabric]);

  useEffect(() => {
    if (!editor || !fabric || !imageFile) return;

    if (imageFile) {
      const reader = new FileReader();
      const wrapperSize = getWrapperSize();

      reader.onload = (e) => {
        const imgElement = new Image();
        imgElement.src = e.target.result;
        imgElement.onload = () => {
          console.log('img loaded');
          const img = new fabric.Image(imgElement, {
            scaleX: wrapperSize.width / imgElement.width,
            scaleY: wrapperSize.height / imgElement.height,
          });
          editor.canvas.setBackgroundImage(
            img,
            editor.canvas.renderAll.bind(editor.canvas)
          );
        };
      };
      reader.readAsDataURL(imageFile);
      editor.canvas.renderAll();
    }
  }, [imageFile]);

  const toggleSize = () => {
    editor.canvas.freeDrawingBrush.width === 12
      ? (editor.canvas.freeDrawingBrush.width = 5)
      : (editor.canvas.freeDrawingBrush.width = 12);
  };

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.freeDrawingBrush.color = color;
    editor.setStrokeColor(color);
  }, [color]);

  const toggleDraw = () => {
    editor.canvas.isDrawingMode = !editor.canvas.isDrawingMode;
  };
  const undo = () => {
    if (editor.canvas._objects.length > 0) {
      history.push(editor.canvas._objects.pop());
    }
    editor.canvas.renderAll();
  };
  const redo = () => {
    if (history.length > 0) {
      editor.canvas.add(history.pop());
    }
  };

  const clear = () => {
    editor.canvas._objects.splice(0, editor.canvas._objects.length);
    history.splice(0, history.length);
    editor.canvas.renderAll();
  };

  const removeSelectedObject = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };

  const onAddCircle = () => {
    editor.addCircle();
    editor.addLine();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };
  const appendText = (text) => {
    editor.addText(text);
  };

  const getLink = () => {
    if (!link.current) {
      link.current = document.createElement('a');
    }
    return link.current;
  };
  const exportSVG = () => {
    const svg = editor.canvas.toSVG();
    console.info(svg);
  };
  const exportImage = () => {
    editor.canvas.discardActiveObject();
    setTimeout(() => {
      const mergedImage = editor.canvas.toDataURL({
        format: 'png',
        quality: 0.85,
      });
      let link = getLink();
      link.href = mergedImage;
      link.download = `primal-nomad-boongamaker-${Date.now()}.png`;
      link.click();
    }, 100);
  };

  const appendImage = (url) => {
    const wrapperSize = getWrapperSize();
    let newWidth = parseInt(0.3 * wrapperSize.width);
    let newHeight = parseInt(0.3 * wrapperSize.height);

    fabric.Image.fromURL(url, (img) => {
      let imgWidth = img.naturalWidth || img.width;
      let imgHeight = img.naturalHeight || img.height;

      img.set({
        left: 0.35 * wrapperSize.width,
        top: 0.35 * wrapperSize.height,
        scaleX: newWidth / imgWidth,
        scaleY: newHeight / imgHeight,
        angle: 0,
        padding: 10,
        cornersize: 10,
        hasRotatingPoint: true,
      });
      editor.canvas.add(img);
      editor.canvas.setActiveObject(img);
    });
  };

  return {
    editor,
    // addBackground,
    exportImage,
    appendImage,
    appendText,
    onReady,
  };
};

export default useEditor;
