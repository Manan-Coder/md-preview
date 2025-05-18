import { useState, useEffect, useRef } from "react";
import RoughArrow from "./arrow";
const AnimatedArrow = () => {
  const [key, setKey] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setKey((prev) => prev + 1);
    }, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes arrowBounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .arrow-bounce {
            animation: arrowBounce 1.2s infinite ease-in-out;
          }
        `}
      </style>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 flex justify-center items-center pointer-events-none arrow-bounce">
        <RoughArrow
          key={key}
          from={[40, 0]}
          to={[40, 40]}
          color="#000000"
        />
      </div>
    </>
  );
};

export default AnimatedArrow;
