import axios from 'axios';
import React, { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query';

interface TodoPost {
  text: string;
}

export default function Input() : JSX.Element {
  const [input, setInput] = useState<string>('');
  const queryClient = useQueryClient();

  async function createTodo() {
    if (!input) {
      alert('Invalid input');
      return;
    }

    setInput('');
    const todo: TodoPost = {
      text: input
    }
    await axios.post(`http://localhost:3001/todo`, todo);
  }

  const postMutate = useMutation(() => 
    createTodo(), 
    {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        },
        onError: () => {
            alert("there was an error");
        }
    }
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) : void {
    e.preventDefault();
    postMutate.mutate();
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="todo-input" placeholder="add details" value={input} required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
        <button type="submit" className="btn">Add</button>
    </form>
  )
}
