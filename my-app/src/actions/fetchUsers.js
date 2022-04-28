import axios from "axios";

export async function fetchUsers(link) {
    let response;
    try {
        response = await axios.get(link);
    }
    catch (error) {
        console.log(error);
    }

    return response.data;

}