import { useState, useRef } from 'react';

function MouseDragComponent() {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const dragRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    
    // Calculate offset between mouse position and element position
    const rect = dragRef.current.getBoundingClientRect();
    setDragOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
    
    // Prevent text selection while dragging
    event.preventDefault();
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    
    // Update position based on mouse movement
    setPosition({
      x: event.clientX - dragOffset.x,
      y: event.clientY - dragOffset.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    // Stop dragging if mouse leaves the container
    setIsDragging(false);
  };

  const reset = () => {
    setPosition({ x: 100, y: 100 });
    setIsDragging(false);
  };

  return (
    <div
      className="drag-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Draggable Element */}
      <div
        ref={dragRef}
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '100px',
          height: '100px',
          backgroundColor: isDragging ? '#ff6b6b' : '#4ecdc4',
          border: '2px solid #333',
          borderRadius: '8px',
          cursor: isDragging ? 'grabbing' : 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          userSelect: 'none',
          transition: isDragging ? 'none' : 'background-color 0.2s'
        }}
      >
        {isDragging ? 'Dragging...' : 'Drag Me!'}
      </div>

      {/* Reset Button */}
      <button
        onClick={reset}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reset Position
      </button>

      {/* Debug Info */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '10px',
          borderRadius: '4px',
          fontFamily: 'monospace'
        }}
      >
        <div>Position: ({Math.round(position.x)}, {Math.round(position.y)})</div>
        <div>Dragging: {isDragging ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
}

export default MouseDragComponent;
