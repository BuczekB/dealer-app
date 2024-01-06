import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const data = [
    {"a": 35, "b": 1, "c": 35},
    {"a": 35, "b": 2, "c": 70},
    {"a": 35, "b": 3, "c": 105},
    {"a": 35, "b": 4, "c": 140},
    {"a": 35, "b": 5, "c": 175},
    {"a": 35, "b": 6, "c": 210},
    {"a": 35, "b": 7, "c": 245},
    {"a": 35, "b": 8, "c": 280},
    {"a": 35, "b": 9, "c": 315},
    {"a": 35, "b": 10, "c": 350},
    {"a": 35, "b": 11, "c": 385},
    {"a": 35, "b": 12, "c": 420},
    {"a": 35, "b": 13, "c": 455},
    {"a": 35, "b": 14, "c": 490},
    {"a": 35, "b": 15, "c": 525},
    {"a": 35, "b": 16, "c": 560},
    {"a": 35, "b": 17, "c": 595},
    {"a": 35, "b": 18, "c": 630},
    {"a": 35, "b": 19, "c": 665},
    {"a": 35, "b": 20, "c": 700}
  ]

  const [printData, setPrintData] = useState()
  const [toggleRandomNumber, setToggleRandomNumber] = useState()
  const [saveRandomNumb, setSaveRandomNumb] = useState()

  const [message, setMessage] = useState('')
  const [updated, setUpdated] = useState('')

  const [result, setResult] = useState('') 
  
  const [bgColor, setBgColor] = useState('#242424') 

  const [correct, setCorrect] = useState(0)
  const [uncorrect, setUncorrect] = useState(0)

 


  useEffect(() =>{
    toggleNumber()
    
  },[])

  

  const toggleNumber = () =>{

    const list = data.map((item) =>{
      return [item.a , item.b, item.c] 
       })
   
       setPrintData(list)

    const random = Math.floor(Math.random() * 20) + 1;
    
    console.log(list);
    
    const numb = list[random]
   


    setSaveRandomNumb(numb[2])

    const finalNumber = `${numb[0]} * ${numb[1]} = ?`


    setToggleRandomNumber(finalNumber)
  }

  const handleChange = (e) =>{
    setMessage(e.target.value)
  }

  const handleKeyDown = (e) =>{
   if(e.key === 'Enter'){
    setUpdated(message)
    console.log(message);
    console.log(saveRandomNumb);
   
    
    if(message == saveRandomNumb){
      console.log(message, 'data' , saveRandomNumb, 'updated');
      setResult('true')
      toggleBackground('green')
      setCorrect(correct + 1)

    console.log('correct');
      
    }else{
      console.log(message, 'data' , saveRandomNumb, 'updated');
      setResult('false')
      toggleBackground('red')
      setUncorrect(uncorrect + 1)

      console.log('wrong');
      
    }
  

    e.target.value = ''
    toggleNumber()
    
   }
  }

const toggleBackground = (color) =>{

  setBgColor(color)

  setTimeout(() => {
    setBgColor('#242424');
  }, 300);

}


  return (
      <div className='App' style={{background:`${bgColor}`}}>
    
     <h1>{toggleRandomNumber}</h1>
      <input 
      onChange={handleChange}
      onKeyDown={handleKeyDown}></input>
      <button onClick={toggleNumber}>Random</button>


     
      <h1>{result}</h1>
      

      <h1>Correct: {correct}</h1>
      <h1>Uncorrect {uncorrect}</h1>
    
     
      </div>
  )
}

export default App
