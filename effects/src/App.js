import { useState, useEffect } from 'react'
import Button from './Button'
import styles from './App.module.css'

function Greeting() {
  // Cleanup function : useEffect return function form in complex way
  useEffect(() => {
    console.log('Component created :)')
    return () => console.log('Component destroyed :(')
  })
  // Cleanup function : useEffect return function form in clean way
  function createdFn() {
    console.log('created')
    return destroyedFn
  }
  function destroyedFn() {
    console.log('destroyed')
  }
  useEffect(createdFn, [])
  return <h1>Hello</h1>
}

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
  const [showing, setShowing] = useState(false)
  const onClickShowing = () => {
    setShowing((curr) => !curr)
  }
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
      <button onClick={onClickShowing}>{showing ? 'Hide' : 'Show'}</button>
      {showing ? <Greeting /> : null}
    </div>
  )
}

export default App
