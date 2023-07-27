import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useState } from "react";

export function Counter() {
 const count = useSelector((state: RootState) => state.counter.value);
 const dispatch = useDispatch();
 const [amount, setAmount] = useState(0);

 return (
  <div className=" flex justify-center m-10">
   <div className=" flex gap-3">
    <button
     className=" border-black p-4 border-2"
     aria-label="Increment Value"
     onClick={() => dispatch(increment())}
    >
     Increment
    </button>
    <span className=" bg-orange-400 p-4 border-black border-2">{count}</span>
    <button
     className=" border-black p-4 border-2"
     aria-label="Decrement Value"
     onClick={() => dispatch(decrement())}
    >
     Decrement
    </button>
    
    <div className=" flex flex-col gap-4">
      <input onChange={(event) => setAmount(+event.target.value)} type="number" className=" border-pink-600 border-2" placeholder="escolha o valor"/>
      <button className=" border-blue-600 border-2" onClick={() => dispatch(incrementByAmount(amount))}>
        Increment By Amount
      </button>
    </div>
   </div>
  </div>
 );
}
