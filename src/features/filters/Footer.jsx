export default function Footer({ filter, setFilter }) {
  return (
    <footer>
      <span>Filter: </span>
      <button disabled={filter == 'ALL'} onClick={() => setFilter('ALL')}>All</button>
      <button disabled={filter == 'COMPLETED'} onClick={() => setFilter('COMPLETED')}>Completed</button>
      <button disabled={filter == 'ACTIVE'} onClick={() => setFilter('ACTIVE')}>Active</button> 
    </footer>
  );
}
