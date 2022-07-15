export default function User({user}) {
    return (
        <div>
            <ul>
                <li><b>{user.id}</b></li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </ul>
        </div>
    );
}