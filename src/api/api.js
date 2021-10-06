import axios from "axios";

export const GetMessages = () => {
   return axios.get("http://jsonplaceholder.typicode.com/posts")
        .then (response => { return response.data;
        })
        .catch(error => {console.log(error)})
}
