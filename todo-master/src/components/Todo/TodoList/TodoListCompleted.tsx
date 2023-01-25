import TodoItemCompleted from './TodoItemCompleted';


interface TodoType {
    _id: string;
    text: string;
    checked: boolean;
}

interface TodoProps {
    todos: TodoType[];
}


export default function TodoListCompleted({ todos }:  TodoProps) : JSX.Element {

    return (
        <div className='list-completed'>
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
        </div>
      )
}
