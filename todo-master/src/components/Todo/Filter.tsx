import { useAtom } from 'jotai';
import filterAtom from '../../states/filterAtom';

export default function Filter() : JSX.Element {
  const [filter, setFilter] = useAtom(filterAtom);

  return (
    <div className="filter">
        <div className="btn-wrapper">
            <button className="add" onClick={() => setFilter('all')}>All</button>
            <span className={filter === 'all' ? 'selected' : ''}></span>
        </div>
        <div className="btn-wrapper">
            <button className="add" onClick={() => setFilter('active')}>Active</button>
            <span className={filter === 'active' ? 'selected' : ''}></span>
        </div>
        <div className="btn-wrapper">
            <button className="add" onClick={() => setFilter('completed')}>Completed</button>
            <span className={filter === 'completed' ? 'selected' : ''}></span>
        </div>
        <hr />
    </div>
  )
}
