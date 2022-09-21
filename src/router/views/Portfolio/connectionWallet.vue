<template>
  <main-layout>
    <loader :loading="loadingPage">
      <div class="card">
        <div class="card-body">
          <section class="header d-flex justify-content-between">
            <h4 class="card-title mb-4">لیست کیف پول</h4>
            <section class="add-user">
              <button class="btn btn-primary" @click="modalAddSingleRecord(true)">افزودن</button>
            </section>
          </section>
          <div class="table-responsive">
            <table id="list" class="table table-nowrap table-centered mb-0 align-middle">
              <thead>
                <tr>
                  <th scope="col">ردیف</th>
                  <th scope="col">صرافی</th>
                  <th scope="col">api_key</th>
                  <th scope="col">secret_key</th>
                  <th scope="col">تاریخ</th>
                  <th scope="col">عملیات</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in lists" :key="item.id">
                  <td>
                    <div class="text-muted">{{ item.id }}</div>
                  </td>
                  <td>
                    <div class="text-muted">{{ item.exchange_name }}</div>
                  </td>
                  <td>
                    <div class="text-muted">{{ item.api_key }}</div>
                  </td>
                  <td>
                    <div class="text-muted">{{ item.secret_key }}</div>
                  </td>
                  <td>
                    <h5 class="font-size-14 mb-1">{{ item.created_at | date(item.created_at) }}</h5>
                  </td>
                  <td style="width:200px;">
                    <button class="btn btn-light mr-10" @click="previewSingleRecordInformation(item)">ویرایش</button>
                    <button class="btn btn-danger mr-10" @click="getUserConfirmationDeleteSingleItem(true,item.id)">حذف
                    </button>
                  </td>
                </tr>
                <tr>
                  <td v-if="!lists.length" colspan="6">
                    <section class="alert alert-info text-center">در حال حاظر اطلاعاتی برای نمایش وجود ندارد</section>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </loader>
    <!--confirmation delete single user-->
    <b-modal v-model="modal.delete" hide-footer centered header-class="border-0">
      <loader :loading="actionLoading">
        <div class="text-center mb-4">
          <div class="avatar-md mx-auto mb-4">
            <div class="avatar-title bg-light rounded-circle text-primary h1">
              <i class="mdi mdi-email-open"></i>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <h4 class="text-primary font-size-14">کاربر گرامی : آیا مطمئن هستید که می خواهید اطلاعات این صرافی را حذف
                کنید
                ؟</h4>
              <section class="d-flex justify-content-center align-items-center">
                <button class="btn btn-primary" @click="deleteSingleRecord">تایید</button>
                <button class="btn btn-danger mr-10" @click="getUserConfirmationDeleteSingleItem(false)">انصراف</button>
              </section>
            </div>
          </div>
        </div>
      </loader>
    </b-modal>
    <!--add single modal-->
    <b-modal v-model="modal.add" size="lg" hide-footer centered header-class="border-0">
      <loader :loading="actionLoading">
        <section class="row">
          <!--exchange-->
          <section class="col-md-4">
            <label class="form-check-label mb-2 pre-5">صرافی</label>
            <exchange-list v-model="addRecordParameter.exchange_name" />
          </section>
          <!--api key-->
          <section class="col-md-4">
            <label name="key" class="form-check-label mb-2 pre-5">API KEY</label>
            <b-form-input v-model="addRecordParameter.api_key" id="key"></b-form-input>
          </section>
          <!--secret key-->
          <section class="col-md-4">
            <label name="secret" class="form-check-label mb-2 pre-5">SECRET KEY</label>
            <b-form-input v-model="addRecordParameter.secret_key" id="secret"></b-form-input>
          </section>
        </section>
        <!--action state-->
        <section class="add-single-connection text-center mt-20">
          <button @click="addSingleExchange" class="btn btn-primary pr-20 pl-20 pb-10 pt-10 width-100">تایید</button>
          <button @click="modalAddSingleRecord(false)"
            class="btn btn-danger pr-20 pl-20 pb-10 pt-10 width-100 mr-10">بستن</button>
        </section>
      </loader>
    </b-modal>
    <!--update single tag modal-->
    <b-modal v-model="modal.update" size="lg" hide-footer centered header-class="border-0">
      <loader :loading="actionLoading">
        <section class="row">
          <!--exchange-->
          <section class="col-md-4">
            <label class="form-check-label mb-2 pre-5">صرافی</label>
            <exchange-list v-model="updateRecordParameter.exchange_name" />
          </section>
          <!--api key-->
          <section class="col-md-4">
            <label name="key" class="form-check-label mb-2 pre-5">API KEY</label>
            <b-form-input v-model="updateRecordParameter.api_key" id="key"></b-form-input>
          </section>
          <!--secret key-->
          <section class="col-md-4">
            <label name="secret" class="form-check-label mb-2 pre-5">SECRET KEY</label>
            <b-form-input v-model="updateRecordParameter.secret_key" id="secret"></b-form-input>
          </section>
        </section>
        <!--action state-->
        <section class="add-single-connection text-center mt-20">
          <button @click="updateInformation" class="btn btn-primary pr-20 pl-20 pb-10 pt-10 width-100">تایید</button>
          <button @click="updateSingleInfo(false)"
            class="btn btn-danger pr-20 pl-20 pb-10 pt-10 width-100 mr-10">بستن</button>
        </section>
      </loader>
    </b-modal>
  </main-layout>
</template>

<script>

import { list, update, singleDelete, add } from '@/Service/Actions/Wallet'
import ExchangeList from './components/ExchangeList.vue'

export default {
  name: "ConnectionWallet",
  components: {
    ExchangeList
  },
  data() {
    return {
      lists: [],
      addRecordParameter: {
        exchange_name: "",
        api_key: "",
        secret_key: ""
      },
      updateRecordParameter: {
        exchange_name: "",
        api_key: "",
        secret_key: ""
      },
      pagination: {
        current_page: null,
        per_page: null,
        total: null
      },
      filters: {
        page: 1
      },
      modal: {
        add: false,
        info: false,
        delete: false,
        update: false
      },
      loadingPage: false,
      actionLoading: false,
      tempSingleId: undefined,
    }
  },
  created() {
    this.getAllList()
  },
  methods: {
    //*************************
    //LIST
    //get all list items
    async getAllList() {
      this.loadingPage = true
      await list()
        .then(({ data }) => {
          //assign
          this.lists = data
          console.log(this.lists, 'this.lists')
          this.loadingPage = false
        })
        .catch(error => {
          this.loadingPage = false
          //show error notification to user
          this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
        })
    },
    //*************************
    //DELETE
    //show hide modal
    getUserConfirmationDeleteSingleItem(state, rowId = undefined) {
      this.modal.delete = state
      this.tempSingleId = rowId
    },
    //delete single user
    async deleteSingleRecord() {
      this.actionLoading = true
      await singleDelete(this.tempSingleId)
        .then(response => {
          this.getUserConfirmationDeleteSingleItem(false)
          this.actionLoading = false
          this.getAllList()
        })
        .catch(error => {
          //show error notification to user
          this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
          this.actionLoading = false
        })
    },
    //*************************
    //ADD
    modalAddSingleRecord(status) {
      this.modal.add = status
    },
    //add single record
    async addSingleExchange() {
      this.actionLoading = true
      await add(this.addRecordParameter)
        .then(response => {
          this.$store.dispatch('notification/showSingleMessageSuccess', response.message)
          this.modalAddSingleRecord(false)
          this.actionLoading = false
          this.getAllList()
        })
        .catch(error => {
          this.actionLoading = false
          this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
        })
    },
    //*************************
    //UPDATE
    //update single tag record
    updateSingleInfo(state) {
      this.modal.update = state
    },
    previewSingleRecordInformation(singleRecordSelected) {
      //set single tag id
      //this.tempSingleId = singleRecordSelected.id
      //set parameter
      this.updateRecordParameter = singleRecordSelected
      //open modal update single tag
      this.updateSingleInfo(true)
    },
    //action update single record
    async updateInformation() {
      this.actionLoading = true
      await update(this.updateRecordParameter)
        .then(response => {//eslint-disable-line
          this.updateSingleInfo(false)
          this.actionLoading = false
          this.getAllList()
        })
        .catch(error => {
          this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
          this.actionLoading = false
        })
    },
    //*************************
  }
}
</script>
