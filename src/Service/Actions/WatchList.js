import { Axios } from "@/Service/axios";
import apiList from "@/config/apiList";

//get watch list
const list = async () => {
    return await new Axios().get(`${apiList.watchList.list}`)
        .then(response => {
            return response
        })
}
//get single blog info
const update = async (payload) => {
    return await new Axios().patch(`${apiList.watchList.update}`, payload)
        .then(response => {
            return response
        })
}
//delete single watch list
const singleDelete = async (payload) => {
    return await new Axios().delete(`${apiList.watchList.delete}`, {
        params: {
            "coin_symbols": payload
        }
    })
        .then(response => {
            return response
        })
}
const findUserByTag = async (payload) => {
    return await new Axios().post(`${apiList.watchList.users}`, payload)
        .then(response => {
            return response
        })
}


export {
    list,
    update,
    singleDelete,
    findUserByTag
}