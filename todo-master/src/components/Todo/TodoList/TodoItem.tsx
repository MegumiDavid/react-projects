import axios from 'axios';
import { useQueryClient, useMutation } from 'react-query';


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

  return (
    <li>
        <input 
            onClick={() => updateMutate.mutate()}
            type="checkbox" 
            checked={checked ? true : false}
            name="todoItem" 
            readOnly={true}
            id={id} 
        />
        <label className={checked ? 'checked' : ''}>{ text }</label>
    </li>
  )
}
