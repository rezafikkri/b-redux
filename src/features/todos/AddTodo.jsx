import { useDispatch } from 'react-redux';
import { addTodo } from "./todosSlice";

export default function AddTodo() {
  const dispatch = useDispatch();
  let textInput;

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!textInput.value.trim()) return;

    dispatch(addTodo(textInput.value));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={element => textInput = element}/>
      <button type="submit">Add todo</button>
    </form>
  );
}
