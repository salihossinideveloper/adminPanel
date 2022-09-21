import { Axios } from "@/Service/axios";
import apiList from "@/config/apiList";
//login action
const login = async ({ phone, password }) => {
    return await new Axios().post(`${apiList.user.login}?phone=${phone}&password=${password}`)
        .then(response => {
            return response
        })
}
//register action
const Register = async ({ phone, name }) => {
    return await new Axios().post(`${apiList.user.register}?phone=${phone}&name=${name}`)
        .then(response => {
            return response
        })
}
//logout action
const Logout = async () => {
    return await new Axios().post(`${apiList.user.logout}`)
        .then(response => {
            return response
        })
}
//get current user information
const CurrentUserInformation = async () => {
    return await new Axios().get(`${apiList.user.current}`)
        .then(response => {
            return response
        })
}
//get user list
const GetUsersList = async (payload) => {
    return await new Axios().get(`${apiList.user.list}?page=${payload.page}`)
        .then(response => {
            return response
        })
}
//delete single user
const DeleteSingleUser = async (payload) => {
    return await new Axios().delete(`${apiList.user.delete}${payload}`)
        .then(response => {
            return response
        })
}
//preview single user info
const SingleUserInformation = async (payload) => {
    return await new Axios().get(`${apiList.user.info}${payload}`)
        .then(response => {
            return response
        })
}
//forget password
const ForgetPassword = async (payload) => {
    return await new Axios().post(`${apiList.user.password.forget}?phone=${payload}`)
        .then(response => {
            return response
        })
}
//update user info
const UpdateUserInformation = async (payload) => {
    return await new Axios().put(`${apiList.user.update}${payload.id}`, payload.data)
        .then(response => {
            return response
        })
}
//forget password
const ChangePassword = async ({ phone, token, password, password_confirmation }) => {
    return await new Axios().post(`${apiList.user.password.change}?phone=${phone}&token=${token}&password=${password}&password_confirmation=${password_confirmation}`)
        .then(response => {
            return response
        })
}
//get permissions
const Permissions = async () => {
    return await new Axios().get(`${apiList.global.permissionList}`)
        .then(response => {
            return response
        })
}
//register single user
const registerSingleUser = async (payload) => {
    return await new Axios().post(`${apiList.user.add}`, payload)
        .then(response => {
            return response
        })
}

//***************************************************** */
//User Profile
//register single user
const updateUserProfile = async (payload) => {
    let FormBinding = new FormData()
    const keys = Object.keys(payload);
    keys.forEach((key, index) => {
        FormBinding.append(`${key}`, `${payload[key]}`)
    });
    return await new Axios().patch(`${apiList.user.updateUserProfile}`, FormBinding)
        .then(response => {
            return response
        })
}


export {
    login,
    Register,
    Logout,
    CurrentUserInformation,
    GetUsersList,
    DeleteSingleUser,
    SingleUserInformation,
    ForgetPassword,
    UpdateUserInformation,
    ChangePassword,
    Permissions,
    registerSingleUser,
    updateUserProfile
}