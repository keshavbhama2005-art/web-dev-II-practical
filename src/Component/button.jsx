import { useState } from "react";
function Button() {
  const [count, setCount] = useState(0);
  const handleClick = () => {    console.log("Button clicked!");
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (<div>
    <div>
        <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
    <div>
        <button onClick={decrement}>Decrement</button>
    </div>
    <div>
        <button onClick={() => setCount(0)}>reset</button>
    </div>
    </div>
  );
}
export default Button;