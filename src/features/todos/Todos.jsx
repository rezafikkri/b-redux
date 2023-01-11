import { useSelector, useDispatch } from 'react-redux';
import { useGetTodosQuery, useToggleTodoMutation } from '../services/todos';
import Todo from "./Todo";

export default function Todos() {
  const filter = useSelector((state => state.filters.value));
  const { data: todos, error, isLoading, isFetching } = useGetTodosQuery(filter);
  const [ toggleTodo, result ] = useToggleTodoMutation();
  const dispatch = useDispatch();

  return (
    <ul>
    {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <>Loading...</>
    ) : isFetching ? (
      <>Featching...</>
    ) : todos ?
      todos.map((todo) => 
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo({id: todo.id, completed: !todo.completed})}/>
      )
    : null}
    </ul>
  );
}
