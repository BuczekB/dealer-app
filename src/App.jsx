import { Route, Routes } from 'react-router-dom'

import MultiplicationTable from './MultiplicationTable'
import HomePage from './HomePage'
import CountingBJ from "./CountingBJ"

import './App.css'

function App() {




  return (
      

     <Routes>
        <Route path='/dealer-app' element={<HomePage/>}></Route>
        <Route path='/MultiplicationTable' element={<MultiplicationTable/>}></Route>
        <Route path='/CountingBJ' element={<CountingBJ/>}></Route>
     </Routes>
      
    
     
      
  )
}

export default App
