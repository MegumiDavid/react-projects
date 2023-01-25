import axios from 'axios';
import { useQueryClient, useMutation } from 'react-query';

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

  async function updateChecked() {
    const todo: TodoItemUpdate = {
        text,
        checked: !checked
    } 
    await axios.put(`http://localhost:3001/todo/${id}`, todo);
  }

  async function deleteChecked() {
    await axios.delete(`http://localhost:3001/todo/${id}`);
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
