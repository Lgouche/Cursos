import { useState } from 'react'
import Button from './Button'
import Display from './Display'
import Header from './Header'
import PercentageDisplay from './PercentageDisplay'  // Importamos el nuevo componente

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0)

  const plusGood = () => {
    const newGood = good + 1
    const newCount = newGood + neutral + bad
    setGood(newGood) 
    setCount(newCount)
  }

  const plusNeutral = () => {
    const newNeutral = neutral + 1
    const newCount = good + newNeutral + bad
    setNeutral(newNeutral)
    setCount(newCount)
  }

  const plusBad = () => {
    const newBad = bad + 1
    const newCount = good + neutral + newBad
    setBad(newBad)
    setCount(newCount)
  }

  return (
    <div>
      <Header text="¿Cuál es tu feedback?" />
      <Button onClick={plusGood} text='Good' />
      <Button onClick={plusNeutral} text='Neutral' />
      <Button onClick={plusBad} text='Bad' />
      <Display text='Good' counter={good} />
      <Display text='Neutral' counter={neutral} />
      <Display text='Bad' counter={bad} />
      <Display text='Total' counter={count} />
      
      {/* Llamamos al nuevo componente y le pasamos good y count como props */}
      <PercentageDisplay good={good} count={count} text='Good'/>
      <PercentageDisplay good={neutral} count={count} text='Neutral'/>
      <PercentageDisplay good={bad} count={count} text='Bad'/>
    </div>
  )
}

export default App
