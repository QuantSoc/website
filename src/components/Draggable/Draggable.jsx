import React from 'react';
import {useDraggable} from '@dnd-kit/core';

const CELL_SIZE = 60;

function Draggable(props) {
  const Element = props.element || 'div';
  const {attributes, listeners, setNodeRef, isDragging} = useDraggable({
    id: props.id,
    data: props.data,
  });
  const style = {
    position: props.data.onGrid ? 'absolute' : 'static',
    left: props.data.onGrid ? props.position.col * CELL_SIZE : undefined,
    top: props.data.onGrid ? props.position.row * CELL_SIZE : undefined,
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
    pointerEvents: 'none',
    outline: 'none'
    // display: 'inline-block'
  }
  
  return (
    <Element ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {props.children}
    </Element>
  );
}

export default Draggable;