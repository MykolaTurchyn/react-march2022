export default function Post({post}) {
    return (
        <div>
            <hr/>
            Post: {post.id}<br/>
            Body: {post.body}<br/>
            Title: {post.title}<br/>
        </div>
    );
}