import {useForm} from "react-hook-form";

import {createPost} from "../../services";

export default function PostForm() {
    const {register, handleSubmit} = useForm({});

    let submit = (e) => {
        createPost(e)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                Title: <input type="text"{...register("title", {required: true})}/><br/>
                Body: <input type="text"{...register("body", {required: true})}/><br/>
                <button>Save</button>


            </form>
        </div>
    );
}