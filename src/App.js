import { Users} from "./components";
import { useState} from "react";
import Posts from "./components/posts/Posts";

export default function App() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    const showUsers = () => {
        setOpen(!open);
    }
    const showPosts = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <button onClick={showUsers}>
                Users
            </button>

            <button onClick={showPosts}>
                Posts
            </button>

            {
                open && <Users />
            }
            {
                visible && <Posts/>
            }

        </div>
    );
}