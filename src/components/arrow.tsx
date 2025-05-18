import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

interface RoughArrowProps {
  from: [number, number]; 
  to: [number, number];   
  color?: string;
  strokeWidth?: number;
  roughness?: number;
}

const RoughArrow = ({
  from,
  to,
  color = "black",
  strokeWidth = 2,
  roughness = 1,
}: RoughArrowProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    svg.innerHTML = "";
    const rc = rough.svg(svg);


    const line = rc.line(from[0], from[1], to[0], to[1], {
      stroke: color,
      strokeWidth,
      roughness,
    });
    svg.appendChild(line);

    const dx = to[0] - from[0];
    const dy = to[1] - from[1];
    const angle = Math.atan2(dy, dx);
    const headLength = 10;

    const angle1 = angle - Math.PI / 7;
    const angle2 = angle + Math.PI / 7;

    const arrowPoint1: [number, number] = [
      to[0] - headLength * Math.cos(angle1),
      to[1] - headLength * Math.sin(angle1),
    ];

    const arrowPoint2: [number, number] = [
      to[0] - headLength * Math.cos(angle2),
      to[1] - headLength * Math.sin(angle2),
    ];

    const arrowhead = rc.polygon([to, arrowPoint1, arrowPoint2], {
      stroke: color,
      fill: color,
      strokeWidth,
      roughness,
      fillStyle: "solid",
    });

    svg.appendChild(arrowhead);
  }, [from, to, color, strokeWidth, roughness]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
    />
  );
};

export default RoughArrow;
