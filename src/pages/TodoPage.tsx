import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Todo } from '../types/types';
import { useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";

type TodoPageParams = {
    id?: string;
}

const TodoPage = () => {
    const { id }= useParams<TodoPageParams>();
    const [todo, setTodo] = useState<Todo | null>(null);


    const getTodo = async () => {
        try {
            const result = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
            setTodo(result.data);
        } catch (e) {
            alert(e);
        }
    }

    useEffect(() => {
        getTodo();
    }, [])

    return (
        <div>
            {todo &&
                <TodoItem todo={todo as Todo} />
            }
        </div>
    )
}

export default TodoPage;