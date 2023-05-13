import React, { useEffect, useState } from 'react';
import Card, { CardType } from './components/Card';
import axios from 'axios';
import { Todo } from './types/types';
import ItemsList from './components/ItemsList';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import NotFoundPage from './pages/NotFoundPage';
import { Link } from 'react-router-dom';
import UserPage from './pages/UserPage';
import TodoPage from './pages/TodoPage';

function App() {
  

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
        {/* <EventsExample/> */}
        <BrowserRouter>
            <div>
                <Link to="/users">Users</Link>
                <Link to="/todos">Todos</Link>
            </div>
            <Routes>
                <Route path='/users' element={<UsersPage/>}/>
                <Route path='/user/:id' element={<UserPage/>}/>
                <Route path='/todos' element={<TodosPage/>}/>
                <Route path='/todo/:id' element={<TodoPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
