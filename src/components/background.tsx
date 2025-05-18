import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const rc = rough.canvas(canvas);

    for (let i = 0; i < 25; i++) {
      const x = getRandom(0, width);
      const y = getRandom(0, height);
      const size = getRandom(30, 90);
      const color = `hsl(${getRandom(260, 280)}, 80%, 90%)`;

      const shapeType = Math.floor(getRandom(0, 3));

      switch (shapeType) {
        case 0:
          rc.circle(x, y, size, {
            fill: color,
            fillStyle: "solid",
            roughness: 2,
            stroke: "#a855f7",
          });
          break;
        case 1:
          rc.rectangle(x, y, size, size, {
            fill: color,
            fillStyle: "cross-hatch",
            roughness: 1.5,
            stroke: "#8b5cf6",
          });
          break;
        case 2:
          rc.line(x, y, x + size, y + size, {
            stroke: "#7c3aed",
            roughness: 2,
            strokeWidth: 2,
          });
          break;
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        width: "100vw",
        height: "100vh",
        opacity: 0.3,
      }}
    />
  );
};

export default Background;
