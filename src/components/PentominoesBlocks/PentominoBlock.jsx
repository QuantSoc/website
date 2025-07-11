import { useDraggable } from '@dnd-kit/core';
import React, { forwardRef } from 'react';
import './index.less';


const CELL_SIZE = 60;

const PentominoBlock = forwardRef(function PentominoBlock({ piece, onGrid, position, active, valid }, ref) {
  const { shape, type } = piece;

  const maxX = Math.max(...shape.map(([x]) => x));
  const maxY = Math.max(...shape.map(([_, y]) => y));
  

  return (
    <div
      ref={ref}
      style={{
        // position: onGrid ? 'absolute' : 'static',
        // left: onGrid ? position.col * CELL_SIZE : undefined,
        // top: onGrid ? position.row * CELL_SIZE : undefined,
        display: 'grid',
        gridTemplateColumns: `repeat(${maxX + 1}, ${CELL_SIZE}px)`,
        gridTemplateRows: `repeat(${maxY + 1}, ${CELL_SIZE}px)`,
        width: (maxX + 1) * CELL_SIZE,
        height: (maxY + 1) * CELL_SIZE,
      }}
    >
      {shape.map(([x, y], i) => (
        <div
          key={i}
          className={`${type} pentomino-cell ${active ? 'active' : ''} ${valid ? '' : 'invalid'}`}
          style={{
            gridColumnStart: x + 1,
            gridRowStart: y + 1,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        />
      ))}
    </div>
  );
});

export default PentominoBlock;
