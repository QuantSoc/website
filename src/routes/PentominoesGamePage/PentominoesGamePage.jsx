import './index.less';
import { useNavigate } from 'react-router-dom';
import PentominoBlock from 'components/PentominoesBlocks/PentominoBlock';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import PentominoesGrid from 'components/PentominoesGrid/PentominoesGrid';
import { useEffect, useRef, useState } from 'react';
import Draggable from 'components/Draggable/Draggable';
import PentominoesContainer from 'components/PentominoesContainer/PentominoesContainer';

const PENTOMINO_SHAPES = {
  F: [[0, 1], [1, 0], [1, 1], [1, 2], [2, 2]],
  I: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
  L: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]],
  N: [[0, 0], [0, 1], [1, 1], [1, 2], [1, 3]],
  P: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]],
  T: [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]],
  U: [[0, 0], [0, 1], [1, 1], [2, 1], [2, 0]],
  V: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
  W: [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]],
  X: [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]],
  Y: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 2]],
  Z: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]],
};

const PentominoesGamePage = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(null);
  const [activeData, setActiveData] = useState(null);
  const [overId, setOverId] = useState(null);
  const [placedPieces, setPlacedPieces] = useState([]);
  // const [previewPieces, setPreviewPieces] = useState([]);
  const gridRef = useRef(null);
  const activePieceRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeId &&
        activePieceRef.current &&
        !activePieceRef.current.contains(event.target)
      ) {
        setActiveId(null);
        setActiveData(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeId]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!activeId) return;
      console.log('hi')

      if (event.key === "ArrowRight") {
        event.preventDefault();
        rotateActivePiece("clockwise");
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        rotateActivePiece("counterClockwise");
      }

      if (event.key === "f") {
        event.preventDefault();
        flipActivePiece();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeId, activeData, placedPieces])

  const isComplete = placedPieces.filter(p => p.valid).length === 12;

  // 90 degree clockwise rotation
  const rotateShape = (shape, direction) => {
    // Rotate each coordinate: (x, y) -> (y, -x)
    const rotated = direction === "clockwise" ?
      shape.map(([x, y]) => [y, -x]) : shape.map(([x, y]) => [-y, x]);

    // Normalize shape so min x and y become 0 (shift shape to top-left)
    const minX = Math.min(...rotated.map(([x]) => x));
    const minY = Math.min(...rotated.map(([_, y]) => y));

    const normalized = rotated.map(([x, y]) => [x - minX, y - minY]);

    return normalized;
  }
  
  const rotateActivePiece = (direction) => {
    const activePiece = placedPieces.find(p => p.id === activeId);
    const { x, y } = activePiece;
    const newShape = rotateShape(activePiece.shape, direction);

    setPlacedPieces((prev) =>
      prev.map(
        p => p.id === activeId ? {
          ...p,
          shape: newShape,
          valid: isInBounds(x, y, newShape) && isOverlapping(x, y, newShape),
        } : p
      )
    );
  }

  const flipShape = (shape) => {
    const maxX = Math.max(...shape.map(([x]) => x));
    return shape.map(([x, y]) => [maxX - x, y]);
  };

  const flipActivePiece = () => {
    const activePiece = placedPieces.find(p => p.id === activeId);
    const { x, y } = activePiece;
    const newShape = flipShape(activePiece.shape);

    setPlacedPieces((prev) =>
      prev.map(
        p => p.id === activeId ? {
          ...p,
          shape: newShape,
          valid: isInBounds(x, y, newShape) && isOverlapping(x, y, newShape),
        } : p
      )
    );
  }

  const isInBounds = (newX, newY, newShape) => {
    for (const coord of newShape) {
      const x = newX + coord[0];
      const y = newY + coord[1];
      if (!(x >= 0 && x < 10 && y >= 0 && y < 6)) {
        return false;
      }
    }
    return true;
  }

  const isOverlapping = (newX, newY, newShape) => {
    const occupiedCells = new Set();
    const otherPieces = placedPieces.filter(p => p.id !== activeId && p.valid);

    // Add all occupied cells to set
    for (const piece of otherPieces) {
      for (const coord of piece.shape) {
        const x = piece.x + coord[0];
        const y = piece.y + coord[1];
        occupiedCells.add(`${x},${y}`)
      }
    }

    // Check if active piece has occupied cells
    for (const coord of newShape) {
      const x = newX + coord[0];
      const y = newY + coord[1];
      if (occupiedCells.has(`${x},${y}`)) {
        return false;
      }
    }
    return true;
  }

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
    setActiveData(event.active.data.current)
    console.log(placedPieces)
    console.log(event)
  };

  const handleDragOver = (event) => {
    setOverId(event.over?.id || null);
  };

  const handleDragEnd = (event) => {
    if (!activeId || !gridRef.current || !event.over) {
      setActiveId(null);
      setActiveData(null);
      return;
    }

    if (event.over.id === 'grid') {
      const type = activeData.type;
      const fromGrid = activeData.onGrid;
  
      const gridRect = gridRef.current.getBoundingClientRect();
      const dragX = event.active.rect.current.translated?.left ?? 0;
      const dragY = event.active.rect.current.translated?.top ?? 0;
  
      const relativeX = dragX - gridRect.left;
      const relativeY = dragY - gridRect.top;
  
      const snappedX = Math.round(relativeX / 60);
      const snappedY = Math.round(relativeY / 60);
  
      if (isInBounds(snappedX, snappedY, activeData.shape)) {
        // if piece is on grid, move the existing piece
        // if piece is from tray, create new piece
        if (fromGrid) {
          setPlacedPieces((prev) =>
            prev.map((p) =>
              p.id === activeId ? { ...p,x: snappedX, y: snappedY, valid: isOverlapping(snappedX, snappedY, activeData.shape) } : p
            )
          );
        } else {
          const newId = String(Date.now())
          setPlacedPieces((prev) => [
            ...prev,
            {
              id: newId,
              type,
              shape: PENTOMINO_SHAPES[type],
              x: snappedX,
              y: snappedY,
              valid: isOverlapping(snappedX, snappedY, activeData.shape),
            }
          ]);
          
          setActiveId(newId);
          setActiveData({
            ...activeData,
            onGrid: true,
          })
        }
      }
    }

    if (event.over.id === 'tray') {
      setPlacedPieces((prev) => prev.filter((p) => p.id !== activeId));
      setActiveId(null);
      setActiveData(null);
    }

  };

  return (
    <div className="page">
      <div className="game-component">
        {isComplete && (
          <p>You have finished...</p>
        )}
        <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
          <div className="button-bar">
            <button
              className="button"
              onClick={() => navigate("/pentominoes")}
            >
              Back
            </button>
            <div className="timer-box">Timer: 10s</div>
          </div>

          <PentominoesGrid gridRef={gridRef}>
            {placedPieces.map(({ id, type, shape, x, y, valid }) => (
              <Draggable key={id} id={id} data={{ onGrid: true, type, shape }} position={{ row: y, col: x }}>
                <PentominoBlock
                  ref={activeId === id ? activePieceRef : null}
                  piece={{ shape, type }}
                  onGrid={true}
                  position={{ row: y, col: x }}
                  active={activeId == id}
                  valid={valid}
                />
              </Draggable>
            ))}
          </PentominoesGrid>

          <PentominoesContainer active={!!activeId}>
            {Object.entries(PENTOMINO_SHAPES).map(([type, shape], i) => {
              return (
                <div key={i} className="pentominoes-container-cell">
                  <Draggable id={type} data={{ onGrid: false, type, shape }} >
                    <PentominoBlock piece={{ shape, type }} onGrid={false} valid />
                  </Draggable>
                </div>
              );
            })}
          </PentominoesContainer>


          <DragOverlay>
            {activeId ? (
              <div style={{ 
                opacity: overId === 'tray' ? 0.5 : 1, 
              }}>
                <PentominoBlock
                  piece={{
                    type: activeData.type,
                    shape: activeData.shape
                  }}
                  onGrid={false}
                  active
                  valid
                />
              </div>
            ): null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default PentominoesGamePage;
