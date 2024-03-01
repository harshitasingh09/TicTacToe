import  { useState } from "react";
import Sqaure from "./Sqaure";

const Board = () => {
  const [boardState] = useState(Array(9).fill(null));
  const handleClick = (index) => {
    console.log(index); 
  };

  return (
   
        <>
          <div className="board-container">
            <div className="board-row">
              <Sqaure value={boardState[0]} onClick={() => handleClick(0)} />
              <Sqaure value={boardState[1]} onClick={() => handleClick(1)} />
              <Sqaure value={boardState[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
              <Sqaure value={boardState[3]} onClick={() => handleClick(3)} />
              <Sqaure value={boardState[4]} onClick={() => handleClick(4)} />
              <Sqaure value={boardState[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
              <Sqaure value={boardState[6]} onClick={() => handleClick(6)} />
              <Sqaure value={boardState[7]} onClick={() => handleClick(7)} />
              <Sqaure value={boardState[8]} onClick={() => handleClick(8)} />
            </div>
          </div>
        </>
  )
   
  
};

export default Board;
