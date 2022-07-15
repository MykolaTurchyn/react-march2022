import {useForm} from "react-hook-form";

import {createUser} from "../../services";

export default function UserForm() {
    const {register, handleSubmit} = useForm({});

    let submit = (e) => {
        createUser(e)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                Name:<input type="text" {...register("name", {required: true})}/><br/>
                User name:<input type="text"{...register("username", {required: true})}/><br/>
                Email: <input type="text"{...register("email", {required: true})}/><br/>
                <button>Save</button>


            </form>
        </div>
    );
}