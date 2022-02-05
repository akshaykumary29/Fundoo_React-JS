import axios from "axios";

class AxiosService {
    postMethod(url, data, headers = false) {
        return axios.post(url, data, headers)
    }

    getMethod(url, data, headers = false) {
        return axios.get(url, data, headers)
    }

    getNoteMethod(url, headers = false) {
        return axios.get(url, headers)
    }

    updateMethod(url, data, headers) {
        return axios.post(url, data, headers)
    }
}

export default AxiosService