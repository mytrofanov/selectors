import axios from "axios";

export const GetUserData = () => {
   return  axios.get("http://jsonplaceholder.typicode.com/posts")
        .then (r => { return (r.data);
        })
        .catch(error => {console.log(error)})
}
