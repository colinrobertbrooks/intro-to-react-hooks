import React, { useState, useEffect } from "react";

const MousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null
  });

  const handleMouseMove = ({ pageX, pageY }) =>
    setMousePosition({
      x: pageX,
      y: pageY
    });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <span>
      x: {mousePosition.x} y: {mousePosition.y}
    </span>
  );
};

export default MousePosition;
