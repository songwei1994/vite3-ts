import axios,{type AxiosRequestConfig,AxiosResponse} from 'axios'
import LocalCache  from "../utills/index";
axios.defaults.baseURL = '';

//请求拦截器
axios.interceptors.request.use((config:AxiosRequestConfig | any)=>{
    const token = LocalCache.getCache('token')
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
},(error)=> Promise.reject(error),
)

//响应拦截器
axios.interceptors.response.use((res:AxiosResponse)=>{
    return res.data
},(err:any)=>{
    return Promise.reject(err)
})

interface Ihttp{
    request<T>(method:string,url:string,params?:unknown):Promise<T>
}
const http:Ihttp = {
    request(method,url,params){
        return axios({
            method:method,
            url:url,
            data:params
        })
    }
}
export default http

