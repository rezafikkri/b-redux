import { useSelector, useDispatch } from 'react-redux';
import { useGetTodosQuery } from '../services/todos';
import Todo from "./Todo";

export default function Todos() {
  const filter = useSelector((state => state.filters.value));
  const { data: todos, error, isLoading, isFetching } = useGetTodosQuery(filter);
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
      todos.map((todo) => <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))}/>)
    : null}
    </ul>
  );
}
