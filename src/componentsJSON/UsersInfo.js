export default function UsersInfo({user}) {
    return (
        (<div>
            <b>
                ID: {user.id} <br/>
                Name: {user.name} <br/>
                Email: {user.email} <br/>
                Username: {user.username} <br/>
                Phone: {user.phone} <br/>

            </b>

        </div>)
    );
}