import Todo from "./Todo";

export default function Todos({ todos, toggleTodo }) {
  return (
    <ul>
    {
      todos.map((todo) => <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>)
    }
    </ul>
  );
}
