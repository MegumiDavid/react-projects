import axios from 'axios';
import { useAtom } from 'jotai';
import React, { useState } from 'react'
import { useQueryClient, useMutation } from 'react-query';
import authAtom from '../../states/authAtom';

interface TodoPost {
  text: string;
}

export default function Input() : JSX.Element {
  const [input, setInput] = useState<string>('');
  const [auth] = useAtom(authAtom);
  const queryClient = useQueryClient();

  async function createTodo() {
    if (!input) {
      alert('Invalid input');
      return;
    }

    setInput('');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`,
      'userId': auth.userId
    }
    const todo: TodoPost = {
      text: input
    }
    await axios.post(`http://localhost:3001/todo`, todo, {headers: headers});
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
    <form onSubmit={handleSubmit} style={{marginBottom: '2.5rem'}}>
        <input type="text" name="todo-input" placeholder="add details" value={input} required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
        <button type="submit" className="btn">Add</button>
    </form>
  )
}
