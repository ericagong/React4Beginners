import { useState, useEffect } from "react";
// import Button from "./Button";
import styles from './App.module.css';

function Greeting() {
  function effectFunc () {
    console.log("Component is created :)");
    return destroyFunc; // function in useEffect should return cleanup function, which only works when component is destroyed.
  }
  function destroyFunc () {
    console.log("Component is destroyed :(");
  }
  // Called when Greeting component is created.
  useEffect(effectFunc, [])
  return (
    <div>
      <h1>Hello :)</h1>
    </div>
  )
}

// All codes in component are called when any state changes. 
// To prevent this, use useEffect(function, [state]). function in useEffect is called only when [state] changes!
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState();
  const onClickCounter = () => {
    setCounter((current) => current + 1);
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  useEffect(()=> console.log("I run only once."),[]);
  useEffect(()=> console.log("I run when counter changed."), [counter]);
  useEffect(() => console.log("I run when keyword changed."), [keyword]);
  useEffect(() => console.log("I run when counter OR keyword changed."), [counter, keyword]);

  const [showing, setShowing] = useState(false);
  const onClickShowing = () => setShowing((current) => !current);

  return (
    <div>
      <input type="text" placeholder="Search here" value={keyword} onChange={onChange}/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClickCounter}>Click me</button>
      <button onClick={onClickShowing}>{(showing)? "Hide": "Show"}</button>
      {(showing) ? <Greeting/> : null}
      {/* <Button text="Click me"/> */}
    </div>
  );
}

export default App;
