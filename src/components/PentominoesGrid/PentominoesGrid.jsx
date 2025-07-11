import { useDroppable } from '@dnd-kit/core';
import React from 'react'
import './index.less';


const PentominoesGrid = ({children, gridRef}) => {
  const {isOver, setNodeRef} = useDroppable({
    id: 'grid',
  });
  const style = {
    outline: isOver ? '2px solid #d6beff' : undefined,
  };

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        gridRef.current = node;
      }}
      style={style}
      className="grid-container"
    >
      <div className="grid-background">  
        {Array.from({ length: 6 * 10 }).map((_, i) => (
          <div key={i} className="grid-cell" />
        ))}
      </div>
      <div className="grid-pieces-overlay">
        {children}
      </div>
    </div>
  )
}

export default PentominoesGrid