import { Request } from '@/http';


export function login (params: any)  {
    return Request.axiosInstance({
        url: '/api/login',
        method: 'post',
        data: params
    })
}

