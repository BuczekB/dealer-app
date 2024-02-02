

import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {




  return (
      <div className='container' >
     <Link to="/MultiplicationTable">
     <button>Multiplication Table</button>
     </Link>
     <Link to="/CountingBJ">
     <button>Counting BJ</button>
     </Link>
     <Link to="/PokerPayments">
     <button>PokerPayments</button>
     </Link>
    
     
      </div>
  )
}

export default HomePage
