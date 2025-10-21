import { useRef } from 'react';

function Drag() {
  const resetRef = useRef(null);

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };

  const drop = (event) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    if (draggedElement) {
      event.target.appendChild(draggedElement);
    }
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <div>
      {/* Drop zone */}
      <div
        className="drop-zone"
        onDragOver={allowDrop}
        onDrop={drop}
        style={{
          width: '300px',
          height: '200px',
          border: '2px dashed #ccc',
          padding: '20px',
          margin: '20px'
        }}
      >
        Drop items here
      </div>

      {/* Draggable items */}
      <div
        id="drag1"
        draggable={true}
        onDragStart={drag}
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px',
          cursor: 'move'
        }}
      >
        Drag me 1
      </div>

      <div
        id="drag2"
        draggable={true}
        onDragStart={drag}
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: '#e0e0e0',
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px',
          cursor: 'move'
        }}
      >
        Drag me 2
      </div>

      {/* Reset button */}
      <button
        ref={resetRef}
        className="reset"
        onClick={reset}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          margin: '20px'
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Drag;