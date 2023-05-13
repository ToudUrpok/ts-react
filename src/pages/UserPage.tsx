import React, { useState, useEffect } from "react";
import axios from 'axios';
import { User } from '../types/types';
import UserItem from "../components/UserItem";
import { useParams } from "react-router-dom";

type UserPageParams = {
    id?: string;
}

const UserPage = () => {
    const { id }= useParams<UserPageParams>();
    const [user, setUser] = useState<User | null>(null);

    const getUser = async () => {
        try {
            const result = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(result.data);
        } catch (e) {
            alert(e);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div>
            {user &&
                <UserItem user={user as User} />
            }
        </div>
    )
}

export default UserPage;