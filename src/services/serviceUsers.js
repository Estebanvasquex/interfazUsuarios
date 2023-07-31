import { usersInstance } from "./usersInstance"

export const getUsers = (page)=>{
    let users = usersInstance.get(`users?page=${page}`)
    return users
}