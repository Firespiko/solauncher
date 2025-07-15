import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

interface FabricCanvasProps {
  width?: number;
  height?: number;
  className?: string;
}

const FabricCanvas: React.FC<FabricCanvasProps> = ({ 
  width = 800, 
  height = 600, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Initialize Fabric.js canvas
      fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
        width,
        height,
        backgroundColor: 'transparent',
      });

      // Add some default objects for demonstration
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        width: 100,
        height: 100,
        fill: 'rgba(0, 255, 255, 0.3)',
        stroke: '#00ffff',
        strokeWidth: 2,
      });

      const circle = new fabric.Circle({
        left: 250,
        top: 150,
        radius: 50,
        fill: 'rgba(255, 0, 255, 0.3)',
        stroke: '#ff00ff',
        strokeWidth: 2,
      });

      fabricCanvasRef.current.add(rect);
      fabricCanvasRef.current.add(circle);
    }

    // Cleanup function
    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
      }
    };
  }, [width, height]);

  return (
    <div className={`fabric-canvas-container ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default FabricCanvas;