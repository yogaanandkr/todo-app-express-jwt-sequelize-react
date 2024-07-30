import axios from 'axios';

const api_base_url = 'http://localhost:3001'

export const register = (username: string, password: string)=>{
    return axios.post(`${api_base_url}/auth/register`, {username, password})
}

export const login = (username: string, password: string)=>{
    console.log(username, password);
    console.log('sending axios post request/api.ts');
    return axios.post(`${api_base_url}/auth/login`, {username, password})
}


export const getTodos = (token: string)=>{
    return axios.get(`${api_base_url}/todos`,{
        headers: {Authorization: token}
    })
}

export const createTodo = (token: string, title: string, description: string)=>{
    return axios.post(`${api_base_url}/todos`, {title, description}, {
        headers: {Authorization: token}
    })
}

export const updateTodo = (token: string, id: number, title: string, description: string, completed: boolean)=>{
    return axios.put(`${api_base_url}/todos/${id}`, {title, description, completed}, {
        headers: {Authorization: token}
    })
}

export const deleteTodo = (token: string, id: number)=>{
    return axios.delete(`${api_base_url}/todos/${id}`, {
        headers: {Authorization: token}
    })
}