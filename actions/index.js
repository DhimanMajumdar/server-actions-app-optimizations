"use server"

export async function createUser(prevState,formData) {
    const name=formData.get("name")
    console.log("The name is :" ,name)

    return { 
        error: name ? null : "Name is required", 
        success: true 
    }

}