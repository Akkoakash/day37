import { useState } from "react";

export function TicTacToe() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  //useState([0,1,2,3,4,5,6,7,8]);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //console.log(a,b,c);
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);
  const [isXturn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      console.log(boardCopy, index);
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXturn);
    }
  };
  return (<div className="full-game">
    <div className="board">
      {board.map((val, index) => (<GameBox val={val} onPlayerClick={() => handleClick(index)} />))}
    </div>
    {winner ? <h2>Winner is: {winner}</h2> : ""}
    <button onClick={() => {
      setBoard([null, null, null, null, null, null, null, null, null]);
      setIsXTurn(true);
    }}
    >Restart</button>
  </div>
  );
}
function GameBox({ val, onPlayerClick }) {
  // const[val,setVal]= useState(null)
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (<div
    //onClick={()=>setVal(val==="X"?"O":"X")} 
    onClick={() => onPlayerClick()}
    style={styles} className="game-box">
    {val}
  </div>
  );
}
{ /*function GameBox({val}){
  
  const styles={
    color: val === "X"?"green": "red",
  };
  return (<div style={styles} className="game-box">{val}
  </div>
  );
}
*/
}
