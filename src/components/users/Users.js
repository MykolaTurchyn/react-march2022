import {useEffect, useState} from "react";

import {getUsers} from "../../services";
import {User, UserForm} from "../index";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, [])
    return (
        <div>
            <UserForm/>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );

}