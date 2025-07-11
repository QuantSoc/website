import { useDroppable } from '@dnd-kit/core';
import React from 'react'
import './index.less';


const PentominoesContainer = ({children, active}) => {
  const {isOver, setNodeRef} = useDroppable({
    id: 'tray',
  });
  const style = {
    outline: isOver ? '2px solid #d6beff' : undefined,
  };

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
      }}
      style={style}
      className={`pentominoes-container ${active ? 'dragging' : ''}`}
    >
      {children}
    </div>
  )
}

export default PentominoesContainer