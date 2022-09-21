import { Axios } from "@/Service/axios";
import apiList from "@/config/apiList";

//get watch list
const list = async () => {
    return await new Axios().get(`${apiList.wallet.list}`)
        .then(response => {
            return response
        })
}
//get single blog info
const update = async (payload) => {
    return await new Axios().patch(`${apiList.wallet.update}${payload.id}`, payload)
        .then(response => {
            return response
        })
}
//delete single watch list
const singleDelete = async (payload) => {
    return await new Axios().delete(`${apiList.wallet.delete}${payload}`)
        .then(response => {
            return response
        })
}
const add = async (payload) => {
    return await new Axios().post(`${apiList.wallet.add}`, payload)
        .then(response => {
            return response
        })
}
const info = async (payload) => {
    return await new Axios().post(`${apiList.wallet.info}`, payload)
        .then(response => {
            return response
        })
}



export {
    list,
    update,
    singleDelete,
    add,
    info
}