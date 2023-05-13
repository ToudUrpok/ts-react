import React, { FC } from "react";
import { Todo } from "../types/types";

interface TodoItemProps {
    todo: Todo;
    clickHandler?: (id: number) => void
}

const TodoItem:FC<TodoItemProps> = ({todo, clickHandler}) => {
    return (
        <div onClick={() => clickHandler?.call(clickHandler, todo.id)} style={{margin: '15px', padding: '15px', border: '1px solid blue'}}>
            {todo.id}. Task <span style={{fontWeight:'bold'}}>{todo.title}</span> <input type="checkbox" checked={todo.completed} />.
        </div>
    )
}

export default TodoItem;