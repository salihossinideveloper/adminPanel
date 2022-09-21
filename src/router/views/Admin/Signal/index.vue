<template>
  <main-layout>
    <loader :loading="loadingPage">
      <div class="card">
        <div class="card-body">
          <section class="header d-flex justify-content-between">
            <h4 class="card-title mb-4">لیست سیگنال ها</h4>
            <section class="add-user">
              <button class="btn btn-primary" @click="modalAddSingleRecord(true)">
                افزودن
              </button>
            </section>
          </section>
          <div class="table-responsive">
            <table id="list" class="table table-nowrap table-centered mb-0 align-middle">
              <thead>
                <tr>
                  <th scope="col">ردیف</th>
                  <th scope="col">کاربر</th>
                  <th scope="col">نماد</th>
                  <th scope="col">وضعیت</th>
                  <th scope="col">نوع</th>
                  <th scope="col">ریسک</th>
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
                    <div class="text-muted">{{ item.user.name }}</div>
                  </td>
                  <td>
                    <div class="text-muted">{{ item.symbol }}</div>
                  </td>
                  <td>
                    <div class="text-muted">{{ item.status }}</div>
                  </td>
                  <td>
                    <div class="text-muted">{{ item.type }}</div>
                  </td>
                  <td>
                    <div class="text-muted">{{ item.riskfree }}</div>
                  </td>
                  <td>
                    <h5 class="font-size-14 mb-1">
                      {{ item.created_at | date(item.created_at) }}
                    </h5>
                  </td>
                  <td style="width: 200px">
                    <button class="btn btn-light mr-10" @click="previewSingleRecordInformation(item)">
                      ویرایش
                    </button>
                    <button class="btn btn-danger mr-10" @click="getUserConfirmationDeleteSingleItem(true, item.id)">
                      حذف
                    </button>
                  </td>
                </tr>
                <tr>
                  <td v-if="!list.length" colspan="8">
                    <section class="alert alert-info text-center">
                      در حال حاظر اطلاعاتی برای نمایش وجود ندارد
                    </section>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--pagination-->
            <material-pagination v-model="filters.page" :total-rows="pagination.total" @change="getAllList">
            </material-pagination>
          </div>
        </div>
      </div>
    </loader>
    <!--confirmation delete single user-->
    <b-modal v-model="deleteConfirm" hide-footer centered header-class="border-0">
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
                کاربر گرامی : آیا مطمئن هستید که می خواهید این سیگنال را حذف کنید ؟
              </h4>
              <section class="d-flex justify-content-center align-items-center">
                <button class="btn btn-primary" @click="deleteSingleRecord">تایید</button>
                <button class="btn btn-danger mr-10" @click="getUserConfirmationDeleteSingleItem(false)">
                  انصراف
                </button>
              </section>
            </div>
          </div>
        </div>
      </loader>
    </b-modal>
    <!--preview single user information-->
    <b-modal v-model="modalInfo" size="lg" hide-footer centered header-class="border-0">
      <div class="text-center mb-4">
        <div class="row justify-content-center">
          <div class="col-xl-12">
            <!-- name phone role-->
            <section class="row mb-20">
              <!--name-->
              <section class="col-md-4">
                <div class="group group-form mb-0">
                  <label class="custom-label font-15 mt-1 gray-6">اسم</label>
                </div>
              </section>
            </section>

            <section class="d-flex justify-content-center align-items-center mt-20">
              <button class="btn btn-primary" @click="manageShowHideSingleUserInformation(false)">
                بستن
              </button>
            </section>
          </div>
        </div>
      </div>
    </b-modal>
    <!--add single modal-->
    <b-modal v-model="modalAdd" size="lg" hide-footer centered header-class="border-0">
      <loader :loading="actionLoading">
        <section class="user-add-header mb-20 text-center font-size-20">
          افزودن سیگنال جدید
        </section>
        <section class="keeper-signal-adder">
          <!--symbol status -->
          <section class="row mb-20">
            <!--symbol-->
            <section class="col-md-4">
              <label class="form-check-label mb-2 mr-5">نام ارز</label>
              <signal-symbols v-model="addParams.data.symbol" />
            </section>
            <!--risk-->
            <section class="col-md-4">
              <label class="form-check-label mb-2 mr-5">میزان ریسک</label>
              <signal-risk v-model="addParams.data.risk" />
            </section>
            <!--status-->
            <section class="col-md-4">
              <label class="form-check-label mb-2 mr-5">Futures / Spot</label>
              <signal-status v-model="addParams.data.status" />
            </section>
          </section>
          <!--type state-->
          <section class="row mb-20">
            <!--type-->
            <section class="col-md-12" v-if="addParams.data.status === 0">
              <label class="form-check-label mb-2 mr-5">خرید یا فروش</label>
              <signal-type v-model="addParams.data.type" />
            </section>
            <!--state-->
          </section>
          <section class="row mb-20">
            <section class="col-md-6">
              <label class="form-check-label mb-2 mr-5">مدت سیگنال</label>
              <signal-time v-model="addParams.data.signal_time" />
            </section>
            <section class="col-md-6">
              <label class="form-check-label mb-2 mr-5">صرافی ها</label>
              <multi-select v-model="addParams.data.exchanges" :options="exchangeList" :multiple="true" :taggable="true"
                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                placeholder="صرافی را انتخاب کنید" label="title" track-by="title">
              </multi-select>
            </section>
          </section>
          <!--exchange risk_free stop_loss-->
          <section class="row mb-20">
            <!--risk free-->
            <section class="col-md-6">
              <label class="form-check-label mb-2 pre-5">میزان ریسک</label>
              <b-form-input id="score" v-model="addParams.data.riskfree" type="number"></b-form-input>
            </section>
            <!--stop loss-->
            <section class="col-md-6">
              <label class="form-check-label mb-2 pre-5">توقف ضرر</label>
              <b-form-input id="score" v-model="addParams.data.stop_loss" type="number"></b-form-input>
            </section>
          </section>
          <!--percent leverage amount-->
          <template v-if="addParams.data.status !== 1">
            <section class="row mb-20">
              <section class="col-md-6">
                <label class="form-check-label mb-2 pre-5">چند درصد ولت درگیر شود</label>
                <b-form-input id="score" v-model="addParams.data.percent"></b-form-input>
              </section>
              <!--risk free-->
              <section class="col-md-6">
                <label class="form-check-label mb-2 pre-5">اهرم معامله</label>
                <b-form-input id="score" v-model="addParams.data.leverage"></b-form-input>
              </section>
            </section>
          </template>
          <section class="row mb-20">
            <!--message-->
            <section class="message-signal mb-20">
              <label class="form-check-label mb-2 pre-5">توضیحات</label>
              <b-form-textarea class="text-area-no-resize" v-model="addParams.data.message" rows="3" />
            </section>
          </section>
          <section class="separator mb-10 mt-10"></section>
          <!--entries-->
          <section class="header-entries-add d-flex">
            <section class="title flex-grow-1 font-size-16">ورودیها</section>
            <section class="add-entries basic-8 mb-20">
              <button @click="addEntries" class="btn btn-primary">افزودن</button>
            </section>
          </section>
          <section class="row mb-20">
            <section v-for="(entries, index) in addParams.data.entries" :key="index" class="col-md-12">
              <section class="row position-relative">
                <img @click="deleteSingleItem(index,'addParams','entries')"
                  class="pointer delete-single-entries position-absolute width-50"
                  style="left: 0;z-index: 8;height: 28px;" src="@/assets/images/close.png" alt="">
                <!--price-->
                <section class="col-md-6 mb-10">
                  <label class="form-check-label mb-2 pre-5">قیمت ورود</label>
                  <b-form-input id="score" v-model="entries.price"></b-form-input>
                </section>
                <!--value-->
                <section class="col-md-6 mb-10">
                  <label class="form-check-label mb-2 pre-5">درصد ورود</label>
                  <b-form-input id="score" v-model="entries.value" type="number"></b-form-input>
                </section>
              </section>
            </section>
          </section>
          <section class="separator mb-10 mt-10"></section>
          <!--target-->
          <section class="header-entries-add d-flex">
            <section class="title flex-grow-1 font-size-16">اهداف</section>
            <section class="add-entries basic-8">
              <button @click="addTargets" class="btn btn-primary">افزودن</button>
            </section>
          </section>
          <section class="row mb-20">
            <section v-for="(target, index) in addParams.data.targets" :key="index" class="col-md-12">
              <section class="row position-relative">
                <img @click="deleteSingleItem(index,'addParams','targets')"
                  class="pointer delete-single-entries position-absolute width-50"
                  style="left: 0;z-index: 8;height: 28px;" src="@/assets/images/close.png" alt="">
                <!--price-->
                <section class="col-md-6 mb-10">
                  <label class="form-check-label mb-2 pre-5">قیمت خروج</label>
                  <b-form-input id="score" v-model="target.price"></b-form-input>
                </section>
                <!--value-->
                <section class="col-md-6 mb-10">
                  <label class="form-check-label mb-2 pre-5">درصد خروج</label>
                  <b-form-input id="score" v-model="target.value" type="number"></b-form-input>
                </section>
              </section>
            </section>
          </section>

          <!--actions-->
          <section class="user-action text-center">
            <button class="btn btn-primary" @click.prevent="addSingleRecord">
              افزودن
            </button>
          </section>
        </section>
      </loader>
    </b-modal>
    <!--update single tag modal-->
    <b-modal v-model="modalUpdate" size="lg" hide-footer centered header-class="border-0">
      <loader :loading="actionLoading">
        <section class="user-add-header mb-20 text-center font-size-20">
          ویرایش سیگنال
        </section>
        <section class="keeper-signal-update">
          <section class="row mb-20">
            <!--symbol-->
            <section class="col-md-4">
              <label class="form-check-label mb-2 mr-5">نام ارز</label>
              <signal-symbols v-model="updateParams.data.symbol" />
            </section>
            <!--risk-->
            <section class="col-md-4">
              <label class="form-check-label mb-2 mr-5">میزان ریسک</label>
              <signal-risk v-model="updateParams.data.risk" />
            </section>
            <!--status-->
            <section class="col-md-4">
              <label class="form-check-label mb-2 mr-5">Futures / Spot</label>
              <signal-status v-model="updateParams.data.status" />
            </section>
          </section>
          <section class="row mb-20">
            <!--type-->
            <section class="col-md-12" v-if="updateParams.data.status === 0">
              <label class="form-check-label mb-2 mr-5">نوع</label>
              <signal-type v-model="updateParams.data.type" />
            </section>
            <!--state-->
            <!-- <section class="col-md-6">
              <label class="form-check-label mb-2 mr-5">نوع</label>
              <signal-states v-model="updateParams.data.state" />
            </section> -->
          </section>
          <section class="row mb-20">
            <section class="col-md-6">
              <label class="form-check-label mb-2 mr-5">مدت سیگنال</label>
              <signal-time v-model="updateParams.data.signal_time" />
            </section>
            <section class="col-md-6">
              <label class="form-check-label mb-2 mr-5">صرافی ها</label>
              <multi-select v-model="updateParams.data.exchanges" :options="exchangeList" :multiple="true"
                :taggable="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                placeholder="صرافی را انتخاب کنید" label="title" track-by="title">
              </multi-select>
            </section>
          </section>
          <section class="row mb-20">
            <!--risk free-->
            <section class="col-md-6">
              <label class="form-check-label mb-2 pre-5">میزان ریسک</label>
              <b-form-input id="score" v-model="updateParams.data.riskfree" type="number"></b-form-input>
            </section>
            <!--stop loss-->
            <section class="col-md-6">
              <label class="form-check-label mb-2 pre-5">توقف ضرر</label>
              <b-form-input id="score" v-model="updateParams.data.stop_loss" type="number"></b-form-input>
            </section>
          </section>
          <!--percent leverage amount-->
          <template v-if="updateParams.data.status !== 1">
            <section class="row mb-20">
              <section class="col-md-6">
                <label class="form-check-label mb-2 pre-5">چند درصد ولت درگیر شود</label>
                <b-form-input id="score" v-model="updateParams.data.percent"></b-form-input>
              </section>
              <!--risk free-->
              <section class="col-md-6">
                <label class="form-check-label mb-2 pre-5">اهرم معامله</label>
                <b-form-input id="score" v-model="updateParams.data.leverage"></b-form-input>
              </section>
            </section>
          </template>
          <section class="row mb-20">
            <!--message-->
            <section class="message-signal mb-20">
              <label class="form-check-label mb-2 pre-5">توضیحات</label>
              <b-form-textarea class="text-area-no-resize" v-model="updateParams.data.message" rows="3" />
            </section>
          </section>
          <section class="separator mb-10 mt-10"></section>
          <!--entries-->
          <section class="header-entries-add d-flex mb-20">
            <section class="title flex-grow-1 font-size-16">ورودیها</section>
            <!--            <section class="add-entries basic-8">-->
            <!--              <button @click="addEntries" class="btn btn-primary">افزودن</button>-->
            <!--            </section>-->
          </section>
          <section class="row mb-20">
            <section v-for="(entries, index) in updateParams.data.entries" :key="index++" class="col-md-12">
              <section class="row position-relative">
                <img @click="deleteSingleItem(index,'updateParams','entries')"
                  class="pointer delete-single-entries position-absolute width-50"
                  style="left: 0;z-index: 8;height: 28px;" src="@/assets/images/close.png" alt="">
                <!--price-->
                <section class="col-md-6">
                  <label class="form-check-label mb-2 pre-5">قیمت ورود</label>
                  <b-form-input id="score" v-model="entries.price"></b-form-input>
                </section>
                <!--value-->
                <section class="col-md-6">
                  <label class="form-check-label mb-2 pre-5">درصد ورود</label>
                  <b-form-input id="score" v-model="entries.value" type="number"></b-form-input>
                </section>
              </section>
            </section>
          </section>
          <section class="separator mb-10 mt-10"></section>
          <!--target-->
          <section class="header-entries-add d-flex mb-20">
            <section class="title flex-grow-1 font-size-16">اهداف</section>
            <!--            <section class="add-entries basic-8">-->
            <!--              <button @click="addTargets" class="btn btn-primary">افزودن</button>-->
            <!--            </section>-->
          </section>
          <section class="row mb-20">
            <section v-for="(target, index) in updateParams.data.targets" :key="index" class="col-md-12">
              <section class="row">
                <img @click="deleteSingleItem(index,'updateParams','targets')"
                  class="pointer delete-single-entries position-absolute width-50"
                  style="left: 0;z-index: 8;height: 28px;" src="@/assets/images/close.png" alt="">
                <!--price-->
                <section class="col-md-6">
                  <label class="form-check-label mb-2 pre-5">قیمت خروج</label>
                  <b-form-input id="score" v-model="target.price"></b-form-input>
                </section>
                <!--value-->
                <section class="col-md-6">
                  <label class="form-check-label mb-2 pre-5">درصد خروج</label>
                  <b-form-input id="score" v-model="target.value" type="number"></b-form-input>
                </section>
              </section>
            </section>
          </section>
          <!--actions-->
          <section class="user-action text-center">
            <button class="btn btn-primary" @click.prevent="updateInformation">
              به روز رسانی
            </button>
          </section>
        </section>
      </loader>
    </b-modal>
  </main-layout>
</template>

<script>
import {
  signalAdd,
  signalDelete,
  signalExtraData,
  signalList,
  signalUpdate,
} from "@/Service/Actions/Signal";
import { required } from "vuelidate/lib/validators";
import modules from "@/modules";
//components
import SignalStatus from "./components/SignalStatus";
import SignalSymbols from "./components/SignalSymbols";
import SignalType from "./components/SignalType";
import SignalStates from "./components/SignalStates";
import SignalTime from "./components/SignalTime";
import SignalRisk from "./components/SignalRisk";

export default {
  name: "Index",
  components: {
    SignalStatus,
    SignalSymbols,
    SignalType,
    SignalStates,
    SignalTime,
    SignalRisk,
  },
  data() {
    return {
      list: [],
      exchangeList: [],
      singleInfo: {},
      addParams: {
        data: {
          symbol: 0,
          message: "",
          status: 0,
          state: 2,
          type: 0,
          percent: null,
          leverage: null,
          amount: null,
          stop_loss: "",
          riskfree: "",
          risk: "",
          signal_time: null,
          opened_at: "",
          closed_at: "",
          time: "",
          yield: "",
          exchanges: [],
          entries: [
            {
              price: "",
              value: "",
            },
          ],
          targets: [
            {
              price: "",
              value: "",
            },
          ],
        },
      },
      updateParams: {
        data: {
          symbol: 0,
          message: "",
          status: 0,
          state: 2,
          type: 0,
          percent: null,
          leverage: null,
          amount: null,
          stop_loss: "",
          riskfree: "",
          risk: "",
          signal_time: null,
          opened_at: "",
          closed_at: "",
          time: "",
          yield: "",
          exchanges: [],
          entries: [],
          targets: [],
        },
      },
      currentRowInformation: {},
      pagination: {
        current_page: null,
        per_page: null,
        total: null,
      },
      filters: {
        page: 1,
        orders: ['desc'],
      },
      loadingPage: false,
      loading: false,
      actionLoading: false,
      deleteConfirm: false,
      modalInfo: false,
      modalAdd: false,
      modalUpdate: false,
      submitted: false,
      submittedUpdate: false,
      tempSingleId: undefined,
    };
  },
  validations: {
    categoryAddParams: {
      data: {
        title: {
          required,
        },
      },
    },
  },
  created() {
    this.getAllList();
    this.getExchangeList();
  },
  methods: {
    //*************************
    //LIST
    //get all users list items
    getAllList() {
      this.loadingPage = true;
      signalList(this.filters)
        .then((response) => {
          //pagination
          const { current_page, per_page, total } = response.data;
          this.setPaginationField(current_page, per_page, total);
          //assign
          this.list = response.data.data;
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
    //fill pagination params
    setPaginationField(current_page, per_page, total) {
      this.pagination = {
        current_page,
        per_page,
        total,
      };
    },
    //*************************
    //DELETE
    //show hide modal
    getUserConfirmationDeleteSingleItem(state, rowId = undefined) {
      this.deleteConfirm = state;
      this.tempSingleId = rowId;
    },
    //delete single user
    deleteSingleRecord() {
      this.actionLoading = true;
      signalDelete(this.tempSingleId)
        .then((response) => {
          //eslint-disable-line
          this.getUserConfirmationDeleteSingleItem(false);
          this.actionLoading = false;
          this.getAllList();
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
    //*************************
    //ADD
    //add tag
    modalAddSingleRecord(status) {
      this.modalAdd = status;
    },
    //add single tag
    addSingleRecord() {
      this.actionLoading = true;
      signalAdd(this.addParams)
        .then((response) => {
          this.$store.dispatch("notification/showSingleMessageSuccess", response.message);
          this.modalAddSingleRecord(false);
          this.actionLoading = false;
          //clear add signal params
          this.clearAddSingleParameter();
          //get signal list
          this.getAllList();
        })
        .catch((error) => {
          this.actionLoading = false;
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
        });
    },
    //delete single entries
    deleteSingleItem(selectedId, parent, child) {
      this[parent].data[child].splice(selectedId, 1)
    },
    //*************************
    //UPDATE
    //get single tag info and set to object
    previewSingleRecordInformation(singleRecordSelected) {
      //set single tag id
      this.tempSingleId = singleRecordSelected.id;
      //set parameter
      this.updateParams.data = singleRecordSelected;
      //open modal update single tag
      this.updateSingleInfo(true);
    },
    //update single tag information
    updateSingleInfo(state) {
      this.modalUpdate = state;
    },
    //action update single tag information
    updateInformation() {
      this.actionLoading = true;
      signalUpdate({
        id: this.tempSingleId,
        data: this.updateParams,
      })
        .then((response) => {
          //eslint-disable-line
          this.$store.dispatch(
            "notification/showSingleMessageSuccess",
            "ویرایش سیگنال با موفقیت انجام شد"
          );
          this.updateSingleInfo(false);
          this.actionLoading = false;
          this.getAllList();
        })
        .catch((error) => {
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
          this.actionLoading = false;
        });
    },
    //*************************
    //CLEARING
    //clear add tag params
    clearAddSingleParameter() {
      this.addParams.data = {
        symbol: null,
        message: "",
        status: null,
        state: null,
        type: null,
        percent: null,
        leverage: null,
        amount: null,
        stop_loss: "",
        riskfree: "",
        signal_time: null,
        opened_at: "",
        closed_at: "",
        time: "",
        yield: "",
        exchanges: [],
        entries: [
          {
            price: "",
            value: "",
          },
        ],
        targets: [
          {
            price: "",
            value: "",
          },
        ],
      };
    },
    //*************************
    //OTHER ACTIONS
    getExchangeList() {
      signalExtraData().then((response) => {
        this.exchangeList = response.data.exchanges;
      });
    },
    //add record entries
    addEntries() {
      if (this.addParams.data.entries.length !== modules.config.signalRequired.entries) {
        this.addParams.data.entries.push({
          price: "",
          value: "",
        });
      }
    },
    //add record targets
    addTargets() {
      if (this.addParams.data.targets.length !== modules.config.signalRequired.targets) {
        this.addParams.data.targets.push({
          price: "",
          value: "",
        });
      }
    },
  },
};
</script>

<style scoped>
.keeper-signal-adder,
.keeper-signal-update {
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
