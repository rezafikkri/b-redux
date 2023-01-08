import { connect } from "react-redux";
import { addTodo } from "./todosSlice";
import AddTodo from "./AddTodo"; 

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text))
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
