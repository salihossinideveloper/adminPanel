import {Axios} from "@/Service/axios";
import apiList from "@/config/apiList";

//get all category list
const categoryAllList = async (payload) => {
    const checkIsPagination = payload.paginate === 1 ? `paginate=${payload.paginate}&page=${payload.page}` : `paginate=0`
    return await new Axios().get(`${apiList.category.list}?${checkIsPagination}`)
        .then(response => {
            return response
        })
}
//add single category
const categoryAdd = async (payload) => {
    return await new Axios().post(`${apiList.category.add}`, payload)
        .then(response => {
            return response
        })
}
//get single category information
const categorySingleInfo = async (payload) => {
    return await new Axios().get(`${apiList.category.singleInfo}${payload}`)
        .then(response => {
            return response
        })
}
//update single child category information
const categorySingleUpdate = async (payload) => {
    return await new Axios().put(`${apiList.category.update}${payload.id}`, payload.data)
        .then(response => {
            return response
        })
}
//update single child category information
const categorySingleDelete = async (payload) => {
    return await new Axios().delete(`${apiList.category.delete}${payload}`)
        .then(response => {
            return response
        })
}


export {
    categoryAllList,
    categoryAdd,
    categorySingleInfo,
    categorySingleUpdate,
    categorySingleDelete,
}