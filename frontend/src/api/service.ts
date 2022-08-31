import axios, { AxiosRequestConfig } from 'axios'

// get apiURL from ENV
const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL
// create axios instance with baseURL and predefined timeout
const _axios = axios.create({
    url: apiUrl,
    baseURL: apiUrl,
    timeout: 300000,
    withCredentials: false,
})

// defined methods in HttpClient
interface HttpMethods {
    get<R, P>(path: string, _params?: P | null): Promise<R>
    post<R, B>(path: string, body: B): Promise<R>
    put<R, B>(path: string, id: string | number | null | undefined, body: B): Promise<R>
    patch<R, B>(path: string, id: string | number | null, body: B): Promise<R>
    delete<R, B>(path: string, id: string | number | null, body?: B | undefined): Promise<R>
}

// exporting an object literal to keep KISS(Keep it simple, stupid) principle and avoid singletone boilerplate
export const HttpClient: HttpMethods = {

    async get<R, P>(path: string, _params: P | null = null) {
        const request: AxiosRequestConfig = {
        params: _params,
        withCredentials: false}
        return _axios.get<R>(path, request)
            .then((response) => {
                return response.data as R
        })
    },

    async post<R, B>(path: string, body: B) {
        return _axios.post<R>(path, body)
            .then(resp => resp.data as R)
    },

    async put<R, B>(path: string, id: string | number | null, body: B) {
        if (!id) {
            return _axios.put<R>(path, body)
            .then(resp => resp.data as R)
        }
        return _axios.put<R>(`${path}${id}/`, body)
            .then(resp => resp.data as R)
    },

    async patch<R, B>(path: string, id: string | number | null, body: B) {
        if (!id) {
            return _axios.patch<R>(path, body)
            .then(resp => resp.data as R)
        }
        return _axios.patch<R>(`${path}${id}/`, body)
            .then(resp => resp.data as R)
    },

    async delete<R, B>(path: string, id: string | number | null, body?: B) {
        if (!id) {
            return _axios.delete<R>(path, { data: body})
                .then(resp => resp.data as R)
        }
        return _axios.delete<R>(`${path}${id}/`)
            .then(resp => resp.data as R)
    }
}
