import {Axios} from "@/Service/axios";
import apiList from "@/config/apiList";

//get all blog list
const blogList = async (payload) => {
    return await new Axios().get(`${apiList.blog.article.list}?page=${payload.page}&category=${payload.category}&tag=${payload.tag}&orders[]=${payload.orders}`)
        .then(response => {
            return response
        })
}
//get single blog info
const blogSingleInfo = async (payload) => {
    return await new Axios().get(`${apiList.blog.article.singleInfo}${payload}`)
        .then(response => {
            return response
        })
}
//add single blog child
const blogAdd = async (payload) => {
    return await new Axios().post(`${apiList.blog.article.add}`,payload)
        .then(response => {
            return response
        })
}
//update single blog child info
const blogUpdate = async () => {
    return await new Axios().put(`${apiList.blog.article.update}`)
        .then(response => {
            return response
        })
}
//delete single blog child info
const blogDelete = async (payload) => {
    return await new Axios().delete(`${apiList.blog.article.delete}${payload}`)
        .then(response => {
            return response
        })
}
//like or dislike single blog
const blogLike = async (payload) => {
    return await new Axios().post(`${apiList.blog.like.likeSingleBlog}`,payload)
        .then(response => {
            return response
        })
}
//**********************************************
//TAG
//get all tag list
const tagAllList = async (payload) => {
    const checkIsPagination = payload.paginate === 1 ? `paginate=${payload.paginate}&page=${payload.page}` : `paginate=0`
    return await new Axios().get(`${apiList.blog.tag.list}?${checkIsPagination}`)
        // return await new Axios().get(`${apiList.blog.tag.list}?paginate=${payload.paginate}`)
        .then(response => {
            return response
        })
}
//add single tag child
const tagsAdd = async (payload) => {
    return await new Axios().post(`${apiList.blog.tag.add}`, payload)
        .then(response => {
            return response
        })
}
//update single tag child info
const tagUpdate = async (payload) => {
    return await new Axios().put(`${apiList.blog.tag.update}${payload.id}`, payload.data)
        .then(response => {
            return response
        })
}
//delete single tag child info
const tagDelete = async (payload) => {
    return await new Axios().delete(`${apiList.blog.tag.delete}${payload}`)
        .then(response => {
            return response
        })
}


export {
    blogList,
    blogSingleInfo,
    blogAdd,
    blogUpdate,
    blogDelete,
    blogLike,
    tagAllList,
    tagsAdd,
    tagUpdate,
    tagDelete,
}