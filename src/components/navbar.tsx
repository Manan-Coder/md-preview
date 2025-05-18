import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

const Navbar = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const drawLines = () => {
    const svg = svgRef.current;
    if (!svg) return;

    svg.innerHTML = "";

    const rc = rough.svg(svg);
    const width = svg.clientWidth;
    const height = 80; // update h-[80px] in Tailwind below
    const gap = 50;
    const seed = 35;

    for (let i = -width; i < width * 2; i += gap) {
      const line1 = rc.line(i, 0, i + height, height, {
        stroke: "red",
        strokeWidth: 4,
        roughness: 3,
        seed,
      }) as SVGElement;
      svg.appendChild(line1);

      const line2 = rc.line(i, height, i + height, 0, {
        stroke: "red",
        strokeWidth: 3,
        roughness: 3,
        seed,
      }) as SVGElement;
      svg.appendChild(line2);
    }

    const underline = rc.line(0, height - 1, width, height - 1, {
      stroke: "red",
      strokeWidth: 3,
      roughness: 1,
      seed: 99,
    }) as SVGElement;
    svg.appendChild(underline);
  };

  useEffect(() => {
    drawLines();
    window.addEventListener("resize", drawLines);
    return () => window.removeEventListener("resize", drawLines);
  }, []);

  return (
    <div className="h-[80px] w-full bg-white relative overflow-hidden">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    </div>
  );
};

export default Navbar;
