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

  const test = fireEvent.keyDown(expectedValue, { key: 'Enter', code: 'Enter' });
  
  
  const correctNoumber = document.getElementById('correctNoumber')


console.log(valueOfBlackJack.textContent, 'first');
console.log(  test , 'secound');

expect(correctNoumber.textContent).toBe('1');
 
   
   
   
  })


  
test('testing change value of blackjacks (1-100)',   () => {
  render(
    <MemoryRouter initialEntries={['/CountingBJ']}>
      <App />
    </MemoryRouter>
  )

  const first =  document.getElementById('first')

  fireEvent.click(first)

  const valueOfBlackJack =  document.getElementById('valueBJ')

  console.log(valueOfBlackJack.textContent, 'testtt1');

  const intValue = (valueOfBlackJack.textContent*1)

  expect(intValue).toBeLessThan(100);


})

test('testing change value of blackjacks (100-600)',   () => {
  render(
    <MemoryRouter initialEntries={['/CountingBJ']}>
      <App />
    </MemoryRouter>
  )

  const secound =  document.getElementById('secound')

  fireEvent.click(secound)

  const valueOfBlackJack =  document.getElementById('valueBJ')

  console.log(valueOfBlackJack.textContent, 'test2');

  const intValue = (valueOfBlackJack.textContent*1)

  expect(intValue).toBeGreaterThan(100);


})

