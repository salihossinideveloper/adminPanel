<template>
  <main-layout>
    <div
        class="w-100 user-chat">
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
                <router-link class="text-white" to="/admin/ticket">بازگشت</router-link>
              </button>
              <ul class="list-inline user-chat-nav text-end mb-0 d-none">
                <li class="list-inline-item d-none d-sm-inline-block">
                  <b-dropdown
                      menu-class="dropdown-menu-md dropdown-menu-end"
                      variant="white"
                      right
                      toggle-class="nav-btn"
                  >
                    <template v-slot:button-content>
                      <i class="bx bx-search-alt-2"></i>
                    </template>
                    <form class="p-3">
                      <div class="form-group m-0">
                        <div class="input-group">
                          <input
                              type="text"
                              class="form-control"
                              placeholder="Search ..."
                              aria-label="Recipient's username"
                          />
                          <div class="input-group-append">
                            <button class="btn btn-primary" type="submit">
                              <i class="mdi mdi-magnify"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </b-dropdown>
                </li>
                <li class="list-inline-item d-none d-sm-inline-block">
                  <b-dropdown
                      toggle-class="nav-btn"
                      menu-class="dropdown-menu-end"
                      right
                      variant="white"
                  >
                    <template v-slot:button-content>
                      <i class="bx bx-cog"></i>
                    </template>
                    <b-dropdown-item>View Profile</b-dropdown-item>
                    <b-dropdown-item>Clear chat</b-dropdown-item>
                    <b-dropdown-item>Muted</b-dropdown-item>
                    <b-dropdown-item>Delete</b-dropdown-item>
                  </b-dropdown>
                </li>

                <li class="list-inline-item">
                  <b-dropdown
                      toggle-class="nav-btn"
                      menu-class="dropdown-menu-end"
                      right
                      variant="white"
                  >
                    <template v-slot:button-content>
                      <i class="bx bx-dots-horizontal-rounded"></i>
                    </template>
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else</b-dropdown-item>
                  </b-dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="chat-users">
          <div class="chat-conversation p-3">
            <simplebar
                style="max-height: 470px"
                id="containerElement"
                ref="current"
            >
              <loader :loading="loading">
                <ul class="list-unstyled">
                  <li class="d-none">
                    <div class="chat-day-title">
                      <span class="title">امروز</span>
                    </div>
                  </li>
                  <template v-if="isLoaded">
                    <li
                        v-for="item of ticketInfo.messages"
                        :key="item.id"
                        :class="{ right: `${item.flag}` === 'admin' }"
                    >
                      <div class="conversation-list">
                        <b-dropdown
                            class="d-none"
                            variant="white"
                            menu-class="dropdown-menu-end"
                        >
                          <template v-slot:button-content>
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </template>
                          <b-dropdown-item>Copy</b-dropdown-item>
                          <b-dropdown-item>Save</b-dropdown-item>
                          <b-dropdown-item>Forward</b-dropdown-item>
                          <b-dropdown-item>Delete</b-dropdown-item>
                        </b-dropdown>
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
                  <input
                      type="text"
                      class="form-control chat-input rounded"
                      placeholder="متن پیام"
                      v-model="addParams.data.message"
                      @keydown.enter="addTicket"
                  />
                  <!--                    <div-->
                  <!--                        v-if="submitted && $v.form.message.$error"-->
                  <!--                        class="invalid-feedback"-->
                  <!--                    >-->
                  <!--                      <span v-if="!$v.form.message.required"-->
                  <!--                      >This value is required.</span-->
                  <!--                      >-->
                  <!--                    </div>-->
                  <div class="chat-input-links d-none">
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                        <a
                            href="javascript: void(0);"
                            v-b-tooltip.hover
                            placement="top"
                            title="Emoji"
                        >
                          <i class="mdi mdi-emoticon-happy-outline"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                            href="javascript: void(0);"
                            v-b-tooltip.hover
                            placement="top"
                            title="Images"
                        >
                          <i class="mdi mdi-file-image-outline"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                            href="javascript: void(0);"
                            v-b-tooltip.hover
                            placement="top"
                            title="Add Files"
                        >
                          <i class="mdi mdi-file-document-outline"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <button
                    @click="addTicket"
                    class="btn btn-primary btn-rounded chat-send w-md"
                >
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
import {adminAnswerTicket, singleTicketInfo} from "@/Service/Actions/Tickets";
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
    getSingleTicketInformation() {
      this.loading = true
      singleTicketInfo(this.getCurrentRouteId)
          .then(response => {
            console.log(response, 'res single ticket info') //eslint-disable-line
            this.ticketInfo = response.data
            this.loading = false
            this.isLoaded = true
          })
    },
    addTicket() {
      this.loading = true
      adminAnswerTicket(this.addParams)
          .then(response => {//eslint-disable-line
            this.loading = false
            this.clearMessage()
            this.getSingleTicketInformation()
          })
    },
    clearMessage() {
      this.addParams.data.message = ''
    }
  }
};
</script>