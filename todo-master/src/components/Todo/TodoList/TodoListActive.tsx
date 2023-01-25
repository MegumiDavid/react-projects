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


export default function TodoListActive({ todos }:  TodoProps) : JSX.Element {
    const [listRef] = useAutoAnimate<HTMLUListElement>({ duration: 150 })
    return (
        <ul ref={listRef}>
            {
                todos.filter(todo => todo.checked === false).map(todo => (
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
