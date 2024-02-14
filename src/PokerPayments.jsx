import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

import './PokerPayments.css'

import Button from "./atoms/button/Button"

const PokerPayments = () => {

    const dataAmerican = [
        {name: 'BigPoker', blind: 500, bonus: 50},
        {name: 'SmallPoker', blind: 50, bonus: 40},
        {name: 'FourOfCards', blind: 10, bonus: 30},
        {name: 'Full', blind: 3, bonus: 9},
        {name: 'Flush', blind: 3/2, bonus: 7},
        {name: 'Strit', blind: 1, bonus: 4},
        {name: 'ThreOfCards', blind: 0, bonus: 3},
    ]
    const dataRussian = [
        {name: 'BigPoker', bet: 100, bonus: 10000},
        {name: 'SmallPoker', bet: 50, bonus: 2000},
        {name: 'FourOfCards', bet: 20, bonus: 500},
        {name: 'Full', bet: 7, bonus: 200},
        {name: 'Flush', bet: 5, bonus: 100},
        {name: 'Strit', bet: 4, bonus: 50},
        {name: 'ThreOfCards', bet: 3, bonus: 0},
        {name: 'TwoPair', bet: 2, bonus: 0},
        {name: 'OnePair', bet: 1, bonus: 0},
    ]
    const dataOfPokers = [
      {name: 'AmericanPoker', firstValue: 'Blind', secoundValue: 'Bonus', data: 'dataAmerican'},
      {name: 'RussianPoker', firstValue: 'Bet', secoundValue: 'Bonus', data: 'dataRussian'}
    ]


    const [nameOfGame, setNameOfGame] = useState(dataAmerican)
    const [toggleHands, setToggleHands] = useState('')
    const [inputValueOne, setInputValueOne] = useState('')
    const [inputValueTwo, setInputValueTwo] = useState('')
    const [correct, setCorrect] = useState(0)
    const [uncorrect, setUncorrect] = useState(0)
    const [choosePoker, setChoosePoker] = useState(dataOfPokers[0])


    useEffect(() =>{
      toggleNumber(6,1, dataAmerican)
     },[])

     const inputRef = useRef(null);

     const handleClick = () => {
     
       inputRef.current.focus();
     };
   

    const toggleNumber = (valueMax, valueMin, nameOfDataBase) =>{
      const random = Math.floor(Math.random() * (valueMax - valueMin + 1) + valueMin);
      const arrayElement = nameOfDataBase[random]
      setToggleHands(arrayElement) 
   }

   const handleChangeFirstInput = (e) =>{
    setInputValueOne(e.target.value)

  }
  const handleChangeSecoundInput = (e) =>{
    setInputValueTwo(e.target.value)
  }

const checkPayments = () =>{
  if(choosePoker.name === 'AmericanPoker'){
    if(toggleHands.blind == inputValueOne & toggleHands.bonus == inputValueTwo){
      setCorrect(correct+1)
      toggleNumber(6,1, dataAmerican)
      setInputValueOne('')
      setInputValueTwo('')
    }
    else{
      setUncorrect(uncorrect+1)
      setInputValueOne('')
      setInputValueTwo('')
    }
  }

  if(choosePoker.name === 'RussianPoker'){
    if( toggleHands.bet == inputValueOne & toggleHands.bonus == inputValueTwo){
      setCorrect(correct+1)
      toggleNumber(6,1, dataRussian)
      setInputValueOne('')
      setInputValueTwo('')
    }
    else{
      setUncorrect(uncorrect+1)
      setInputValueOne('')
      setInputValueTwo('')
    }
  }


  handleClick()
 
}
const changeGame = (value) =>{
  switch (value) {
    case 'American':
        setNameOfGame(dataAmerican)
        toggleNumber(6,1, dataAmerican)
        setChoosePoker(dataOfPokers[0])
        console.log('tets');
      break;
      case 'Russian':
        setNameOfGame(dataRussian) 
        toggleNumber(6,1, dataRussian)
        setChoosePoker(dataOfPokers[1])
        console.log('test');
        break;
    default:
      break
  }
}
   
const handleKeyDown = (e) =>{
  
  if(e.key === 'Enter' ){
    checkPayments()
  }

 

  }
    return(
        <div className='container'>

        <Link to='/dealer-app'>
        <Button text={'BACK'} style={'backButton'} />
          </Link>

        
        <div className='buttonBox'>
        
          <Button singleId='first' text={'American Poker'} handleChange={() => {changeGame('American')}}/>
          <Button singleId='secound' text={'Russian Poker'} handleChange={() => {changeGame('Russian')}}/>
          
        </div>

    <div className='workBox'>
       <div className='correct'>
        <h1>Correct: <span id='correctNoumber'>{correct}</span></h1>
        </div>
    
        <div className='inputBox'>
     <h1>{choosePoker.name}<span id='valueBJ'><br></br>{toggleHands.name}</span></h1>
      <div className="inputBox"><input 
        onKeyDown={handleKeyDown}
        name="blind"
        value={inputValueOne}
        onChange={handleChangeFirstInput}
        autoFocus
        ref={inputRef}
      ></input>
      <label className="labelInputBox" htmlFor='blind'>{choosePoker.firstValue}</label>
      </div>
      <div className="inputBox"><input 
        onKeyDown={handleKeyDown}
        name="bonus"
        onChange={handleChangeSecoundInput}
        value={inputValueTwo}
      ></input>
      <label className="labelInputBox" htmlFor='bonus'>{choosePoker.secoundValue}</label>
      </div>
    
      <Button text={'CHECK'} handleChange={() => {checkPayments()}}/>
     </div>
      
     <div className='uncorrect'>
     <h1>Uncorrect: {uncorrect}</h1>
        </div>
       </div>

       
   
        </div>)

}

export default PokerPayments