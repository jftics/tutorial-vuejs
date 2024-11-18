import { API_USER } from "@/config";
import { sesionGetService } from "./sesionService";

export const userListService = async ()=>{
    const response = await fetch(`${API_USER}getUsers`,{
        method:'POST',
        headers:{
            'Content-Type':'Application/json',
            'authorization':'Bearer ' + sesionGetService('auth-token')
        },
        body:JSON.stringify({

        })

    })
    const data = await response.json()
    return data
}