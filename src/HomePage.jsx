import './HomePage.css'
import { Link } from 'react-router-dom'
import  Button  from './atoms/button/Button'

function HomePage() {

  return (
      <div className='container' >
     <Link to="/MultiplicationTable">
     <Button text='Multiplication Table'/>
     </Link>
     <Link to="/CountingBJ">
     <Button text='Counting BJ'/>
     </Link>
     <Link to="/PokerPayments">
     <Button text='PokerPayments'/>
     </Link>
      </div>
  )
}

export default HomePage
