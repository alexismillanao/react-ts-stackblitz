import * as React from 'react';
import { useState } from 'react';
import './style.css';

const Counter = ({ counter, increment }) => {
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}>aumentar conteo</button>
    </div>
  );
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return <Counter counter={counter} increment={increment} />;
}
