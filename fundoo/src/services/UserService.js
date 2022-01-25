import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseUrl = "http://localhost:2000";

class UserService {
    signup(data) {
        return axiosService.postMethod(`${baseUrl}/register`, data);
    }

    signin(data) {
        return axiosService.postMethod(`${baseUrl}/login`, data);
    }

    forgotemail(data) {
        return axiosService.postMethod(`${baseUrl}/forgetPassword`, data);
    }

    resetpassword(data) {
        return axiosService.postMethod(`${baseUrl}/resetPassword`, data);
    }
}

export default UserService