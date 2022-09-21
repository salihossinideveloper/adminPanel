<template>
  <li class="item col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-4">
    <div class="content">
      <div class="image position-absolute mx-auto rounded-circle overflow-hidden">
        <img src="@/assets/images/users/user-not-fount.jpeg" class="w-100 h-100" alt="" />
      </div>
      <div class="position-relative bg-shape pt-5 h-100">
        <div class="position-relative h-100 mt-auto d-flex flex-wrap">
          <div class="w-100 text-center">
            <h5 class="font-size-14 color-black-2">
              <!-- {{ signalData.user_data.name }} -->
              راهبران فردا
            </h5>
          </div>
          <ul v-if="false" class="d-flex flex-wrap w-100 text-center user-level px-4 mb-2">
            <li class="flex-fill d-flex flex-column">
              <div
                class="d-flex align-items-center justify-content-center border-bottom border-bottom-color-blue-7 pb-1 mb-1">
                <i class="icon-font-score icon font-size-22"></i>
                <span class="color-blue-4 font-size-16 px-2">امتیاز</span>
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <span class="color-gray-3 font-size-16">
                  {{ signalData.user_data.score }}
                </span>
              </div>
            </li>
            <li class="flex-fill d-flex flex-column">
              <div
                class="d-flex align-items-center justify-content-center border-bottom border-bottom-color-blue-7 pb-1 mb-1">
                <i class="icon-font-rank icon font-size-22"></i>
                <span class="color-blue-4 font-size-16 px-2">سطح کاربر</span>
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <span class="color-gray-3 font-size-16">
                  {{ signalData.user_data.score }}
                </span>
              </div>
            </li>
            <li class="flex-fill d-flex flex-column">
              <div
                class="d-flex align-items-center justify-content-center border-bottom border-bottom-color-blue-7 pb-1 mb-1">
                <i class="icon-font-user-level icon font-size-22"></i>
                <span class="color-blue-4 font-size-16 px-2">رتبه</span>
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <span class="color-gray-3 font-size-16">
                  {{ signalData.user_data.rank }}
                </span>
              </div>
            </li>
          </ul>
          <div class="main-content w-100 mx-0 d-flex flex-column mt-auto">
            <section class="d-flex justify-content-center pt-10 fw-bold">
              {{ signalData.symbol_value }}
            </section>
            <div class="d-flex flex-wrap justify-content-between px-4">
              <div class="d-inline-flex py-2">
                <span class="font-size-14 fw-bold color-black">نوع سیگنال: </span>
                <span class="font-size-14 fw-bold px-1" :class="[checkSignalType]">
                  {{ signalData.type_value }} / {{ signalData.status_value }}
                </span>
              </div>
              <div class="d-inline-flex py-2">
                <span class="font-size-14 fw-bold color-black"> زمان انتشار: </span>
                <!--time ago state-->
                <time-ago :time="signalData.created_at" />
              </div>
            </div>
            <div class="d-flex flex-column px-4">
              <div class="w-100">
                <h5 class="font-size-14 fw-bold color-black-2">صرافی ها</h5>
              </div>
              <!--exchange state-->
              <exchange :list="signalData.exchanges" :signal-type="signalData.type" />
            </div>
            <!--signal info state-->
            <signal-info :risk-reward="signalData.risk_reward" :risk="signalData.risk_value"
              :period="signalData.signal_time_value" :signal-type="signalData.type" />
            <div class="px-4 mb-2 d-flex justify-content-end">
              <router-link :to="`/signalDetail/${signalData.id}`" class="d-inline-flex align-items-center color-blue-4">
                <span class="font-size-12 px-3">مشاهده ی سیگنال</span>
                <img src="@/assets/images/icon/chevron-left.svg" class="" alt="" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import Exchange from "./exchange";
import SignalInfo from "./info";
import TimeAgo from "./component/TimeAgo";

export default {
  name: "trader",
  components: {
    Exchange,
    SignalInfo,
    TimeAgo,
  },
  props: {
    signalData: {
      type: Object,
      default: Object,
    },
  },
  computed: {
    //check is single signal type
    checkSignalType() {
      const { type } = this.signalData;
      return type === 0 ? "color-green-1" : "color-red-1";
    },
  },
};
</script>

<style scoped>
</style>
