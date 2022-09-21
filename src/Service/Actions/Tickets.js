import {Axios} from "@/Service/axios";
import apiList from "@/config/apiList";

//get all tickets extra data
const extraData = async () => {
    return await new Axios().get(`${apiList.ticket.public.extraData}`)
        .then(response => {
            return response
        })
}
//get all tickets admin list
const adminTicketList = async (payload) => {
    return await new Axios().get(`${apiList.ticket.admin.list}?page=${payload.page}`)
        .then(response => {
            return response
        })
}
//admin recovery single ticket information
const adminRecoverySingleTicketInformation = async (payload) => {
    return await new Axios().put(`${apiList.ticket.admin.recovery}${payload}`)
        .then(response => {
            return response
        })
}
//admin delete single ticket
const adminDeleteSingleTicket = async (payload) => {
    return await new Axios().delete(`${apiList.ticket.admin.delete}${payload}`)
        .then(response => {
            return response
        })
}
//admin answer single ticket
const adminAnswerTicket = async (payload) => {
    return await new Axios().post(`${apiList.ticket.admin.answer}`,payload)
        .then(response => {
            return response
        })
}
//****************************************************************************
//user tickets list
const userTicketsList = async (payload) => {
    return await new Axios().get(`${apiList.ticket.user.list}?page=${payload.page}`)
        .then(response => {
            return response
        })
}
//****************************************************************************
//user tickets list
const addSingleTicket = async (payload) => {
    return await new Axios().post(`${apiList.ticket.public.add}`, payload)
        .then(response => {
            return response
        })
}
//single ticket information
const singleTicketInfo = async (payload) => {
    return await new Axios().get(`${apiList.ticket.public.info}${payload}`)
        .then(response => {
            return response
        })
}


export {
    extraData,
    //*************************************
    adminTicketList,
    adminRecoverySingleTicketInformation,
    adminDeleteSingleTicket,
    adminAnswerTicket,
    //*************************************
    userTicketsList,
    //*************************************
    addSingleTicket,
    singleTicketInfo
}