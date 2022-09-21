import { Axios } from "@/Service/axios";
import apiList from "@/config/apiList";

//get all signal list
const signalList = async (payload) => {
    return await new Axios().get(`${apiList.signal.list}?page=${payload.page}$orders[]=${payload.orders}`)
        .then(response => {
            return response
        })
}
//get single signal info
const signalSingleInfo = async (payload) => {
    return await new Axios().get(`${apiList.signal.singleInfo}${payload}`)
        .then(response => {
            return response
        })
}
//add single signal child
const signalAdd = async (payload) => {
    return await new Axios().post(`${apiList.signal.add}`, payload)
        .then(response => {
            return response
        })
}
//update signal blog child info
const signalUpdate = async (payload) => {
    return await new Axios().put(`${apiList.signal.singleUpdate}${payload.id}`, payload.data)
        .then(response => {
            return response
        })
}
//delete single signal child info
const signalDelete = async (payload) => {
    return await new Axios().delete(`${apiList.signal.singleDelete}${payload}`)
        .then(response => {
            return response
        })
}
//get signal extra data
const signalExtraData = async () => {
    return await new Axios().get(`${apiList.signal.extraData}`)
        .then(response => {
            return response
        })
}

//*************************************************
//Users
//*************************************************
//get signal list in users
const userSignalList = async (payload) => {
    return await new Axios().get(`${apiList.signal.users.list}?page=${payload.page}&filters[]=${payload.filters}&orders[]=${payload.orders}`)
        .then(response => {
            return response
        })
}
//get signal list in users
const userSignalSingleInfo = async (payload) => {
    return await new Axios().get(`${apiList.signal.users.singleInfo}${payload}`)
        .then(response => {
            return response
        })
}

export {
    signalList,
    signalSingleInfo,
    signalAdd,
    signalUpdate,
    signalDelete,
    signalExtraData,
    //************************
    userSignalList,
    userSignalSingleInfo
}