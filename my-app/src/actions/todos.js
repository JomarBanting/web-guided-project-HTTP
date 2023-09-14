import axios from "axios";

const baseUrl = "http://localhost:3001";
const todosUrl = baseUrl + "/todos";

export const getTodos = () => {
    return axios.get(todosUrl).then(res => res.data)
}

export const postTodo = (description) => {
    const todo = {
        description: description,
        isDone: false
    }
    return axios.post(todosUrl, todo);
}

export const putTodo = (todo) => {
    return axios.put(`${todosUrl}/${todo.id}`, {
        ...todo, 
        isDone: true
    });
}

export const deleteTodo = (id) => {
    return axios.delete(`${todosUrl}/${id}`);
}