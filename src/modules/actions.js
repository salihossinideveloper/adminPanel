import router from "@/router";
import modules from "@/modules";
import { CurrentUserInformation } from "@/Service/Actions/User";

let actions = {
    //======================= Token
    getToken() {
        return modules.settings.get('token')
    },
    setToken(token) {
        modules.settings.set('token', token)
    },
    clearToken() {
        modules.settings.clear('token')
    }, //======================= Users Info
    getUser() {
        return modules.settings.get('user')
    },
    setUser(user) {
        modules.settings.set('user', user)
    },
    clearUser() {
        modules.settings.clear('user')
    },
    clearTokenAndUserInformation() {
        modules.settings.clear('token')
        modules.settings.clear('user')
    },
    //======================= Redirect
    redirectTo(PATH) {
        router.replace(PATH)
    },
    //======================= GetCurrentUserInformation
    getCurrentUserInformation(forceUpdate) {
        return new Promise((resolve) => {
            if (forceUpdate || modules.$user.hasData()) {
                CurrentUserInformation()
                    .then(response => {
                        modules.$user.data = response.data
                        resolve(response)
                    })
            } else {
                resolve(modules.$user.data)
            }
        })
    },

}
export default actions
