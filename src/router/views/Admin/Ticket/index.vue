<template>
  <main-layout>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-10">
              <section class="col-sm-12">
                <section class="keeper-filters d-flex justify-content-start">
                  <p class="font-size-16 font-we">لیست تیکت ها</p>
                  <ticket-departments class="ml-20 d-none" />
                  <ticket-status class="width-200 d-none" />
                </section>
              </section>
              <!-- end col-->
            </div>
            <!-- Table data -->
            <loader :loading="loadingPage">
              <div class="table-responsive mb-0">
                <table class="table align-middle table-nowrap">
                  <thead class="table-light">
                    <tr>
                      <th class="align-middle">ردیف</th>
                      <th class="align-middle">عنوان</th>
                      <th class="align-middle">کاربر</th>
                      <th class="align-middle">دپارتمان</th>
                      <th class="align-content-center width-130">تاریخ</th>
                      <th class="align-content-center width-130">ساعت</th>
                      <th class="align-middle width-160">وضعیت</th>
                      <th class="align-middle width-160">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="ticket in tickets" :key="ticket.id">
                      <td>
                        {{ ticket.id }}
                      </td>
                      <td>
                        <span class="text-body fw-bold">{{ ticket.title }}</span>
                      </td>
                      <td>{{ ticket.user_data.name }}</td>
                      <td>{{ ticket.department_value }}</td>
                      <td>{{ ticket.created_at | date(ticket.created_at) }}</td>
                      <td>{{ ticket.created_at | time(ticket.created_at) }}</td>
                      <td>
                        <span
                          class="badge badge-pill badge-soft-success font-size-11 pl-10 pr-10 pt-10 pb-10"
                        >
                          {{ ticket.status_value }}
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm btn-rounded ml-10 pre-20 pl-20 font-size-12 pointer"
                          @click="getUserConfirmationDeleteSingleItem(true, ticket.id)"
                        >
                          حذف
                        </button>
                        <!--                      answer ticket  @click="showModalAnswerTicket(true,ticket.id)" -->
                        <router-link
                          class="text-white"
                          :to="`/admin/ticket/${ticket.id}`"
                        >
                          <button
                            type="button"
                            class="btn btn-info btn-sm btn-rounded ml-10 pre-20 pl-20 font-size-12 pointer"
                          >
                            پاسخ
                          </button>
                        </router-link>
                        <!-- Button actions -->
                        <button
                          type="button"
                          class="btn btn-primary btn-sm btn-rounded d-none"
                          @click="showModalDetailRecord(true, ticket.id)"
                        >
                          مشاهده جزئیات
                        </button>
                      </td>
                    </tr>
                    <!--                  show message not record preview-->
                    <tr v-if="tickets.length === 0">
                      <td colspan="8">
                        <section class="alert alert-info text-center font-size-18">
                          در حال حاظر اطلاعاتی برای نمایش وجود ندارد
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--pagination position-->
              <material-pagination
                v-model="filters.page"
                :total-rows="pagination.total"
                @change="getAllList"
              ></material-pagination>
            </loader>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!--confirmation delete single user-->
    <b-modal v-model="modal.delete" hide-footer centered header-class="border-0">
      <loader :loading="loadingAction">
        <div class="text-center mb-4">
          <div class="avatar-md mx-auto mb-4">
            <div class="avatar-title bg-light rounded-circle text-primary h1">
              <i class="mdi mdi-email-open"></i>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <h4 class="text-primary font-size-13">
                کاربر گرامی : آیا مطمئن هستید که می خواهید این تیکت را حذف کنید ؟
              </h4>
              <section class="d-flex justify-content-center align-items-center mt-30">
                <button class="btn btn-primary pre-20 pl-20" @click="deleteSingleRecord">
                  تایید
                </button>
                <button
                  class="btn btn-danger mr-10 pre-20 pl-20"
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
    <!--confirmation delete single user-->
    <b-modal
      v-if="Object.keys(this.singleInfo).length"
      v-model="modal.details"
      hide-footer
      centered
      header-class="border-0"
    >
      <loader :loading="loadingAction">
        <section class="row mb-20">
          <section class="col-md-6">
            <label class="form-check-label mb-2 pre-5">عنوان</label>
            <b-form-input
              id="tagTitle"
              name="tagTitle"
              v-model="singleInfo.title"
              type="text"
              disabled
            ></b-form-input>
          </section>
          <section class="col-md-6">
            <label class="form-check-label mb-2 pre-5">نام درخواست دهنده</label>
            <b-form-input
              id="tagTitle"
              name="tagTitle"
              v-model="singleInfo.user_data.name"
              type="text"
              disabled
            ></b-form-input>
          </section>
        </section>
        <section class="row mb-20">
          <section class="col-md-6">
            <label class="form-check-label mb-2 pre-5">وضعیت</label>
            <b-form-input
              id="tagTitle"
              name="tagTitle"
              v-model="singleInfo.status_value"
              type="text"
              disabled
            ></b-form-input>
          </section>
          <section class="col-md-6">
            <label class="form-check-label mb-2 pre-5">دپارتمان</label>
            <b-form-input
              id="tagTitle"
              name="tagTitle"
              v-model="singleInfo.department_value"
              type="text"
              disabled
            ></b-form-input>
          </section>
        </section>
        <section class="row mb-20">
          <section class="col-md-12">
            <label class="form-check-label mb-2 pre-5">متن پیام</label>
            <b-form-textarea
              v-model="singleInfo.messages.message"
              class="text-area-no-resize"
              placeholder="متن پیام"
              rows="6"
              max-rows="6"
              disabled
            ></b-form-textarea>
          </section>
        </section>
        <section class="user-action text-center">
          <button
            @click="closeModalDetailRecord"
            class="btn btn-primary pr-20 pl-20 pb-10 pt-10 width-100"
          >
            بستن
          </button>
        </section>
      </loader>
    </b-modal>
    <!--answer single ticket-->
    <b-modal
      v-model="modal.answer"
      size="lg"
      hide-footer
      centered
      header-class="border-0"
    >
      <loader :loading="loadingAction">
        <section class="row mb-20">
          <section class="col-md-12">
            <label class="form-check-label mb-2 pre-5">متن پیام</label>
            <b-form-textarea
              v-model="answer.data.message"
              class="text-area-no-resize"
              placeholder="متن پیام"
              rows="6"
              max-rows="6"
            ></b-form-textarea>
          </section>
        </section>
        <section class="user-action text-center">
          <button
            @click="answerTicket"
            class="btn btn-primary ml-20 pr-20 pl-20 pb-10 pt-10 width-100"
          >
            ثبت
          </button>
          <button
            @click="clearAnswerTicketParams"
            class="btn btn-danger pr-20 pl-20 pb-10 pt-10 width-100"
          >
            بستن
          </button>
        </section>
      </loader>
    </b-modal>
  </main-layout>
</template>
<script>
import TicketStatus from "./component/TicketStatus";
import TicketDepartments from "@/tools/TicketDepartments";
import {
  adminAnswerTicket,
  adminDeleteSingleTicket,
  adminTicketList,
  singleTicketInfo,
} from "@/Service/Actions/Tickets";

export default {
  name: "index",
  components: {
    TicketStatus,
    TicketDepartments,
  },
  data() {
    return {
      tickets: [],
      answer: {
        data: {
          message: "",
          ticket_id: 8,
          file: "",
        },
      },
      pagination: {
        current_page: null,
        per_page: null,
        total: null,
      },
      filters: {
        paginate: 1,
        page: 1,
      },
      modal: {
        add: false,
        delete: false,
        details: false,
        answer: false,
      },
      singleInfo: {},
      loadingPage: false,
      loadingAction: false,
      tempSingleId: undefined,
    };
  },
  created() {
    this.getAllList();
  },
  methods: {
    getAllList() {
      this.loadingPage = true;
      adminTicketList(this.filters)
        .then((response) => {
          //pagination
          const { current_page, per_page, total } = response.data;
          this.setPaginationField(current_page, per_page, total);
          //assign
          this.tickets = response.data.data;
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
      this.modal.delete = state;
      this.tempSingleId = rowId;
    },
    //delete single user
    deleteSingleRecord() {
      this.loadingAction = true;
      adminDeleteSingleTicket(this.tempSingleId)
        .then((response) => { //eslint-disable-line
          this.getUserConfirmationDeleteSingleItem(false);
          this.loadingAction = false;
          this.getAllList();
        })
        .catch((error) => {
          //show error notification to user
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
          this.loadingAction = false;
        });
    },
    //*************************
    //Details
    showModalDetailRecord(status, id) {
      this.modal.details = status;
      this.tempSingleId = id;
      //action get single ticket info
      this.getSingleTicketInformation();
    },
    closeModalDetailRecord() {
      this.modal.details = false;
    },
    getSingleTicketInformation() {
      this.loadingAction = true;
      singleTicketInfo(this.tempSingleId)
        .then((response) => {
          this.singleInfo = response.data;
          this.loadingAction = false;
        })
        .catch((error) => {
          //show error notification to user
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
          this.loadingAction = false;
        });
    },
    //*************************
    //Answer
    showModalAnswerTicket(state, rowId = undefined) {
      this.modal.answer = state;
      this.answer.data.ticket_id = rowId;
    },
    answerTicket() {
      this.loadingAction = true;
      adminAnswerTicket(this.answer)
        .then((response) => {  //eslint-disable-line
        
          this.showModalAnswerTicket(false);
          this.clearAnswerTicketParams();
          this.getAllList();
          this.loadingAction = false;
        })
        .catch((error) => {
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
          this.loadingAction = false;
        });
    },
    clearAnswerTicketParams(forceClose = undefined) {
      //check is forceClose status is true and close modal answer with admin
      if (forceClose) this.showModalAnswerTicket(false);
      //clear params
      this.answer.data = {
        ticket_id: null,
        message: "",
        file: "",
      };
    },
  },
};
</script>
