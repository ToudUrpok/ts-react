import React, { useEffect, useState } from 'react';
import Card, { CardType } from './components/Card';
import axios from 'axios';
import { Todo, User } from './types/types';
import ItemsList from './components/ItemsList';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [todos, setTodos] = useState<Todo[]>([]);

  const getUsers = async () => {
    try {
      const result = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(result.data);
    } catch (e) {
      alert(e);
    }
    
  }

  const getTodos = async () => {
    try {
      const result = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20');
      setTodos(result.data);
    } catch (e) {
      alert(e);
    }
    
  }

  useEffect(() => {
    getUsers();
    getTodos();
  }, [])

  return (
    <div className="App">
        {/* <Card 
          height='200px' 
          width='200px' 
          type={CardType.primary}
          onClick={(num) => console.log(`Display ${num}`)}
        >
          <button onClick={e => e.stopPropagation()}>
            Test Button
          </button>
        </Card> */}
        {/* <ItemsList
          items={users}
          renderItem={(user) => <UserItem key={user.id} user={user} /> }
        /> */}
        <EventsExample/>
        <ItemsList
          items={todos}
          renderItem={(todo) => <TodoItem key={todo.id} todo={todo} /> }
        />
    </div>
  );
}

export default App;
