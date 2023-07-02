import React, { useState } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

const Game = () => {
  const [score, setScore] = useState(0);

  const handleCircleClick = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={window.innerWidth} height={window.innerHeight} fill="lightblue" />
        <Circle
          x={window.innerWidth / 2}
          y={window.innerHeight / 2}
          radius={50}
          fill="red"
          draggable
          onClick={handleCircleClick}
        />
        <Text text={`Score: ${score}`} fontSize={30} fill="black" />
      </Layer>
    </Stage>
  );
};

export default Game;
