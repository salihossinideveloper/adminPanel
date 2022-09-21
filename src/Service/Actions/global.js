import {Axios} from "@/Service/axios";
import apiList from "@/config/apiList";

//get all enums statement
const getAllExtraData = async () => {
    return await new Axios().get(`${apiList.global.extraData}`)
        .then(response => {
            return response
        })
}
const uploaderFile = async (payload) => {
    let fileUpload = new FormData();
    fileUpload.append('file', payload)
    return await new Axios().post(`${apiList.global.uploader}`, fileUpload)
        .then(response => {
            return response
        })
}
export {
    getAllExtraData,
    uploaderFile
}