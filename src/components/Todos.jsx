export default function Todos(props) {
  const todos = ["Menyapu", "Membersihkan", "Belajar"];

  return (
    <ul>
    {
      todos.map((todo, index) => <li key={index}>{todo}</li>)
    }
    </ul>
  );
}
