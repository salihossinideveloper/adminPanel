<template>
  <main-layout>
    <div class="w-100 user-chat">
      <div class="card">
        <div class="p-4 border-bottom">
          <div class="row">
            <div class="col-md-4 col-9">
              <h5 class="font-size-15 mb-1">لیست پیام ها</h5>
              <p class="text-muted mb-0">
                <i class="mdi mdi-circle text-success align-middle me-1"></i>
                فعال
              </p>
            </div>
            <div class="col-md-8 col-3 d-flex justify-content-end">
              <button class="btn btn-info">
                <router-link class="text-white" to="/ticket">بازگشت</router-link>
              </button>
              <ul class="list-inline user-chat-nav text-end mb-0 d-none">
                <li class="list-inline-item d-none d-sm-inline-block">
                  <b-dropdown menu-class="dropdown-menu-md dropdown-menu-end" variant="white" right
                    toggle-class="nav-btn">
                    <template v-slot:button-content>
                      <i class="bx bx-search-alt-2"></i>
                    </template>
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="chat-users">
          <div class="chat-conversation p-3">
            <simplebar style="max-height: 470px" id="containerElement" ref="current">
              <loader :loading="loading">
                <ul class="list-unstyled">
                  <li class="d-none">
                    <div class="chat-day-title">
                      <span class="title">امروز</span>
                    </div>
                  </li>
                  <template v-if="isLoaded">
                    <li v-for="item of ticketInfo.messages" :key="item.id"
                      :class="{ right: `${item.flag}` === 'admin' }">
                      <div class="conversation-list">
                        <div class="ctext-wrap">
                          <div class="conversation-name">{{ item.user_data.name }}</div>
                          <p>{{ item.message }}</p>
                          <p class="chat-time mb-0">
                            <i class="bx bx-time-five align-middle me-1"></i>
                            {{ item.created_at | time(item.created_at) }}
                          </p>
                        </div>
                      </div>
                    </li>
                  </template>

                </ul>
              </loader>
            </simplebar>
          </div>
          <!--state add new ticket-->
          <div class="p-3 chat-input-section">
            <section class="row">
              <div class="col">
                <div class="position-relative">
                  <input type="text" class="form-control chat-input rounded" placeholder="متن پیام"
                    v-model="addParams.data.message" @keydown.enter="addTicket" />
                </div>
              </div>
              <div class="col-auto">
                <button @click="addTicket" class="btn btn-primary btn-rounded chat-send w-md">
                  <span class="d-none d-sm-inline-block me-2">ارسال</span>
                  <i class="mdi mdi-send"></i>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>
<script>
import { adminAnswerTicket, singleTicketInfo } from "@/Service/Actions/Tickets";
import simplebar from "simplebar-vue";

export default {
  components: {
    simplebar,
  },
  data() {
    return {
      loading: false,
      isLoaded: false,
      ticketInfo: {},
      addParams: {
        data: {
          ticket_id: this.getRoute(),
          message: "",
          file: ""
        }
      },
    };
  },
  computed: {
    getCurrentRouteId() {
      return this.$route.params.id
    }
  },
  created() {
    this.getSingleTicketInformation()
  },
  methods: {
    getRoute() {
      return this.$route.params.id
    },
    async getSingleTicketInformation() {
      this.loading = true
      await singleTicketInfo(this.getCurrentRouteId)
        .then(response => {
          this.ticketInfo = response.data
          this.loading = false
          this.isLoaded = true
        })
        .catch(error => {
          //show error notification to user
          this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
        })
    },
    async addTicket() {
      this.loading = true
      await adminAnswerTicket(this.addParams)
        .then(response => {//eslint-disable-line
          this.loading = false
          this.clearMessage()
          this.getSingleTicketInformation()
        })
        .catch(error => {
          //show error notification to user
          this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
        })
    },
    clearMessage() {
      this.addParams.data.message = ''
    }
  }
};
</script>