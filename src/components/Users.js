import {useEffect, useState} from "react";
import {getUserById, getUsers} from "../services/Placeholder-API";
import User from "./User";
import UsersInfo from "./UsersInfo";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const chooseUser = (user) => {
        setUser(user);
    }
    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, [])
    return (
        <div>
            {
                user && <UsersInfo user={user}/>

            }
            {
                users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                        chooseUser={chooseUser}
                    />)
            }

        </div>
    );
}