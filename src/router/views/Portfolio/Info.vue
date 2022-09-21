<template>
  <main-layout>
    <loader :loading="loadingPage">
      <div class="card">
        <div class="card-body">
          <section class="row">
            <section class="col-md-12">
              <section class="header d-flex justify-content-between">
                <h4 class="card-title mb-4">جزئیات پورتفو</h4>
                <section class="add-user">
                  <router-link to="/portfolio/create" class="btn btn-primary">
                    بازگشت
                  </router-link>
                </section>
              </section>
              <div class="table-responsive">
                <table
                  id="list"
                  class="table table-nowrap table-centered mb-0 align-middle"
                >
                  <thead>
                    <tr>
                      <th scope="col">ردیف</th>
                      <th scope="col">نماد</th>
                      <th scope="col">تعداد</th>
                      <th scope="col">مقدار</th>
                      <th scope="col">وضعیت</th>
                      <th scope="col">تاریخ</th>
                      <th scope="col">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in list" :key="item.id">
                      <td>
                        <div class="text-muted">{{ item.id }}</div>
                      </td>
                      <td>
                        <div class="text-muted">{{ item.coin_symbol }}</div>
                      </td>
                      <td>
                        <div class="text-muted">{{ item.quantity }}</div>
                      </td>
                      <td>
                        <div class="text-muted">{{ item.value }}</div>
                      </td>
                      <td>
                        <div class="text-muted">{{ item.is_sold ? "فروش" : "خرید" }}</div>
                      </td>
                      <td>
                        <div class="text-muted">
                          {{ item.created_at | date(item.created_at) }}
                        </div>
                      </td>
                      <td style="width: 200px">
                        <button
                          class="btn btn-primary mr-10"
                          @click="manageUpdateModal(true, item)"
                        >
                          ویرایش
                        </button>

                        <button
                          class="btn btn-danger mr-10"
                          @click="getUserConfirmationDeleteSingleItem(true, item.id)"
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td v-if="!list.length" colspan="7">
                        <section class="alert alert-info text-center">
                          در حال حاظر اطلاعاتی برای نمایش وجود ندارد
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </section>
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
              <h4 class="text-primary font-size-14">
                کاربر گرامی : آیا مطمئن هستید که می خواهید این رکورد را حذف کنید ؟
              </h4>
              <section class="d-flex justify-content-center align-items-center">
                <button class="btn btn-primary" @click="deleteSingleRecord">تایید</button>
                <button
                  class="btn btn-danger mr-10"
                  @click="getUserConfirmationDeleteSingleItem(false)"
                >
                  انصراف
                </button>
              </section>
            </div>
          </div>
        </div>
      </loader>
    </b-modal>

    <!--add single modal-->
    <b-modal
      v-model="modal.update"
      size="lg"
      hide-footer
      centered
      header-class="border-0"
    >
      <loader :loading="actionLoading">
        <section class="user-add-header mb-20 text-center font-size-20">
          افزودن پورتفو
        </section>
        <section class="keeper-user-adder">
          <section class="row mb-20">
            <!--subject department-->
            <section class="col-md-12">
              <section class="row mb-20">
                <section class="col-sm-12 col-md-6">
                  <label class="form-check-label mb-2 pre-5">ارز</label>
                  <coins @selectCoin="getSelectedCoin" :coin-selected="selectedCoin" />
                </section>
                <section class="col-sm-12 col-md-6">
                  <label class="form-check-label mb-2 pre-5">وضعیت</label>
                  <material-select
                    v-model="updateRecord.is_sold"
                    :items="status"
                    label="وضعیت"
                  />
                </section>
              </section>
            </section>
          </section>
          <section class="row mb-20">
            <section class="col-sm-12 col-md-6">
              <label class="form-check-label mb-2 pre-5">تعداد</label>
              <b-form-input v-model="updateRecord.quantity" type="number"></b-form-input>
            </section>

            <section class="col-sm-12 col-md-6">
              <label class="form-check-label mb-2 pre-5">مقدار خرید</label>
              <b-form-input v-model="updateRecord.value" type="number"></b-form-input>
            </section>
          </section>
          <section class="user-action text-center">
            <button
              @click="updateAction"
              class="btn btn-primary pr-20 pl-20 pb-10 pt-10 width-100"
            >
              تایید
            </button>
            <button
              @click="manageUpdateModal(false)"
              class="btn btn-danger pr-20 pl-20 pb-10 pt-10 mr-10 width-100"
            >
              بستن
            </button>
          </section>
        </section>
      </loader>
    </b-modal>
  </main-layout>
</template>

<script>
import Coins from "./components/Coins.vue";
import { info, singleDelete, update } from "@/Service/Actions/Portfolio";

export default {
  name: "Index",
  components: {
    Coins,
  },
  data() {
    return {
      list: [],
      status: [
        {
          id: 1,
          name: "خرید",
          value: 0,
        },
        {
          id: 2,
          name: "فروش",
          value: 1,
        },
      ],
      modal: {
        delete: false,
        update: false,
      },
      updateRecord: {
        coin_id: 1,
        coin_symbol: "",
        quantity: null,
        value: null,
        is_sold: null,
      },
      selectedCoin: undefined,
      loadingPage: false,
      actionLoading: false,
      tempSingleId: undefined,
    };
  },
  computed: {
    getCurrentRouteId() {
      return this.$route.params.id;
    },
  },
  created() {
    this.getSingleInfo();
  },
  methods: {
    //*************************
    //LIST
    //get all list items
    async getSingleInfo() {
      this.loadingPage = true;
      await info(this.getCurrentRouteId)
        .then((response) => {
          //assign
          this.list = response.data;
          this.loadingPage = false;
        })
        .catch((error) => {
          this.loadingPage = false;
          //show error notification to user
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
        });
    },
    //*************************
    //DELETE
    //show hide modal
    getUserConfirmationDeleteSingleItem(state, rowId = undefined) {
      this.modal.delete = state;
      this.tempSingleId = rowId;
    },
    //delete single user
    async deleteSingleRecord() {
      this.actionLoading = true;
      await singleDelete(this.tempSingleId)
        .then((response) => {
          //eslint-disable-line
          this.getUserConfirmationDeleteSingleItem(false);
          this.actionLoading = false;
          this.getSingleInfo();
        })
        .catch((error) => {
          //show error notification to user
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
          this.actionLoading = false;
        });
    },
    //**************************
    //UPDATE
    async updateAction() {
      this.actionLoading = true;
      await update(this.updateRecord)
        .then((response) => {
          this.$store.dispatch("notification/showSingleMessageSuccess", response.message);
          this.actionLoading = false;
          //close modal update
          this.manageUpdateModal(false);
          //new request get route id
          this.getSingleInfo();
        })
        .catch((error) => {
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
          his.actionLoading = false;
        });
    },
    getSelectedCoin(selected) {
      this.updateRecord = {
        ...this.updateRecord,
        coin_id: selected.id,
        coin_symbol: selected.symbol,
      };
    },
    fillModelUpdateParameter(data) {
      this.updateRecord = data;
      this.updateRecord = { ...this.updateRecord, rowId: this.tempSingleId };
    },
    //Modal Manager
    //***************************
    //preview modal ticket adder
    portfolioManager(status) {
      this.modal.delete = status;
    },
    //update
    manageUpdateModal(status, row = undefined) {
      this.modal.update = status;
      if (row) {
        this.tempSingleId = row.id;
        this.selectedCoin = parseInt(row.coin_id);
        this.fillModelUpdateParameter(row);
      }
    },
  },
};
</script>

<style scoped></style>
