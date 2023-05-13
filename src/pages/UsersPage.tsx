import React, { useState, useEffect } from "react";
import axios from 'axios';
import { User } from '../types/types';
import ItemsList from "../components/ItemsList";
import UserItem from "../components/UserItem";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([])
    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const result = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(result.data);
        } catch (e) {
            alert(e);
        }
        
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <ItemsList
                items={users}
                renderItem={(user) => <UserItem key={user.id} clickHandler={(user) => navigate(`/user/${user.id}`)} user={user} /> }
            />
        </div>
    )
}

export default UsersPage;