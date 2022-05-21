import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODBmNjhjNTlhNGY4N2I1ZjVjN2QxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzEyNTg2MCwiZXhwIjoxNjUzMzg1MDYwfQ.W2mWpjiro0OGqog6xPugJNckxhrCEvd9RBlkwjtuNuQ";

export const publicRequest = axios.create({
    baseURL: BASE_URL,

})


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})
