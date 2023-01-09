import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './todosSlice';
import filterTodos from '../services/filterTodos';
import Todo from "./Todo";

export default function Todos() {
  const todos = useSelector((state) => filterTodos(state.todos, state.filters.value));
  const dispatch = useDispatch();

  return (
    <ul>
    {
      todos.map((todo) => <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))}/>)
    }
    </ul>
  );
}
