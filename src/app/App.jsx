import Todos from "../features/todos/todosContainer";
import AddTodo from "../features/todos/addTodoContainer";
import Footer from "../features/filters/footerContainer";

export default function App(props) {
  return (
    <div className="app">
      <header className="app-header">
        <AddTodo />
        <Todos />
        <Footer />
      </header>
    </div>
  );
}
