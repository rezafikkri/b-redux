export default function filterTodos(todos, filter) {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'ACTIVE':
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error('Filter tidak dikenali: ' + filter);
      break;
  }
}
