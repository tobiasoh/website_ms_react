import React, { useRef, useEffect, useState} from 'react';
import './Canvas.css'

function Canvas({currentPage}) {
  const canvasRef = useRef(null);
  const [isCanvasDirty, setIsCanvasDirty] = useState(false);

  useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        function drawChalkLine(x0, y0, x1, y1) {
            const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) / 2; // Number of steps based on distance
            const deltaX = (x1 - x0) / steps;
            const deltaY = (y1 - y0) / steps;
        
            for (let i = 0; i <= steps; i++) {
                const x = x0 + deltaX * i + randomize(-1, 1); // Add noise
                const y = y0 + deltaY * i + randomize(-1, 1); // Add noise
                ctx.fillRect(x, y, lineWidth, lineWidth); // Draw a rectangle at the calculated point
            }
        }
        
        // Function to generate random number within a range
        function randomize(min, max) {
            return Math.random() * (max - min) + min;
        }
    
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);  // Ensure the canvas resizes when the window changes

        let drawing = false;
        let lastX = 0;
        let lastY = 0;
        let strokeColor = '#000'//'#C0C0C0';//'#000';////'#FFFFFF'//'#FF0000'; // Color for drawing
        let lineWidth = 7;           // Line width for drawing
        let hasDrawn = false;

        // Start drawing when the mouse is pressed down
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    setIsCanvasDirty(true);
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Draw while moving the mouse with the button down
canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;  // Only draw when the mouse is pressed

    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.globalAlpha = 1; // Lower opacity for a softer look
    drawChalkLine(lastX, lastY, e.offsetX, e.offsetY);
    hasDrawn = true;

    [lastX, lastY] = [e.offsetX, e.offsetY];  // Update the last mouse position
});

// Stop drawing when the mouse button is released
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);

      }, []);

      const handleClearCanvas = () => {
        // Clear the canvas
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);   
    
    
        // Reset the isCanvasDirty state
        setIsCanvasDirty(false);
      };


      useEffect(() => {
        const handleResize = () => {
          const canvas = canvasRef.current;
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          // Redraw your canvas content here
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const buttonStyle = {
        color: currentPage === 'music' ? 'black' : 'white',
      };


  return (
    <div>
      <canvas className='drawingCanvas' ref={canvasRef}></canvas>
      {isCanvasDirty && (
        <button className='clearButton' style={buttonStyle} onClick={handleClearCanvas}>CLEAR</button>
      )}
    </div>
  );
}



export default Canvas;