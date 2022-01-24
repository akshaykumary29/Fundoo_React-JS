import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/"

class UserService {
    registration(data) {
        return axiosService.postMethod(`${baseUrl}/user/userSignUp`, data);
    }
}

export default UserService