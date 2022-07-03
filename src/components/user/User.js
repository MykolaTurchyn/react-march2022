export default function User({user,selected}) {
    return (
        <div>
            <ul>

                <li> {user.id}</li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <button
                    onClick={() => selected(user.id)}
                >select</button>
            </ul>
        </div>
    );
}