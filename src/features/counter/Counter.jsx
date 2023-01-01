import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export default function Counter(props) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <p>{count}</p>
    </div>
  );
}
