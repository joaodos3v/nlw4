import { useState } from "react";
interface ButtonProps {
  color: string;
  children: string;
}

export function Button(props: ButtonProps) {
  const [counter, setCounter] = useState(1);

  function increment() {
    setCounter(prevCounter => prevCounter + 1);
  }

  return (
    <button
      type="button"
      style={{ backgroundColor: props.color, color: 'white' }}
      onClick={increment}
    >
      {props.children} - Counter: {counter}
    </button>
  )
}
