import {Axios} from "@/Service/axios";
import apiList from "@/config/apiList";

//get all comment list
const commentList = async (payload) => {
    return await new Axios().get(`${apiList.comments.list}?page=${payload.page}`)
        .then(response => {
            return response
        })
}
//add single comment
const commentAdd = async (payload) => {
    return await new Axios().post(`${apiList.comments.add}`, payload)
        .then(response => {
            return response
        })
}
//get single comment information
const commentSingleInfo = async (payload) => {
    return await new Axios().get(`${apiList.comments.singleInfo}${payload}`)
        .then(response => {
            return response
        })
}
//update single child comment information
const commentSingleUpdate = async (payload) => {
    return await new Axios().put(`${apiList.comments.update}${payload.id}`, payload.data)
        .then(response => {
            return response
        })
}
//update single child comment information
const commentSingleDelete = async (payload) => {
    return await new Axios().delete(`${apiList.comments.delete}${payload}`)
        .then(response => {
            return response
        })
}
//change single comment status
const changeSingleCommentStatus = async (payload) => {
    return await new Axios().put(`${apiList.comments.acceptedOrReject}${payload.commentId}/${payload.status}`)
        .then(response => {
            return response
        })
}
//get single article comments
const getSingleArticleComments = async (payload) => {
    return await new Axios().get(`${apiList.comments.singleArticleComments}${payload}/comments`)
        .then(response => {
            return response
        })
}

export {
    commentList,
    commentAdd,
    commentSingleInfo,
    commentSingleUpdate,
    commentSingleDelete,
    changeSingleCommentStatus,
    getSingleArticleComments
}