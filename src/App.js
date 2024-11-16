import { useState } from "react";
import './style.css';
import ba from './ba.png'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="container">
      <img style={{width:'100%',height:'100%'}} src={ba}></img>
      <div className="counter-app-container">
        <h1>Counter</h1>
        <h1>{count}</h1>
        <div className="button-container">
          <button className="increment-btn" onClick={increment}>Increment</button>
          <button className="decrement-btn" onClick={decrement}>Decrement</button>
          <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
