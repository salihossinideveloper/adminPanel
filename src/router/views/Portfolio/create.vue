<template>
  <main-layout>
    <loader :loading="loadingPage">
      <div class="card">
        <div class="card-body">
          <section class="row">
            <section class="col-md-9">
              <section class="header d-flex justify-content-between">
                <h4 class="card-title mb-4">تعریف پورتفو</h4>
                <section class="add-user">
                  <button class="btn btn-primary" @click="portfolioManager(true)">
                    افزودن
                  </button>
                </section>
              </section>
              <div class="table-responsive">
                <table
                  id="list"
                  class="table table-nowrap table-centered mb-0 align-middle"
                >
                  <thead>
                    <tr>
                      <th scope="col">نام ارز</th>
                      <th scope="col">مقدار دارائی</th>
                      <th scope="col">درصد دارائی</th>
                      <th scope="col">قیمت لحظه ایی</th>
                      <th scope="col">میانگین ورود</th>
                      <th scope="col">سود درصدی</th>
                      <th scope="col">سود دلاری</th>
                      <th scope="col">عملیات</th>
                    </tr>
                  </thead>
                  <tbody v-if="loadedTable">
                    <tr v-for="item in list" :key="item.id">
                      <td>
                        <div class="text-muted">{{ item.coin_symbol }}</div>
                      </td>
                      <td>
                        <div class="text-muted">{{ item.total_quantity }}</div>
                      </td>
                      <td>
                        <div class="text-muted">{{ item.asset_percentage }}</div>
                      </td>
                      <!-- item.asset -->
                      <td>
                        <div class="text-muted">{{ item.real_time_price }}</div>
                      </td>
                      <td>
                        <div class="text-muted">{{ item.average_value }}</div>
                      </td>

                      <td>
                        <div class="text-muted">
                          {{
                            PercentageInterest(item.real_time_price, item.average_value)
                          }}
                        </div>
                      </td>

                      <td>
                        <div class="text-muted">
                          {{
                            DollarProfit(
                              item.real_time_price,
                              item.average_value,
                              item.total_quantity
                            )
                          }}
                        </div>
                      </td>

                      <td class="width-200">
                        <router-link
                          :to="`/portfolio/info/${item.coin_id}`"
                          class="btn btn-light mr-10"
                        >
                          جزئیات
                        </router-link>

                        <button
                          class="btn btn-danger mr-10"
                          @click="getUserConfirmationDeleteSingleItem(true, item.coin_id)"
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                    <tr v-if="!list.length">
                      <td colspan="8">
                        <section class="alert alert-info text-center">
                          در حال حاظر اطلاعاتی برای نمایش وجود ندارد
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="col-md-3">
              <!--chart-->
              <apexchart
                v-if="loadedChart"
                class="apex-charts"
                height="320"
                type="donut"
                dir="ltr"
                :series="chartConfig.series"
                :options="chartConfig.chartOptions"
              ></apexchart>
              <!-- <section v-else class="alert alert-info text-center">
                در حال حاظر اطلاعاتی برای نمایش وجود ندارد
              </section> -->
            </section>
          </section>
        </div>
      </div>
    </loader>
    <!--add single modal-->
    <b-modal v-model="modal.add" size="lg" hide-footer centered header-class="border-0">
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
                  <coins @selectCoin="getSelectedCoin" />
                </section>
                <section class="col-sm-12 col-md-6">
                  <label class="form-check-label mb-2 pre-5">وضعیت</label>
                  <material-select
                    v-model="addRecord.is_sold"
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
              <b-form-input v-model="addRecord.quantity" type="number"></b-form-input>
            </section>

            <section class="col-sm-12 col-md-6">
              <label class="form-check-label mb-2 pre-5">مقدار خرید</label>
              <b-form-input v-model="addRecord.value" type="number"></b-form-input>
            </section>
          </section>
          <section class="user-action text-center">
            <button
              @click="addAction"
              class="btn btn-primary pr-20 pl-20 pb-10 pt-10 width-100"
            >
              تایید
            </button>
            <button
              @click="portfolioManager(false)"
              class="btn btn-danger pr-20 pl-20 pb-10 pt-10 mr-10 width-100"
            >
              بستن
            </button>
          </section>
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
                <button class="btn btn-primary" @click="deleteAllCoin">تایید</button>
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
import Coins from "./components/Coins.vue";
import { list, add, allDelete } from "@/Service/Actions/Portfolio";

export default {
  name: "Index",
  components: {
    Coins,
  },
  data() {
    return {
      list: [],
      colinList: [],
      currentPriceNumber: [],
      chartConfig: {
        series: [],
        chartOptions: {
          labels: [],
          colors: ["#050d42", "#caab5a", "#050d42", "#caab5a", "#050d42", "#caab5a"],
          legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: false,
            fontSize: "14px",
            offsetX: 0,
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                chart: {
                  height: 240,
                },
                legend: {
                  show: false,
                },
              },
            },
          ],
        },
      },
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
        add: false,
        delete: false,
      },
      addRecord: {
        quantity: null,
        value: null,
        is_sold: null,
      },
      coinFilter: {
        start: "",
        limit: 100,
      },
      loadingPage: false,
      actionLoading: false,
      loadedTable: false,
      loadedChart: false,
      tempSingleId: undefined,
    };
  },
  created() {
    this.getAllList();
  },
  methods: {
    //************************
    //LIST
    //get all list items
    async getAllList() {
      this.loadingPage = true;
      await list()
        .then((response) => {
          this.chartConfig.series = [];
          this.chartConfig.chartOptions.labels = [];
          //assign
          this.list = response.data;
          this.assignChartData(this.list);
          this.loadingPage = false;
          this.loadedTable = true;
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
    //ADD
    //get selected single coin from multi select
    getSelectedCoin(selected) {
      this.addRecord = {
        ...this.addRecord,
        coin_id: selected.id,
        coin_symbol: selected.symbol,
      };
    },
    async addAction() {
      this.actionLoading = true;
      await add(this.addRecord).then((reponse) => {
        this.actionLoading = false;
        //clear add record value
        this.clearAddSingleParameter();
        //close modla add
        this.portfolioManager(false);
        //update list
        this.getAllList();
      });
    },
    assignChartData(data) {
      data.map((item) => {
        this.chartConfig.series.push(
          (item.total_quantity * Math.round(item.real_time_price * 100)) / 100
        );
        this.chartConfig.chartOptions.labels.push(item.coin_symbol);
      });
      this.loadedChart = true;
    },
    //*************************
    //CLEARING
    //clear add tag params
    clearAddSingleParameter() {
      this.addRecord = {
        quantity: null,
        value: null,
        is_sold: null,
      };
    },
    //***************************
    //Modal Manager
    //***************************
    //preview modal ticket adder
    portfolioManager(status) {
      this.modal.add = status;
    },
    //***************************
    //Delete
    //***************************
    getUserConfirmationDeleteSingleItem(state, rowId = undefined) {
      this.modal.delete = state;
      this.tempSingleId = rowId;
    },
    //delete single user
    async deleteAllCoin() {
      this.actionLoading = true;
      await allDelete(this.tempSingleId)
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
    //***************************** */
    //Calculation
    PercentageInterest(realPrice, average) {
      return ((realPrice - average) / average) * 100;
    },
    DollarProfit(realPrice, average, totalPrice) {
      return (realPrice - average) * totalPrice;
    },
  },
};
</script>

<style scoped></style>
