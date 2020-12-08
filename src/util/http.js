import axios from 'axios'

const http = axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 10000,
    headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606576662502476813893633","bc":"310100"}'
    }
});
import { Toast } from 'vant'
http.interceptors.request.use((config) => {
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        overlay: true,
        duration: 0
    });
    return config
});
http.interceptors.response.use((response) => {
    Toast.clear();
    return response
})
export default http