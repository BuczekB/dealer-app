

import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {




  return (
      <div className='container' >

     <h1>HomePage</h1>
      

     <Link to="/MultiplicationTable">
     <button>Multiplication Table</button>
     </Link>
     <Link to="/CountingBJ">
     <button>Counting BJ</button>
     </Link>
    
     
      </div>
  )
}

export default HomePage
