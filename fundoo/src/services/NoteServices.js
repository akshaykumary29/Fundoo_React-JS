import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseUrl = "http://localhost:2000";

const headerConfig = {
    headers: {
        token: localStorage.getItem("token"),
    },
}

const NoteServices = {
    addNotes(data) {
        return axiosService.postMethod(`${baseUrl}/addNotes`, data, headerConfig);
    },

    getNotes() {
        return axiosService.getNoteMethod(`${baseUrl}/getNotes`, headerConfig);
    },

    updateNotes(data) {
        return axiosService.updateMethod(`${baseUrl}/update`, data, headerConfig)
    }
}

export default NoteServices;