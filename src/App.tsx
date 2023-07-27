import { useState } from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const [count, setCount] = useState(0);
  const contagem = useSelector((state: RootState) => state.counter.value);

  const increment = () => {
    setCount((prevCounter) => prevCounter + 1);
  };
  return (
    <>
      <div className=" flex flex-col items-center">
        Value: {count}
        <button
          className=" border-red-400 border-2 w-fit p-4"
          onClick={increment}
        >
          increment
        </button>
      </div>
      <div className=" border-black p-4 border-2 bg-amber-300 w-1/2 m-auto">
        {contagem}
      </div>
      <Counter/>
    </>
  );
}

export default App;
