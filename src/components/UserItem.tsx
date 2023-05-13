import React, { FC } from "react";
import { User } from "../types/types";

interface UserItemProps {
    user: User;
    clickHandler?: (user: User) => void;
}

const UserItem:FC<UserItemProps> = ({user, clickHandler}) => {
    return (
        <div onClick={() => clickHandler?.call(clickHandler, user)} style={{margin: '15px', padding: '15px', border: '1px solid blue'}}>
            {user.id}. User {user.name}({user.email}) lives in {user.address.city} city on {user.address.street} street (code: {user.address.zipcode})
        </div>
    )
}

export default UserItem;