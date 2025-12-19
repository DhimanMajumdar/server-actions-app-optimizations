"use client"

import { createUser } from "@/actions"
import {useActionState} from "react"

const Form=()=>{
   const [state, formAction, isPending] = useActionState(createUser, {});
    return(
        <form action={formAction}>
             <input name="name" placeholder="Enter input" />
            <button type="submit">Create</button>
            
        </form>
    )
}

export default Form