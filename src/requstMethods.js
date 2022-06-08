import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODBmNjhjNTlhNGY4N2I1ZjVjN2QxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDcxNDA1MiwiZXhwIjoxNjU0OTczMjUyfQ.gcgFV94YhJLQ54jrYn3eXOlPRM_TfsYOA5BgKMilHl8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,

})


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})
