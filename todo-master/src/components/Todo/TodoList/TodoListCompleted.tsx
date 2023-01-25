import TodoItemCompleted from './TodoItemCompleted';
import { useAutoAnimate } from '@formkit/auto-animate/react'


interface TodoType {
    _id: string;
    text: string;
    checked: boolean;
}

interface TodoProps {
    todos: TodoType[];
}


export default function TodoListCompleted({ todos }:  TodoProps) : JSX.Element {
    const [listRef] = useAutoAnimate<HTMLUListElement>({ duration: 150 })
    return (
        <ul className='list-completed' ref={listRef}>
            {
                todos.filter(todo => todo.checked === true).map(todo => (
                    <TodoItemCompleted 
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
