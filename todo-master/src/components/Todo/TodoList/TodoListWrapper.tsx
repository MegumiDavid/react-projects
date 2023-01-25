import axios from 'axios';
import { useQuery } from 'react-query';
import { useAtom } from 'jotai';

import TodoListAll from './TodoListAll';
import TodoListCompleted from './TodoListCompleted';
import TodoListActive from './TodoListActive';

import filterAtom from '../../../states/filterAtom';


export default function TodoListWrapper() : JSX.Element {

  async function fetchTodos() {
    const response = (await axios.get('http://localhost:3001/todo')).data;   
    return response;
  }   

  const { data, status } = useQuery(["todos"], fetchTodos, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  const [filter] = useAtom(filterAtom);

  if (status === "loading") return <div className="list">Loading . . .</div>
  if (status === "error")   return <div className="list">Error</div>


  return (
    <>
        <div className="list">
                {filter === 'all' && <TodoListAll todos={data} />}
                {filter === 'active' && <TodoListActive todos={data} />}
                {filter === 'completed' && <TodoListCompleted todos={data} />}
        </div>
    </>
  )
}
