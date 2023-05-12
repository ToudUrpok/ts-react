import React, { FC } from "react";
import { Todo } from "../types/types";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{margin: '15px', padding: '15px', border: '1px solid blue'}}>
            {todo.id}. Task <span style={{fontWeight:'bold'}}>{todo.title}</span> <input type="checkbox" checked={todo.completed} />.
        </div>
    )
}

export default TodoItem;