<template>
  <main-layout>
    <loader :loading="loadingPage">
      <div class="card">
        <div class="card-body">
          <section class="header d-flex justify-content-between">
            <h4 class="card-title mb-4">واچ لیست ها</h4>
            <section class="add-user">
              <button class="btn btn-primary" @click="handlerAddModal(true)">
                افزودن
              </button>
            </section>
          </section>
          <div class="table-responsive">
            <table id="list" class="table table-nowrap table-centered mb-0 align-middle">
              <thead>
                <tr>
                  <th class="width-100" scope="col">ردیف</th>
                  <th class="width-100" scope="col">نماد</th>
                  <th class="width-100" scope="col">نام</th>
                  <th class="width-100" scope="col">عملیات</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in userWatchList" :key="index++">
                  <td>
                    <div class="text-muted">{{ index }}</div>
                  </td>
                  <td>
                    <div class="text-muted">{{ item.coin_symbol }}</div>
                  </td>
                  <td>
                    <div class="text-muted">{{ item.coin_name }}</div>
                  </td>
                  <td>
                    <button
                      class="btn btn-danger mr-10"
                      @click="getUserConfirmationDeleteSingleItem(true, item)"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </loader>
    <!--add single modal-->
    <b-modal v-model="modal.add" size="lg" hide-footer centered header-class="border-0">
      <loader :loading="loading">
        <section class="row">
          <section class="col-md-12">
            <label class="form-check-label mb-2 pre-5">واچ لیست ها</label>
            <multi-select
              v-model="selected"
              :options="listSelected"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="واچ لیست مورد نظر را انتخاب کنید"
              label="coin_name"
              track-by="coin_name"
            >
            </multi-select>
          </section>
        </section>
        <!-- action -->
        <section class="row justify-content-center mt-20">
          <button class="btn btn-primary width-100" @click.prevent="updateAction">
            تایید
          </button>
          <button class="btn btn-danger width-100 mr-10" @click="handlerAddModal(false)">
            بستن
          </button>
        </section>
      </loader>
    </b-modal>

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
                <button class="btn btn-primary" @click="deleteRecord">تایید</button>
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
  </main-layout>
</template>

<script>
import { list, update, singleDelete } from "@/Service/Actions/WatchList";

export default {
  name: "Index",
  data() {
    return {
      listSelected: [],
      userWatchList: [],
      selected: [],
      modal: {
        add: false,
        delete: false,
      },
      deleteSingleWatchList: [],
      loadingPage: false,
      loading: false,
      actionLoading: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //*************************
    //LIST
    async getList() {
      this.loadingPage = true;
      await list()
        .then(({ data }) => {
          this.splitIsSelectedWatchListAndAssignToMultiSelect(data);
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
    //split is user watch list
    splitIsSelectedWatchListAndAssignToMultiSelect(data) {
      //user watch list
      this.extractWatchListSelected(data);
      //assign all response data to watch list seleceted
      this.listSelected = data;
    },
    //extract watch list selected
    extractWatchListSelected(data) {
      this.userWatchList = data.filter((w) => w.in_watch_list);
    },
    async updateAction() {
      this.loading = true;
      await update(this.selected)
        .then((response) => {
          this.loadingPage = false;
          this.handlerAddModal(false);
          this.clearSelectedWatchList();
          this.getList();
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
        });
    },
    handlerAddModal(status) {
      this.modal.add = status;
    },
    clearSelectedWatchList() {
      this.selected = [];
    },
    //****************************/
    //DELETE
    async deleteRecord() {
      this.actionLoading = true;
      await singleDelete(this.deleteSingleWatchList)
        .then((response) => {
          this.actionLoading = false;
             //get all watch list 
          this.getList()
          //close delete modal
          this.getUserConfirmationDeleteSingleItem(false);
        })
        .catch((error) => {
          this.actionLoading = false;
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
        });
    },
    getUserConfirmationDeleteSingleItem(state, row = undefined) {
      this.modal.delete = state;
      //assign selete symbol and push to array delete
      this.assignmentParamsToWatchList("add", row);
    },
    //assign or empty array delete watch list
    assignmentParamsToWatchList(state="clear", params = undefined) {
      switch (state) {
        case "add":
          this.deleteSingleWatchList = [];
          this.deleteSingleWatchList.push(params.coin_symbol);
          break;
        case "clear":
          this.deleteSingleWatchList = [];
      }
    },
  },
};
</script>

<style scoped></style>
