import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HttpResponse<T = unknown> {
    status: number
    msg: string
    code: number
    data: T
}

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config
    },
    error => {
        // do something
        return Promise.reject(error)
    },
)
// add response interceptors
axios.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => {
        const res = response.data
        return Promise.resolve(res)
    },
    error => {
        return Promise.reject(error)
    },
)
