import { useState } from "react";
import Sqaure from "./Sqaure";
import iconX from "../assets/icon_X.jpg";
import icon0 from "../assets/icon_O.jpg";

const Board = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [isXTurn,setIsXTurn]=useState(false);
  const handleClick = (index) => {
    const copyState = [...boardState];
    if (boardState[index] || CheckWinner()) {
      return;
    }
    copyState[index] = isXTurn ? (
      <img style={{ maxWidth: "50px" }} src={iconX} key={1} />
    ) : (
      <img style={{ maxWidth: "50px" }} src={icon0} key={2} />
    );
    console.log(copyState[index]);
    console.log("copyState[index]", copyState);
    setBoardState(copyState);
    setIsXTurn(!isXTurn);
  };
  const CheckWinner = () => {
    const WinnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of WinnerLogic) {
      const [a, b, c] = logic;

      console.log("boardState", boardState);
      if (
        boardState[a]?.key &&
        boardState[a]?.key === boardState[b]?.key &&
        boardState[a]?.key === boardState[c]?.key
      ) {
        return true;
      }
    }
    return false;
  };
  const isWinner = CheckWinner();
  return (
    <>
      {isWinner ? (
        ` winner`
      ) : (
        <>
          {" "}
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
      )}
    </>
  );
};

export default Board;
