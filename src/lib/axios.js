import router from '@/router';
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 60000,
    withCredentials: true,
    withXSRFToken: true,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    headers: {
        Accept: 'application/json'
    }
});

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.request.status === 403) {
            // redirect to a 403 page informing
            // the action is forbidden
            router.push('/403');
        }

        if ([401, 419].includes(error.request.status)) {
            // redirect to login
            router.push('/login', { query: { redirect: router.currentRoute.value.fullPath } });
        }
        return Promise.reject(error);
    }
);

export default axios;
