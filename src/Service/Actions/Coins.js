import { Axios } from "@/Service/axios";
import apiList from "@/config/apiList";

//get all blog list
const list = async (payload) => {
    return await new Axios().get(`${apiList.coin.list}?start=${payload.start}&limit=${payload.limit}`)
        .then(response => {
            return response
        })
}


export {
    list,
}