import axios from "axios"

const instance=axios.create({
    baseURL:'http://localhost:4444'
})

export const apiGetUsers=()=>{
    return instance.get('/users').then(response=>response.data)
}
export const apiCreateUser=(usersData)=>{
    return instance.post('/auth/register', {
        email:usersData.email,
        password: usersData.password,
        fullName:usersData.fullName,

    }).then(response=>console.log(response))
}
export const apiCreateItem=(itemData)=>{
    return instance.post('/item', itemData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }}).then(response=>console.log(response))
}

export default instance;