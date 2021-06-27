import { Request } from '@/http';


export function login (parameter: any)  {
    return Request.axiosInstance({
        url: '/cxLogin',
        method: 'post',
        data: parameter
    })
}
