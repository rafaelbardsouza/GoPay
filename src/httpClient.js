import axios from "axios";

export async function getRequest(path, params = {}) {
    let response = await axios
    .get(`${path}`, {params})
    .then((r) => {
        return r
    })
    .catch((err) => {console.log(err)})

    return response
}

export async function postRequest(path, data) {
    let response = await axios
    .post(`${path}`,data)
    .then((r) => {
        return r;
    })
    .catch((err) => {console.log(err)})

    return response
}

export default {
    getRequest,
    postRequest
}