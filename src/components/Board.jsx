import { useState } from 'react';
import Square from './Square';
import updateStatus from './Status'

export default function Board(props) {

    let [squares, setSquare] = useState(new Array(9).fill(''));
    let [player, setplayer] = useState('playerA');
  //  let [playerB, setplayerB] = useState(false);
    let [gameStatus, setStatus] = useState('start');
    let [count, setcount] = useState(0);

   



    let clickHandler = (index) => {
      
        console.log(count);
       // let squaresCopy = [...squares];
         let turn=player;
                 
        if (turn==='playerA') {
           
            let squareCopy = [...squares]
            if(squareCopy[index]===''){
                setcount(count+1);
                squareCopy[index] = 'O';
            }
           
            setSquare(squareCopy);
            setplayer ('playerB');
           // setplayerB (true);
        }
        else {
            console.log("PlayerB...")
            let squareCopy = [...squares]
            if(squareCopy[index]===''){
                setcount(count+1);
                squareCopy[index] = 'X'
            }
            setSquare(squareCopy);
            setplayer ('playerA');
            //setplayerA (true);

        }
        
        
           let result= updateStatus(squares);
           console.log(result)
          
           if(result==='O'){
            setStatus('PlayerA win!' );
            setSquare(new Array(9).fill(''))

           }
           else  if(result==='X'){
            setStatus('PlayerB win!' );
            setSquare(new Array(9).fill(''))

           }
           else  if(result==='in-Progress'){
            setStatus('in-Progress' );       

           }


           else{
            setStatus('Draw' );
           // setSquare(new Array(9).fill(''))
           }
           
           
        



    }

   

    return (
        <div className='container'>
            <div className ='status-container'>
             <div className='status' >{player}</div>
            <div className='status'>{gameStatus}</div>
            </div>
            <div className='board>'>

                <div className='board-row'>
                    <Square value={squares[0]} index={0} clickHandler={clickHandler} />
                    <Square value={squares[1]} index={1} clickHandler={clickHandler} />
                    <Square value={squares[2]} index={2} clickHandler={clickHandler} />

                </div>
                <div className='board-row'>
                    <Square value={squares[3]} index={3} clickHandler={clickHandler} />
                    <Square value={squares[4]} index={4} clickHandler={clickHandler} />
                    <Square value={squares[5]} index={5} clickHandler={clickHandler} />

                </div>
                <div className='board-row'>
                    <Square value={squares[6]} index={6} clickHandler={clickHandler} />
                    <Square value={squares[7]} index={7} clickHandler={clickHandler} />
                    <Square value={squares[8]} index={8} clickHandler={clickHandler} />

                </div>


            </div>

        </div>



    )

}