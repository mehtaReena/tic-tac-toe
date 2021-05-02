import { useState } from 'react';
import Status from './Status'
import Board from "./Board";



const Game = () => {
   const [history, setHistory] = useState([Array(9).fill(null)]);
   const [stepNumber, setStepNumber] = useState(0);
   const [xIsNext, setXisNext] = useState(true);
   const winner = Status(history[stepNumber]);
   const nextPlayer = xIsNext ? "X" : "O";
 
   const handleClick = (i) => {
     const historyPoint = history.slice(0, stepNumber + 1);
     const current = historyPoint[stepNumber];
     const squares = [...current];
     // return if won or occupied
     if (winner || squares[i]) return;
     // select square
     squares[i] = nextPlayer;
     setHistory([...historyPoint, squares]);
     setStepNumber(historyPoint.length);
     setXisNext(!xIsNext);
   };
 
   const jumpTo = (step) => {
     setStepNumber(step);
     setXisNext(step % 2 === 0);
   };
 
   const renderMoves = () =>
     history.map((step, move) => {
       const destination = move ? `Go to move #${move}` : "Go to Start";
       return (
         <li key={move}>
           <button onClick={() => jumpTo(move)}>{destination}</button>
         </li>
       );
     });
 
   return (
     <div class='container'>
         <h3>{winner ? "Winner: " + winner : "Next Player: " + nextPlayer}</h3>
          <div class='board'>
       <Board squares={history[stepNumber]} onClick={handleClick} />
       <div className="info-wrapper">
       
           <h3>History</h3>
           {renderMoves()}
         </div>
        
       </div>
     </div>
   );
 };
 
 export default Game;
