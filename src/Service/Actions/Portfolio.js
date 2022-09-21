import { Axios } from "@/Service/axios";
import apiList from "@/config/apiList";

//get watch list
const list = async () => {
    return await new Axios().get(`${apiList.portfolios.list}`)
        .then(response => {
            return response
        })
}
//get single blog info
const add = async (payload) => {
    return await new Axios().post(`${apiList.portfolios.add}`, payload)
        .then(response => {
            return response
        })
}
//get single blog info
const update = async (payload) => {
    return await new Axios().patch(`${apiList.portfolios.update}${payload.rowId}`, payload)
        .then(response => {
            return response
        })
}
//get single blog info
const singleDelete = async (payload) => {
    return await new Axios().delete(`${apiList.portfolios.delete}${payload}`)
        .then(response => {
            return response
        })
}

//delete all record
const allDelete = async (payload) => {
    return await new Axios().delete(`${apiList.portfolios.deleteAll}${payload}`)
        .then(response => {
            return response
        })
}

//get single info
const info = async (payload) => {
    return await new Axios().get(`${apiList.portfolios.info}${payload}`)
        .then(response => {
            return response
        })
}


export {
    list,
    add,
    update,
    singleDelete,
    allDelete,
    info
}