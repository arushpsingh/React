import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const onButtonClick = () => {
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={onButtonClick}>CLick Me</button>
      <h1>Current Count: {count}</h1>
    </div>
  )
}

export default App;