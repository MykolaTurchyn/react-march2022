import {useEffect, useState} from "react";

import {getPosts} from "../../services";
import Post from "../post/Post";
import PostForm from "../postForm/PostForm";

export default function Posts() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value))
    },[])
    
    return (
        <div>
            <PostForm/>

            {
                posts.map((post) => <Post post={post} key={post.id}/>)
            }
        </div>
    );
}