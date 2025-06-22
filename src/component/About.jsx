// About.js
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './About.css'
import Button from './Button'
import RolledBox from "./RolledBox";


function About() {

  const backFn= useNavigate()

  const [rollDice, setRollDice]= useState(0)
  const [holdDice, setHoldDice]= useState([])
  
  const [rollDice1, setRollDice1]= useState(0)
  const [holdDice1, setHoldDice1]= useState([])

  const [currentPlayer, setCurrentPlayer]= useState(1)

  const [play1Win, setPlay1Win] = useState(false);
  const [play2Win, setPlay2Win] = useState(false);

  const[player1, setPlayer1]= useState('Player 1')
  const[player2, setPlayer2]= useState('Player 2')

  const [startgame, setStartgame] = useState(false)

  const [lastActivityTime, setLastActivityTime] = useState(Date.now());




  function rollBtn(){
    const num= Math.trunc((Math.random()*10)+1)
    setRollDice(num)
    setLastActivityTime(Date.now())

  }
  function holdBtn(){
    //setHoldDice(rollDice)
    const sumOfDice = holdDice.reduce((acc, curr) => acc + curr, 0);

        if (sumOfDice <30){
          setHoldDice((preValue)=>{
            return[...preValue, rollDice]
          })
        
        }
    
    setCurrentPlayer(2)
    setRollDice(0)
    setLastActivityTime(Date.now())

  }
  function rollBtn1(){
    const num1= Math.trunc((Math.random()*10)+1)
    setRollDice1(num1)
    setLastActivityTime(Date.now())

  }
  function holdBtn1(){
    //setHoldDice1(rollDice1)
    const sumOfDice = holdDice1.reduce((acc, curr) => acc + curr, 0);

        if (sumOfDice <30){
          setHoldDice1((preValue)=>{
            return[...preValue, rollDice1]
          })
        }
    setCurrentPlayer(1)
    setRollDice1(0)
    setLastActivityTime(Date.now())
  }


  function goBack(){
    backFn('/')
  }


  const sumOfPlayer1Dice=holdDice.reduce((acc, curr) => acc + curr, 0)
  const sumOfPlayer2Dice=holdDice1.reduce((acc, curr) => acc + curr, 0)

  useEffect(()=>{
    if(sumOfPlayer1Dice >=30 && sumOfPlayer2Dice<30){
        setPlay1Win(true)
        setCurrentPlayer(0)
        setPlayer1('Player 1 Wins 🎉')
    }else
    if( sumOfPlayer2Dice >=30 && sumOfPlayer1Dice <30){
        setPlay2Win(true)
        setCurrentPlayer(0)
        setPlayer2('Player 2 Wins 🎉')
    }

    
  

  }, [sumOfPlayer1Dice, sumOfPlayer2Dice])


  

  const colors= {
    backgroundColor: 'green'
  }
 
  function refreshBtn(){

    const randomNo= Math.trunc((Math.random() * 2)+1)

    setHoldDice([])
    setHoldDice1 ([])
    setCurrentPlayer(randomNo)
    setPlay1Win (false)
    setPlay2Win (false)
    setPlayer1 ('Player 1')
    setPlayer2  ('Player 2')
    setLastActivityTime(Date.now())
  }
  function startGame(){
    setStartgame(true)
    refreshBtn()
  }
  function endGame(){
    setStartgame(false)
  }

useEffect(()=>{

const idleTimer= setInterval(() => {
  const currentTime= Date.now()
  const idleTime= currentTime - lastActivityTime

  if(idleTime >45000){
    endGame()
  }

}, 1000);

return()=> clearInterval(idleTimer)

}, [lastActivityTime])




    return <>
        <h2>Couples Game 💓💘</h2>
      {startgame? <div className='bigger-box'>
              <p className="score">Score Board 🖋️ </p>
            
            <div className="general-capturebox-view">
              
              <div className={`${currentPlayer===1 ? "players-bigbox" : null}`} style={play1Win? colors: null}>
                <p className={`player ${currentPlayer===1 ? 'playerDisplay' : ''} ${play1Win? 'final' :''}`}>{player1}</p>
                
                <h1 className="player-num">{sumOfPlayer1Dice}</h1>
              </div>

              <div className={`${currentPlayer===2 ? "players-bigbox" : null}`} style={play2Win? colors: null}>
                <p className={`player ${currentPlayer===2 ? 'playerDisplay' : ''} ${play2Win? 'final' :'' }`}>{player2}</p>
                
                <h1 className="player-num">{sumOfPlayer2Dice}</h1>
              </div>
            </div>

              <div className="all-players">
                <div className="player1-box">
                  {currentPlayer===1 ? <div className="smallCircle">

                  </div> : <></>}
                  

                  <p className="player-1 players">
                    Player One (1) 
                  </p>
                    
                  <RolledBox title={rollDice} />
                    
                  <div className="btn-">
                    <Button name='Roll' onClick={rollBtn} disabled={currentPlayer !==1}/>
                    <Button name='Hold' onClick={holdBtn} disabled={currentPlayer !==1}/>
                  </div>
                </div>
                  
                <div className="player2-box">
                  {currentPlayer===2 ? <div className="smallCircle">

                  </div> : <></>}

                  <p className="player-2 players">
                    Player Two (2) 
                  </p>
                    
                  <RolledBox title={rollDice1}/>

                  <div className="btn-">
                    <Button name='Roll' onClick={rollBtn1} disabled={currentPlayer !==2}/>
                    <Button name='Hold' onClick={holdBtn1} disabled={currentPlayer !==2}/>
                  </div>
                </div>
              </div>
              <button className="refreshBtn" onClick={refreshBtn}>Refresh</button>
        </div> : <></>}
        
      <button className='game-btn left' onClick={startGame}>Start Game 💘</button>
      <button className='goBackBtn margin-top' onClick={goBack}>Go Home</button>
      <button className='game-btn right' onClick={endGame}>End Game 💕</button>
      </>
    }
  
  export default About;
  