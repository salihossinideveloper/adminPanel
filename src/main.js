import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import vco from "v-click-outside"
import router from './router/index'
import Scrollspy from 'vue2-scrollspy';
import VueSweetalert2 from 'vue-sweetalert2';
import "../src/design/app.scss";
import store from '@/state/store'
import App from './App.vue'
import i18n from './i18n'
//register servuice worker
import './registerServiceWorker'
//Installation Layout
import AutLayout from '@/router/layouts/auth'
import MainLayout from '@/router/layouts/main'
import Loader from '@/components/widgets/loader'
import MaterialSelect from "@/helpers/MaterialSelect";
import MaterialPagination from "@/helpers/MaterialPagination"
import Multiselect from 'vue-multiselect'
//Custom Component Selected
import ArticlePermissions from "./tools/ArticlePermissions";
import ArticleStatus from "./tools/ArticleStatus";
import CategoryStatus from "./tools/CategoryStatus";
import CommentStatus from "./tools/CommentStatus";
import Role from './tools/Role'
import TagStatus from "./tools/TagStatus";
import UserStatus from "./tools/UserStatus";
import UserTypes from "./tools/UserTypes";
//Initial Highchart Component
import VueHighcharts from '@/components/Chart/index'
import InfiniteLoading from 'vue-infinite-loading';

Vue.component('ArticlePermissions', ArticlePermissions)
Vue.component('ArticleStatus', ArticleStatus)
Vue.component('CategoryStatus', CategoryStatus)
Vue.component('CommentStatus', CommentStatus)
Vue.component('Role', Role)
Vue.component('TagStatus', TagStatus)
Vue.component('UserStatus', UserStatus)
Vue.component('UserTypes', UserTypes)

// Vue.component('tinymce', tinymce)
Vue.component('authLayout', AutLayout)
Vue.component('mainLayout', MainLayout)
Vue.component('apexchart', VueApexCharts)
Vue.component('Loader', Loader)
Vue.component('multiSelect', Multiselect)
Vue.component('MaterialSelect', MaterialSelect)
Vue.component('MaterialPagination', MaterialPagination)
Vue.component('VueHighChart', VueHighcharts)
Vue.component('InfiniteLoading', InfiniteLoading)

//*****************************************
//Using Vue Global
import modules from "./modules";
import VueQuillEditor from 'vue-quill-editor'
const VueScrollTo = require('vue-scrollto')
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(VueQuillEditor)
Vue.use(InfiniteLoading);
Vue.use(Toast)
Vue.use(modules)
Vue.use(VueRouter)
Vue.use(vco)
Vue.use(Scrollspy);
Vue.use(VueScrollTo)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(require('vue-chartist'))
Vue.use(VueSweetalert2);
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//***********************
//Filters
import filters from '@/modules/vueFilters'
Vue.filter('date', filters.date)
Vue.filter('time', filters.time)
Vue.filter('separator', filters.separator)
//***********************
Vue.config.productionTip = false
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
