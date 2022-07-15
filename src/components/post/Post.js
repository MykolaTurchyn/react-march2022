export default function Post({post}) {

    return (
        <div>
            <ul>
                <li><b>{post.id}</b></li>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>

        </div>
    );
}