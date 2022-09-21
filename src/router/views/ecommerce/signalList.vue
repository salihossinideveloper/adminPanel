<template>
  <main-layout>
    <div class="d-flex flex-wrap signals">
      <div class="col-10 col-md-3 col-lg-3 bgc-gray-1 py-4 px-3 mb-4 filter-sidebar">
        <div class="d-flex d-lg-none">
          <a href="" class="d-inline-flex align-items-center">
            <i class="icon-font-close font-size-14 color-blue-10"></i>
            <span class="color-black-2 font-size-14">بستن فیلترها</span>
          </a>
        </div>
        <h5
          class="font-size-22 border-bottom border-bottom-color-blue-1 pb-2 d-inline-block px-3 text-black"
        >
          فیلترها
        </h5>
        <!--signal state-->
        <signal-state @selectedStatus="getSelectedState" />
      </div>
      <div class="col-12 col-lg-9">
        <!-- ordering state -->
        <ordering v-if="signals.length > 0" />
        <div v-if="false" class="d-flex d-lg-none sort-sm justify-content-center">
          <button
            class="btn radius btn-secondary dropdown-toggle d-flex align-items-center bgc-blue-9 color-blue-8 color-white-hover border border-color-blue-8"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="icon-font-filter font-size-24 icon-color-gradiant-blue"></i>
            <span class="font-size-14 fw-bold px-2">فیلتر ها</span>
          </button>
          <b-dropdown class="dropdown custom-dropdown px-3">
            <template #button-content>
              <div
                class="btn radius btn-secondary dropdown-toggle d-flex align-items-center bgc-blue-9 color-blue-8 border border-color-blue-8 px-3 py-2 h-100"
              >
                <i class="icon-font-sort font-size-24 icon-color-gradiant-blue"></i>
                <span class="font-size-14 fw-bold px-2">مرتب سازی بر اساس:</span>
                <i class="icon-font-arrow-down font-size-16"></i>
              </div>
            </template>
            <b-dropdown-item href="#">An item</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
          </b-dropdown>
        </div>
        <!--preview traders-->
        <ul class="signals-items px-0 d-flex flex-wrap">
          <trader v-for="signal in signals" :key="signal.id" :signal-data="signal" />
        </ul>
        <infinite-loading :identifier="infiniteId" @infinite="getAllSignalsList">
            <section slot="no-more">سیگنال بیشتری وجود ندارد</section>
            <section class="alert alert-info" slot="no-results">
              در حال حاضر سیگنالی وجود ندارد
            </section>
          </infinite-loading>
      </div>
    </div>
    <svg
      style="visibility: hidden; position: absolute"
      width="0"
      height="0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id="round">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  </main-layout>
</template>

<script>
import { userSignalList } from "@/Service/Actions/Signal";
import Trader from "./components/signals/trader";
import SignalType from "./components/signals/filters/SignalType";
import SignalState from "./components/signals/filters/SignalState";
import SignalTrader from "./components/signals/filters/SignalTrader";
import SignalDuration from "./components/signals/filters/SignalDuration";
import SignalExchange from "./components/signals/filters/SignalExchange";
//************************ */
//Ordering
import Ordering from "./components/signals/order/index";

export default {
  components: {
    Trader,
    SignalType,
    SignalState,
    SignalTrader,
    SignalDuration,
    SignalExchange,
    //*******************/
    Ordering,
  },
  data() {
    return {
      filters: {
        page: 1,
        filters: [],
        orders: ['id,desc'],
      },
      pagination: {
        current_page: null,
        per_page: null,
        total: null,
      },
      signals: [],
      loading: false,
      notFindSignal: false,
      infiniteId: +new Date(),
    };
  },
  methods: {
    //************************
    //Signals
    //************************
    async getAllSignalsList($state) {
      await userSignalList(this.filters).then((response) => {
        console.log(response, "response");
        if (response.data.data.length) {
          //increment page number
          this.filters.page += 1;
          this.signals.push(...response.data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    //************************
    //Filters
    //************************
    //signal state
    getSelectedState(selected) {
      if (this.filters.filters.includes(selected)) {
        this.filters.filters.map((item) => {
          if (item === selected) {
            this.filters.filters.splice(item, 1);
          }
        });
      } else {
        this.filters.filters.push(selected);
      }
      this.clearSignalData();
    },
    clearSignalData() {
      this.filters.page = 1;
      this.signals = [];
      this.infiniteId += 1;
    },
  },
};
</script>
