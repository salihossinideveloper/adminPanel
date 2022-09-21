import {settings} from '@/modules/settings'
import {apiUrl} from '@/config/api'
import axiosInstance from 'axios'

const CancelToken = axiosInstance.CancelToken

const Axios = function (vm) {
    const options = {
        $vm: vm,
        $vvm: undefined,
        $loader: true,
        $showError: true,
        $authCheck: true,
        $validate: false,
        $scope: undefined,
        $loadingKey: 'loading',
        $mainLoading: false,
        $retry: false
    }

    const Axios = axiosInstance.create({
        baseURL: apiUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    Axios.interceptors.request.use(async function (config) {
        const token = settings.get('token')
        let op = config.data || {}
        if (op.$data) config.data = op.$data
        if (['get'].indexOf(config.method) !== -1) op = config
        for (let k in options) if (op.hasOwnProperty(k)) options[k] = op[k]
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        if (options.$validate || options.$scope || options.$vvm) {
            let vm = options.$vvm || options.$vm
            let valid = await vm.$validator.validateAll(options.$scope)
            if (!valid) return {
                ...config, cancelToken: new CancelToken(cancel => cancel('لطفا  همه ی گزینه ها را کامل کنید'))
            }
        }
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    Axios.interceptors.response.use(function (response) {
        return response.data
    }, function (error) {
        let data
        try {
            data = error.response.data
        } catch (er) {
            data = {}
        }
        if (error.response === undefined) error.response = {}
        const response = {
            status: 400, statusText: '', ...error.response
        }
        if (response.status === 401 || response.statusText === 'Unauthorized') {
            settings.clear('token')
            options.$showError = false
        }
        let errorMessage = data.error || data.message || error.response.statusText || error.message || 'لطفا دوباره تلاش کنید!'

        if (options.$validate) {
            try {
                let vm = options.$vm
                let errors = []
                if (data.errors) {
                    for (let k in data.errors) errors = errors.concat(data.errors[k])
                }
                if (vm.errorList === undefined) {
                    if (!errors.length) errors.push(errorMessage)
                } else {
                    vm.errorList = errors
                }
            } catch (e) {
                //console.log('error') // eslint-disable-line
            }
        }
        // @todo:
        // here we will setup the retry popup

        if (options.$retry) {
            console.log('error') // eslint-disable-line
        }
        return Promise.reject(error)
    })

    Axios.bind = vueInstance => {
        options.$vm = vueInstance
        return Axios
    }

    Axios.setConfig = newConfig => {
        for (let k in newConfig) {
            options[k] = newConfig[k]
        }
        return Axios
    }
    Axios.validate = (vm, scope) => {
        options.$validate = true
        options.$scope = scope
        options.$vvm = vm
        return Axios
    }
    return Axios
}

const ex = new Axios()
export {Axios, ex as axios}

export default {
    install(Vue) {
        Object.defineProperties(Vue.prototype, {
            axios: {
                get() {
                    return Axios(this)
                }
            }
        })
    }
}
