import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/"

class UserService {
    signup(data) {
        return axiosService.postMethod(`${baseUrl}users/userSignUp`, data);
    }

    signin(data) {
        return axiosService.postMethod(`${baseUrl}users/login`, data);
    }

    forgotemail(data) {
        return axiosService.postMethod(`${baseUrl}users/reset`, data);
    }

    resetpassword(data) {
        return axiosService.postMethod(`${baseUrl}users/reset-password`, data);
    }
}

export default UserService