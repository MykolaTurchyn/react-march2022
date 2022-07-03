import Users from "./components/users/Users";
import {useState} from "react";
import {getUserPosts} from "./services";
import {Posts} from "./components";

export default function App() {
    const [posts, setPosts] = useState([]);
        const selected = (id) => getUserPosts(id).then(value => setPosts([...value.data]));
    return (
        <div>
            <Posts posts={posts}/>
            <hr/>
            <br/>
            <Users selected={selected}/>
        </div>
    );
}