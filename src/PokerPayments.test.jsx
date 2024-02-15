import {expect, test} from 'vitest'
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'


import '@testing-library/jest-dom'



import App from './App'


test('testing poker payments american poker',   () => {

    const dataAmerican = [
        {name: 'BigPoker', blind: 500, bonus: 50},
        {name: 'SmallPoker', blind: 50, bonus: 40},
        {name: 'FourOfCards', blind: 10, bonus: 30},
        {name: 'Full', blind: 3, bonus: 9},
        {name: 'Flush', blind: 3/2, bonus: 7},
        {name: 'Strit', blind: 1, bonus: 4},
        {name: 'ThreOfCards', blind: 0, bonus: 3},
    ]
    
    
  render(
    <MemoryRouter initialEntries={['/PokerPayments']}>
      <App />
    </MemoryRouter>
  )

  


    const blindOrAnteButton = document.getElementById('blindOrAnte')
    const bonusButton = document.getElementById('bonus')
    const nameOfHand = document.getElementById('nameOfHand')

    const choosenHand = dataAmerican.find(obj => obj.name === nameOfHand.textContent)
        
    

   
fireEvent.change(blindOrAnteButton, {target: {value: choosenHand.blind}})
fireEvent.change(bonusButton, {target: {value: choosenHand.bonus}})

fireEvent.keyDown(bonusButton, { key: 'Enter', code: 'Enter' });


  
  const correctNoumber = document.getElementById('correctNoumber')
  expect(correctNoumber.textContent).toBe('1');


   

})


test('testing poker payments russian poker',   () => {

    
 
    const dataRussian = [
        {name: 'BigPoker', bet: 100, bonus: 10000},
        {name: 'SmallPoker', bet: 50, bonus: 2000},
        {name: 'FourOfCards', bet: 20, bonus: 500},
        {name: 'Full', bet: 7, bonus: 200},
        {name: 'Flush', bet: 5, bonus: 100},
        {name: 'Strit', bet: 4, bonus: 50},
        {name: 'ThreOfCards', bet: 3, bonus: 0},
        {name: 'TwoPair', bet: 2, bonus: 0},
        {name: 'OnePair', bet: 1, bonus: 0},
    ]
    
  render(
    <MemoryRouter initialEntries={['/PokerPayments']}>
      <App />
    </MemoryRouter>
  )

    const changePokerButton = document.getElementById('secound')
    fireEvent.click(changePokerButton)


    const blindOrAnteButton = document.getElementById('blindOrAnte')
    const bonusButton = document.getElementById('bonus')
    const nameOfHand = document.getElementById('nameOfHand')

    const choosenHand = dataRussian.find(obj => obj.name === nameOfHand.textContent)
        
    

   
fireEvent.change(blindOrAnteButton, {target: {value: choosenHand.bet}})
fireEvent.change(bonusButton, {target: {value: choosenHand.bonus}})

fireEvent.keyDown(bonusButton, { key: 'Enter', code: 'Enter' });


  
  const correctNoumber = document.getElementById('correctNoumber')
  expect(correctNoumber.textContent).toBe('1');


   

})
