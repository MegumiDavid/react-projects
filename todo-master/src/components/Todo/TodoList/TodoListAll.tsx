import TodoItem from './TodoItem';


interface TodoType {
    _id: string;
    text: string;
    checked: boolean;
}

interface TodoProps {
    todos: TodoType[];
}


export default function TodoListAll({ todos }:  TodoProps) : JSX.Element {
  return (
    <ul>
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
