import { Axios } from "@/Service/axios";
import apiList from "@/config/apiList";

//get watch list
const send = async (payload) => {
    return await new Axios().post(`${apiList.notification.send}`, payload)
        .then(response => {
            return response
        })
}

const getDeviceKey = async (payload) => {
    return await new Axios().post(`${apiList.notification.deviceKey}`, payload)
        .then(response => {
            return response
        })
}
export {
    send,
    getDeviceKey
}