import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "7d870823-54dd-449f-8b28-49f59a10c313"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}
