import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="border border-dark border-3 p-4">
      <h1 className="text-center">{counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} className="mx-2">Subtract</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};