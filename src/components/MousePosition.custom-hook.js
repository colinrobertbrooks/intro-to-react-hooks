import React from "react";
import useMousePosition from "../hooks/useMousePosition";

const MousePosition = () => {
  const { x, y } = useMousePosition();

  return (
    <span>
      x: {x} y: {y}
    </span>
  );
};

export default MousePosition;
