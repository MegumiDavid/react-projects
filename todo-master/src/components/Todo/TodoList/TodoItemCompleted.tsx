import axios from 'axios';
import { useQueryClient, useMutation } from 'react-query';
import { useAtom } from 'jotai';
import authAtom from '../../../states/authAtom';

import { BsFillTrashFill } from 'react-icons/bs';


interface TodoItemProps {
    id: string;
    text: string;
    checked: boolean;
}

interface TodoItemUpdate {
    text: string;
    checked: boolean;
}


export default function TodoItem({ id, text, checked } : TodoItemProps) : JSX.Element {
  
  const queryClient = useQueryClient();
  const [auth] = useAtom(authAtom);

  async function updateChecked() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`,
    }
    const todo: TodoItemUpdate = {
        text,
        checked: !checked
    } 
    await axios.put(`http://localhost:3001/todo/${id}`, todo, { headers: headers });
  }

  async function deleteChecked() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`,
    }
    await axios.delete(`http://localhost:3001/todo/${id}`, { headers: headers });
  }

  const updateMutate = useMutation(() => 
    updateChecked(), 
    {
        onSuccess: () => {
            queryClient.invalidateQueries(["todos"]);      
        },
        onError: () => {
             alert("there was an error")
        }
    });

  const deleteMutate = useMutation(() => 
    deleteChecked(), 
    {
        onSuccess: () => {
          queryClient.invalidateQueries(["todos"]);       
        },
        onError: () => {
            alert("there was an error");
        }
    });

  return (
    <li>
        <div className="li-wrapper">
            <input type="checkbox" name="todoItem" id="todoItem1" checked={checked ? true : false} readOnly={true} onClick={() => updateMutate.mutate()}/>
            <label htmlFor="todoItem" className={checked ? 'checked' : ''}>{ text }</label>
        </div>
        <button className="btn-delete" onClick={() => deleteMutate.mutate()}>
            <i className="delete-icon">
                    <BsFillTrashFill/>
            </i>
        </button>
    </li>
  )
}
