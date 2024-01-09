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
    {"a": 35, "b": 20, "c": 700},
    {"a": 17, "b": 1, "c": 17},
    {"a": 17, "b": 2, "c": 34},
    {"a": 17, "b": 3, "c": 51},
    {"a": 17, "b": 4, "c": 68},
    {"a": 17, "b": 5, "c": 85},
    {"a": 17, "b": 6, "c": 102},
    {"a": 17, "b": 7, "c": 119},
    {"a": 17, "b": 8, "c": 136},
    {"a": 17, "b": 9, "c": 153},
    {"a": 17, "b": 10, "c": 170},
    {"a": 17, "b": 11, "c": 187},
    {"a": 17, "b": 12, "c": 204},
    {"a": 17, "b": 13, "c": 221},
    {"a": 17, "b": 14, "c": 238},
    {"a": 17, "b": 15, "c": 255},
    {"a": 17, "b": 16, "c": 272},
    {"a": 17, "b": 17, "c": 289},
    {"a": 17, "b": 18, "c": 306},
    {"a": 17, "b": 19, "c": 323},
    {"a": 17, "b": 20, "c": 340},
    {"a": 11, "b": 1, "c": 11},
  {"a": 11, "b": 2, "c": 22},
  {"a": 11, "b": 3, "c": 33},
  {"a": 11, "b": 4, "c": 44},
  {"a": 11, "b": 5, "c": 55},
  {"a": 11, "b": 6, "c": 66},
  {"a": 11, "b": 7, "c": 77},
  {"a": 11, "b": 8, "c": 88},
  {"a": 11, "b": 9, "c": 99},
  {"a": 11, "b": 10, "c": 110},
  {"a": 11, "b": 11, "c": 121},
  {"a": 11, "b": 12, "c": 132},
  {"a": 11, "b": 13, "c": 143},
  {"a": 11, "b": 14, "c": 154},
  {"a": 11, "b": 15, "c": 165},
  {"a": 11, "b": 16, "c": 176},
  {"a": 11, "b": 17, "c": 187},
  {"a": 11, "b": 18, "c": 198},
  {"a": 11, "b": 19, "c": 209},
  {"a": 11, "b": 20, "c": 220},
  {"a": 8, "b": 1, "c": 8},
  {"a": 8, "b": 2, "c": 16},
  {"a": 8, "b": 3, "c": 24},
  {"a": 8, "b": 4, "c": 32},
  {"a": 8, "b": 5, "c": 40},
  {"a": 8, "b": 6, "c": 48},
  {"a": 8, "b": 7, "c": 56},
  {"a": 8, "b": 8, "c": 64},
  {"a": 8, "b": 9, "c": 72},
  {"a": 8, "b": 10, "c": 80},
  {"a": 8, "b": 11, "c": 88},
  {"a": 8, "b": 12, "c": 96},
  {"a": 8, "b": 13, "c": 104},
  {"a": 8, "b": 14, "c": 112},
  {"a": 8, "b": 15, "c": 120},
  {"a": 8, "b": 16, "c": 128},
  {"a": 8, "b": 17, "c": 136},
  {"a": 8, "b": 18, "c": 144},
  {"a": 8, "b": 19, "c": 152},
  {"a": 8, "b": 20, "c": 160},
  {"a": 5, "b": 1, "c": 5},
  {"a": 5, "b": 2, "c": 10},
  {"a": 5, "b": 3, "c": 15},
  {"a": 5, "b": 4, "c": 20},
  {"a": 5, "b": 5, "c": 25},
  {"a": 5, "b": 6, "c": 30},
  {"a": 5, "b": 7, "c": 35},
  {"a": 5, "b": 8, "c": 40},
  {"a": 5, "b": 9, "c": 45},
  {"a": 5, "b": 10, "c": 50},
  {"a": 5, "b": 11, "c": 55},
  {"a": 5, "b": 12, "c": 60},
  {"a": 5, "b": 13, "c": 65},
  {"a": 5, "b": 14, "c": 70},
  {"a": 5, "b": 15, "c": 75},
  {"a": 5, "b": 16, "c": 80},
  {"a": 5, "b": 17, "c": 85},
  {"a": 5, "b": 18, "c": 90},
  {"a": 5, "b": 19, "c": 95},
  {"a": 5, "b": 20, "c": 100},
  ]

  const [printData, setPrintData] = useState()
  const [toggleRandomNumber, setToggleRandomNumber] = useState()
  const [saveRandomNumb, setSaveRandomNumb] = useState()

  const [message, setMessage] = useState('')
  const [updated, setUpdated] = useState('')

  const [result, setResult] = useState('') 
  
  const [bgColor, setBgColor] = useState('App') 

  const [correct, setCorrect] = useState(0)
  const [uncorrect, setUncorrect] = useState(0)


  const [selectNumbers, setSelectNumbers] = useState([{a: 99}, {b:0}])
 


  useEffect(() =>{
    toggleNumber(99,0)
    
  },[])

  

  const toggleNumber = (a,b) =>{

    const list = data.map((item) =>{
      return [item.a , item.b, item.c] 
       })
   
       setPrintData(list)

       

    const random = Math.floor(Math.random() * (a - b + 1) + b);
    
  
    
    const numb = list[random]
   


    setSaveRandomNumb(numb[2])

    const finalNumber = `${numb[0]} * ${numb[1]} = ?`


    setToggleRandomNumber(finalNumber)
  }

  const handleChange = (e) =>{
    setMessage(e.target.value)
  }

  const handleKeyDown = (e) =>{
    console.log(e.target.type);
   if(e.key === 'Enter' || e.target.type === 'submit'){
    setUpdated(message)
   
   
    
    if(message == saveRandomNumb){
      
      setResult('true')
      toggleBackground('appBgGreen')
      setCorrect(correct + 1)

    console.log('correct');
      
    }else{
     
      setResult('false')
      toggleBackground('appBgRed')
      setUncorrect(uncorrect + 1)

     
      
    }
  

    e.target.value = ''

    const {a} = selectNumbers[0]  
    const {b} = selectNumbers[1]  

    toggleNumber(a , b)
    
   }
  }

const toggleBackground = (color) =>{

  setBgColor(color)

  setTimeout(() => {
    setBgColor('App');
  }, 150);

}

const changeNumbers = (numb) =>{

  

  
  switch (numb) {
    case 'all':
        toggleNumber(99, 0)
      break;
      case 35:
          toggleNumber(19, 0)
          setSelectNumbers([{a: 19}, {b:0}])
        break;
        case 17:  
         toggleNumber(39,20)
         setSelectNumbers([{a: 39}, {b:20}])
        break;
        case 11:
           toggleNumber(59, 40)
           setSelectNumbers([{a: 59}, {b:40}])
        break;
        case 8:
           toggleNumber(79, 60)
           setSelectNumbers([{a: 79}, {b:60}])
        break;
        case 5:  
             toggleNumber(99, 80)
             setSelectNumbers([{a: 99}, {b:80}])
          break;
    default:
      break

  }


}




  return (
      <div className='container' >

        <div className='buttonBox'>
          <button onClick={() => changeNumbers(35)}>35x1-20</button>
          <button onClick={() => changeNumbers(17)}>17x1-20</button>
          <button onClick={() => changeNumbers(11)}>11x1-20</button>
          <button onClick={() => changeNumbers(8)}>8x1-20</button>
          <button onClick={() => changeNumbers(5)}>5x1-20</button>
          <button onClick={() => changeNumbers('all')}>ALL</button>
        </div>

       <div className='workBox'>
       <div className='correct'>
        <h1>Correct: {correct}</h1>
        </div>
    
     <div className='inputBox'>
     <h1>{toggleRandomNumber}</h1>
      <input 
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      ></input>
      <button className='mobileButton' onClick={handleKeyDown}>CHECK</button>
     </div>
      
     <div className='uncorrect'>
     <h1>Uncorrect: {uncorrect}</h1>
        </div>
       </div>
      
    
     
      </div>
  )
}

export default App
