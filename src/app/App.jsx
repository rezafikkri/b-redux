import Todos from "../features/todos/Todos";
import AddTodo from "../features/todos/AddTodo";
import Footer from "../features/filters/Footer";

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
