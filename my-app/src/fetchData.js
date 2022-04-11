import axios from "axios";

export async function getResponse() {
    let response;
    try {
        response = await axios.get('https://jsonplaceholder.typicode.com/users');
    }
    catch (error) {
        console.log(error);
    }

    return response.data;

}