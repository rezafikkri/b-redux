import { useSelector } from 'react-redux';
import { setFilter } from "./filtersSlice";
import useActions from "../../common/hooks/useActions";

export default function Footer() {
  const filter = useSelector((state) => state.filters.value);
  const boundSetFilter = useActions(setFilter);

  return (
    <footer>
      <span>Filter: </span>
      <button disabled={filter == 'ALL'} onClick={() => boundSetFilter('ALL')}>All</button>
      <button disabled={filter == 'COMPLETED'} onClick={() => boundSetFilter('COMPLETED')}>Completed</button>
      <button disabled={filter == 'ACTIVE'} onClick={() => boundSetFilter('ACTIVE')}>Active</button> 
    </footer>
  );
}
