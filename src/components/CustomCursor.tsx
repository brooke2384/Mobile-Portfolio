import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-primary/50 pointer-events-none z-50 mix-blend-difference"
        animate={{ 
          x: mousePosition.x - 8, 
          y: mousePosition.y - 8,
          scale: isClicking ? 0.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        ref={cursorRef}
        className="fixed rounded-full pointer-events-none z-50 backdrop-blur-sm"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          width: isHovering ? "40px" : "24px",
          height: isHovering ? "40px" : "24px",
          borderWidth: isClicking ? "4px" : "2px",
          borderColor: isHovering ? "rgba(155, 135, 245, 0.8)" : "rgba(155, 135, 245, 0.5)",
          backgroundColor: isHovering ? "rgba(155, 135, 245, 0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        style={{ 
          boxShadow: isHovering ? "0 0 10px rgba(155, 135, 245, 0.3)" : "none",
          border: "2px solid rgba(155, 135, 245, 0.5)"
        }}
      />
    </>
  );
};

export default CustomCursor;