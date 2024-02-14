import {expect, test} from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'


import '@testing-library/jest-dom'



import App from './App'


test('testing multiplication by one number ',   () => {
    
  render(
    <MemoryRouter initialEntries={['/MultiplicationTable']}>
      <App />
    </MemoryRouter>
  )

  const testingSingleNumber = (numb) =>{

 

  const buttonWithNumber = document.getElementById(`${numb}`)
  expect(buttonWithNumber).toBeInTheDocument();
 fireEvent.click(buttonWithNumber)

const numbersToMultiplication = document.getElementById('numbersToMultiplication')
const numbers = numbersToMultiplication.textContent 
const regex = /(\d+) \* (\d+) = \?/;
const match = numbers.match(regex);
const firstNumber = parseInt(match[1]);


if(numb === 'all'){
  const divisors = [35,17,11,8,5]
  const results = divisors.map((item) =>{
    return(firstNumber%item)
  })

  expect(results).toContain(0)

  return
}
  
 expect(firstNumber%numb).toBe(0)
  }

  testingSingleNumber(35)
  testingSingleNumber(17)
  testingSingleNumber(11)
  testingSingleNumber(8)
  testingSingleNumber(5)
  testingSingleNumber('all')

  })


test('testing correct answer ',   () => {
  render(
    <MemoryRouter initialEntries={['/MultiplicationTable']}>
      <App />
    </MemoryRouter>
  )

 
  
  const numbersToMultiplication = document.getElementById('numbersToMultiplication')
  const numbers = numbersToMultiplication.textContent
  const regex = /(\d+) \* (\d+) = \?/;
  const match = numbers.match(regex);
  const firstNumber = parseInt(match[1]);
  const secondNumber = parseInt(match[2]);


  const result = firstNumber * secondNumber


  const expectedValue = document.getElementById('valueToCheck')

  fireEvent.change(expectedValue, {target: {value: result}})

  fireEvent.keyDown(expectedValue, { key: 'Enter', code: 'Enter' });
  
  
  const correctNoumber = document.getElementById('correctNoumber')

  expect(correctNoumber.textContent).toBe('Correct: 1');

  })


  
  
  