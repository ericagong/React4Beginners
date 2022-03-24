import { useState, useEffect } from 'react'
import Button from './Button'
import styles from './App.module.css'

// All codes in component are called when any state changes.
// To prevent this, use useEffect(function, [state]). function in useEffect is called only when [state] changes!
function App() {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState()
  const onClickCounter = () => {
    setCounter((current) => current + 1)
  }
  const onChange = (event) => {
    setKeyword(event.target.value)
  }
  console.log('I call all the time.')
  useEffect(() => console.log('I run only once.'), [])
  useEffect(() => console.log('I run when counter changed.'), [counter])
  useEffect(() => console.log('I run when keyword changed.'), [keyword])
  useEffect(() => console.log('I run when counter OR keyword changed.'), [
    counter,
    keyword,
  ])

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={keyword}
        onChange={onChange}
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClickCounter}>Click me</button>
    </div>
  )
}

export default App
