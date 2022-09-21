<template>
  <main-layout>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-12">
                <div class="text-sm-start">
                  <button @click="ticketManager(true)" type="button" class="btn btn-success btn-rounded mb-2 me-2">
                    <i class="mdi mdi-plus me-1"></i>
                    افزودن تیکت
                  </button>
                </div>
              </div>
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
                      <th class="align-middle width-130">دپارتمان</th>
                      <th class="align-content-center width-130">تاریخ</th>
                      <th class="align-content-center width-130">ساعت</th>
                      <th class="align-middle width-160">وضعیت</th>
                      <th class="align-middle width-130">جزئیات</th>
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
                      <td>{{ ticket.department_value }}</td>
                      <td>{{ ticket.created_at | date(ticket.created_at) }}</td>
                      <td>{{ ticket.created_at | time(ticket.created_at) }}</td>
                      <td>
                        <span class="badge badge-pill badge-soft-success font-size-11 pl-10 pr-10 pt-10 pb-10">
                          {{ ticket.status_value }}
                        </span>
                      </td>
                      <!-- Button actions -->
                      <td>
                        <button type="button" class="btn btn-primary btn-sm btn-rounded">
                          <router-link class="text-white" :to="`/ticket/${ticket.id}`"> مشاهده جزئیات</router-link>
                        </button>
                      </td>
                    </tr>
                    <tr v-if="tickets.length===0">
                      <td colspan="7">
                        <section class="alert alert-info text-center font-size-18">در حال حاظر اطلاعاتی برای نمایش وجود
                          ندارد
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <material-pagination v-model="filters.page" :total-rows="pagination.total" @change="getAllList">
              </material-pagination>
            </loader>
            <!--pagination position-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!--add ticket modal-->
    <b-modal v-model="modal.add" size="lg" hide-footer centered header-class="border-0">
      <loader :loading="actionLoader">
        <section class="user-add-header mb-20 text-center font-size-20">
          افزودن تیکت
        </section>
        <section class="keeper-user-adder">
          <section class="row mb-20">
            <!--subject department-->
            <section class="col-md-12">
              <section class="row">
                <section class="col-sm-12 col-md-6">
                  <label class="form-check-label mb-2 mr-5">عنوان</label>
                  <b-form-input id="tagTitle" name="tagTitle" v-model="addParams.data.title" type="text"></b-form-input>
                </section>
                <section class="col-sm-12 col-md-6">
                  <label class="form-check-label mb-2 mr-5">دپارتمان</label>
                  <ticket-departments v-model="addParams.data.department" />
                </section>
              </section>
            </section>
          </section>
          <section class="row mb-20">
            <section class="col-md-12">
              <b-form-textarea v-model="addParams.data.message" class="text-area-no-resize" placeholder="متن پیام شما"
                rows="6" max-rows="6"></b-form-textarea>
            </section>
          </section>
          <section class="user-action text-center">
            <button @click="registerSingleTicket" class="btn btn-primary pr-20 pl-20 pb-10 pt-10 width-100">ارسال
            </button>
          </section>
        </section>
      </loader>
    </b-modal>
  </main-layout>
</template>

<script>
import TicketDepartments from "@/tools/TicketDepartments";
import { addSingleTicket, userTicketsList } from "@/Service/Actions/Tickets";

export default {
  components: {
    TicketDepartments
  },
  data() {
    return {
      tickets: [],
      modal: {
        add: false,
      },
      department: [
        {
          id: 1,
          name: "مالی",
          value: "financial"
        },
        {
          id: 2,
          name: "اداری",
          value: "official"
        },
        {
          id: 3,
          name: "فنی",
          value: "technical"
        },
        {
          id: 4,
          name: "ترید",
          value: "trade"
        }
      ],
      subjects: [
        {
          id: 1,
          name: 'مشکل ولت و صرافی',
          value: 1,
        },
        {
          id: 2,
          name: 'مشکل انتقال ارز',
          value: 2,
        },
        {
          id: 3,
          name: 'مشاوره',
          value: 1,
        }, {
          id: 4,
          name: 'سبد گردانی',
          value: 1,
        },
        {
          id: 5,
          name: 'دوره و آموزش',
          value: 1,
        },
        {
          id: 6,
          name: 'سایر موارد',
          value: 1,
        }
      ],
      addParams: {
        data: {
          title: "",
          message: "",
          department: null,
          file: ""
        }
      },
      pagination: {
        current_page: null,
        per_page: null,
        total: null
      },
      filters: {
        paginate: 1,
        page: 1
      },
      showModal: false,
      loadingPage: false,
      actionLoader: false
    };
  },
  created() {
    this.getAllList()
  },
  methods: {
    async getAllList() {
      this.loadingPage = true
      await userTicketsList(this.filters)
        .then(response => {
          //pagination
          const { current_page, per_page, total } = response.data
          this.setPaginationField(current_page, per_page, total)
          //assign
          this.tickets = response.data.data
          this.loadingPage = false
        })
        .catch(error => {
          this.loadingPage = false
          //show error notification to user
          this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
        })
    },
    //fill pagination params
    setPaginationField(current_page, per_page, total) {
      this.pagination = {
        current_page,
        per_page,
        total
      }
    },
    //***************************
    //Modal Manager
    //***************************
    //preview modal ticket adder
    ticketManager(status) {
      this.modal.add = status
    },
    //action add
    async registerSingleTicket() {
      this.actionLoader = true
      await addSingleTicket(this.addParams)
        .then(response => {//eslint-disable-line
          this.actionLoader = false
          this.ticketManager(false)
          this.getAllList()
        })
        .catch(error => {
          //show error notification to user
          this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
        })
    }
  }
};
</script>

