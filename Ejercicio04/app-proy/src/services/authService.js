import { API_AUTH } from "@/config"

export const loginService = async (username, password)=>{
    console.log(username, password)
    const url = API_AUTH + 'login'

    const response = await fetch(url, {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    const data = await response.json()
    return data
}