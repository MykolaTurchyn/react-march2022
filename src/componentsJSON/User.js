export default function User({chooseUser,user,user: {id, name}}) {
    return (
        <div>
            <ul>
                <li><b>{name}</b></li>
                    <button onClick={() => chooseUser(user)}>
                        more info
                    </button>
            </ul>

        </div>
    );
}