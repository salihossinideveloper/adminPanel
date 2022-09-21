import { Axios } from "@/Service/axios";
import apiList from "@/config/apiList";

//get single blog info
const getGlassNode = async (payload) => {
    return await new Axios().get(`${apiList.chart.glassNode}${payload.part1}/${payload.part2}?symbol=${payload.symbol}`)
        .then(response => {
            return response
        })
}


export {
    getGlassNode,
}