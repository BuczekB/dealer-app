



import { useEffect, useState } from 'react';
import './CountingBJ.css'

function CountingBJ() {

    const [finalNumber, setFinalNumber] = useState()
    const [BjOfFinalNumber, setBjOfFinalNumber] = useState()

    const [inputValue, setInputValue] = useState()

    const [correct, setCorrect] = useState(0)
    const [uncorrect, setUncorrect] = useState(0)

    

const data =[
    {"a": 5, "b": 7.5},
    {"a": 10, "b": 15},
    {"a": 15, "b": 22.5},
    {"a": 20, "b": 30},
    {"a": 25, "b": 37.5},
    {"a": 30, "b": 45},
    {"a": 35, "b": 52.5},
    {"a": 40, "b": 60},
    {"a": 45, "b": 67.5},
    {"a": 50, "b": 75},
    {"a": 55, "b": 82.5},
    {"a": 60, "b": 90},
    {"a": 65, "b": 97.5},
    {"a": 70, "b": 105},
    {"a": 75, "b": 112.5},
    {"a": 80, "b": 120},
    {"a": 85, "b": 127.5},
    {"a": 90, "b": 135},
    {"a": 95, "b": 142.5},
    {"a": 100, "b": 150},
    {"a": 105, "b": 157.5},
    {"a": 110, "b": 165},
    {"a": 115, "b": 172.5},
    {"a": 120, "b": 180},
    {"a": 125, "b": 187.5},
    {"a": 130, "b": 195},
    {"a": 135, "b": 202.5},
    {"a": 140, "b": 210},
    {"a": 145, "b": 217.5},
    {"a": 150, "b": 225},
    {"a": 155, "b": 232.5},
    {"a": 160, "b": 240},
    {"a": 165, "b": 247.5},
    {"a": 170, "b": 255},
    {"a": 175, "b": 262.5},
    {"a": 180, "b": 270},
    {"a": 185, "b": 277.5},
    {"a": 190, "b": 285},
    {"a": 195, "b": 292.5},
    {"a": 200, "b": 300},
    {"a": 205, "b": 307.5},
    {"a": 210, "b": 315},
    {"a": 215, "b": 322.5},
    {"a": 220, "b": 330},
    {"a": 225, "b": 337.5},
    {"a": 230, "b": 345},
    {"a": 235, "b": 352.5},
    {"a": 240, "b": 360},
    {"a": 245, "b": 367.5},
    {"a": 250, "b": 375},
    {"a": 255, "b": 382.5},
    {"a": 260, "b": 390},
    {"a": 265, "b": 397.5},
    {"a": 270, "b": 405},
    {"a": 275, "b": 412.5},
    {"a": 280, "b": 420},
    {"a": 285, "b": 427.5},
    {"a": 290, "b": 435},
    {"a": 295, "b": 442.5},
    {"a": 300, "b": 450},
    {"a": 305, "b": 457.5},
    {"a": 310, "b": 465},
    {"a": 315, "b": 472.5},
    {"a": 320, "b": 480},
    {"a": 325, "b": 487.5},
    {"a": 330, "b": 495},
    {"a": 335, "b": 502.5},
    {"a": 340, "b": 510},
    {"a": 345, "b": 517.5},
    {"a": 350, "b": 525},
    {"a": 355, "b": 532.5},
    {"a": 360, "b": 540},
    {"a": 365, "b": 547.5},
    {"a": 370, "b": 555},
    {"a": 375, "b": 562.5},
    {"a": 380, "b": 570},
    {"a": 385, "b": 577.5},
    {"a": 390, "b": 585},
    {"a": 395, "b": 592.5},
    {"a": 400, "b": 600}
  ]

  useEffect(() =>{
    toggleNumber()
  },[])


 const toggleNumber = () =>{
    const random = Math.floor(Math.random() * (80 - 1 + 1) );

    const numb = data[random]
    setFinalNumber(numb.a)
    setBjOfFinalNumber(numb.b)
    
 }

 const handleChange = (e) =>{
    setInputValue(e.target.value)
 }

 const handleKeyDown = (e) =>{
   
   if(e.key === 'Enter' || e.target.type === 'submit'){

    
   console.log(inputValue);
   console.log(BjOfFinalNumber);
   
    
    if(inputValue == BjOfFinalNumber){
   
        setCorrect(correct + 1)
    console.log('correct');
      
    }else{
     
        setUncorrect(uncorrect + 1)
     console.log('test');
      
    }
  
    console.log(e.target.value);

    setInputValue('')
    toggleNumber()
   
    

    
    
   }
  }

  return (
      

    <div className='container'>
    <div className='workBox'>
       <div className='correct'>
        <h1>Correct: {correct}</h1>
        </div>
    
     <div className='inputBox'>
     <h1>BlackJack Of {finalNumber}</h1>
      <input 
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={inputValue}
      ></input>
      <h3>Use dot between numbers</h3>
      <button className='mobileButton' >CHECK</button>
     </div>
      
     <div className='uncorrect'>
     <h1>Uncorrect: {uncorrect}</h1>
        </div>
       </div>
    </div>
      
    
     
      
  )
}

export default CountingBJ
