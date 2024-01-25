import {expect, test} from 'vitest'
import { render, fireEvent  } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom'





import App from './App'


test('testing correct counting BJ ',   () => {
  render(
    <MemoryRouter initialEntries={['/CountingBJ']}>
      <App />
    </MemoryRouter>
  )
    

  const valueOfBlackJack =  document.getElementById('valueBJ')
  const expectedValue = document.getElementById('valueToCheck')



  fireEvent.change(expectedValue, {target: {value: valueOfBlackJack.textContent*1.5}})


  fireEvent.keyDown(expectedValue, { key: 'Enter', code: 'Enter' });
  
  
  const correctNoumber = document.getElementById('correctNoumber')


console.log(correctNoumber.textContent);

expect(correctNoumber.textContent).toBe('1');
 
   
   
   
  })