import { connect } from "react-redux";
import Todos from "./Todos"; 
import { toggleTodo } from "./todosSlice";

function getTodos(todos, filter) {
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

const mapStateToProps = (state) => ({ todos: getTodos(state.todos, state.filters.value)});

export default connect(mapStateToProps, { toggleTodo })(Todos);
