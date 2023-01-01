import Todos from "./Todos";

export default function App(props) {
  return (
    <div className="app">
      <header className="app-header">
        <Todos />
      </header>
    </div>
  );
}
