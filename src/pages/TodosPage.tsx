import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Todo } from '../types/types';
import ItemsList from "../components/ItemsList";
import TodoItem from "../components/TodoItem";
import { useNavigate } from "react-router-dom";

const TodosPage = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const navigate = useNavigate();

    const getTodos = async () => {
        try {
            const result = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20');
            setTodos(result.data);
        } catch (e) {
            alert(e);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <div>
            <ItemsList
                items={todos}
                renderItem={(todo) => <TodoItem clickHandler={(id) => navigate(`/todo/${id}`)} key={todo.id} todo={todo} /> }
            />
        </div>
    )
}

export default TodosPage;