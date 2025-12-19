const { createUser } = require("@/actions")

const UserForm=()=>{
    return (
        <form action={createUser}>
            <input name="name" placeholder="Enter input" />
            <button type="submit">Create</button>
            
        </form>
    )
}
export default UserForm