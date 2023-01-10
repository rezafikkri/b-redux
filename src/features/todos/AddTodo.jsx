import { nanoid } from '@reduxjs/toolkit';
import { useAddTodoMutation } from '../services/todos';

export default function AddTodo() {
  let textInput;
  const [ addTodo, { isLoading } ] = useAddTodoMutation();

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!textInput.value.trim()) return;
    
    addTodo({ id: nanoid(), text: textInput.value, completed: false });
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={element => textInput = element}/>
      <button type="submit">{isLoading ? 'Loading...' : 'Add todo'}</button>
    </form>
  );
}
