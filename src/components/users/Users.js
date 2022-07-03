import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import {User} from "../../components";

export default function Users({selected}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));

    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} selected={selected}/>)
            }
        </div>
    );
}