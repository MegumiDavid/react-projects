import TodoItem from './TodoItem';
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface TodoType {
    _id: string;
    text: string;
    checked: boolean;
}

interface TodoProps {
    todos: TodoType[];
}


export default function TodoListAll({ todos }:  TodoProps) : JSX.Element {
  const [listRef] = useAutoAnimate<HTMLUListElement>({ duration: 100 })
  return (
    <ul ref={listRef}>
        {
            todos.map((todo: TodoType) => (
                <TodoItem 
                    key={todo._id}
                    id={todo._id}
                    text={todo.text}
                    checked={todo.checked}
                />
            ))
        }
    </ul>
  )
}
