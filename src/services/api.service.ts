import axios, {AxiosResponse} from "axios";

import baseURL from "../constants/urls";

export type IRes<T> = Promise<AxiosResponse<T>>

const apiService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzU0OTBiNzg4MDg4ZDM2NTg0ZjlmMDM3YTYzZjU1OCIsInN1YiI6IjYyOTI2NmMzMGU2NGFmMDA2NDE4OGEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YWi64dJV4oyYEIpgulh6YeH76Jjo_jX6GJrCdbV95dM'
    }
});

export default apiService;