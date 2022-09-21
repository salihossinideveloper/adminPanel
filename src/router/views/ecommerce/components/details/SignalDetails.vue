<template>
  <div class="pt-3">
    <h4 class="color-black-2 font-size-20 fw-bold border-bottom border-bottom-color-blue-8 pb-2 d-inline-flex pe-3">
      جزیئات سیگنال</h4>
    <ul class="d-flex flex-column px-0 mt-2 table border border-color-blue-41 border-radius-12 overflow-hidden">
      <li class="d-flex item">
        <div v-for="(item, index) in entriesList" :key="index++" class="d-flex flex-fill col-6 border-l">
          <span class="col-6 color-black-2 font-size-16">محدوده ورود {{ index }}</span>
          <span class="col-6 color-green-2 font-size-16" style="font-size: 14px !important;font-weight: 900;">
            {{ item.value }}%
            در قیمت
            {{ item.price | separator(item.price) }}دلار
          </span>
        </div>
      </li>
      <li class="d-flex item" v-if="stateValue !== 'futures'">
        <div class="d-flex flex-fill col-12">
          <span class="col-6 color-black-2 font-size-16">مقدار سفارش</span>
          <span class="col-6 color-gray-3 font-size-16">{{ amount }}</span>
        </div>
      </li>
      <li class="d-flex item">
        <div class="d-flex flex-fill col-6 border-l">
          <span class="col-6 color-black-2 font-size-16">حد ضرر</span>
          <span class="col-6 color-red-1 font-size-16">${{ stopLoss }}</span>
        </div>
        <div class="d-flex flex-fill col-6">
          <span class="col-6 color-black-2 font-size-16">درصد از پرتفو</span>
          <span class="col-6 color-gray-3 font-size-16">{{ percent }}%</span>
        </div>
      </li>

      <li class="d-flex item">
        <div v-for="(item, index) in singleTargets" :key="index++" class="d-flex flex-fill col-6 border-l">
          <span class="col-6 color-black-2 font-size-16">حد سود {{ index }}</span>
          <span class="col-6 color-green-2 font-size-16" style="font-size: 11px !important;font-weight: 900;">
            {{ item.value }}%
            در قیمت
            {{ item.price | separator(item.price) }}دلار
          </span>
        </div>
      </li>
      <li class="d-flex item">
        <div class="d-flex flex-fill col-6 border-l">
          <span class="col-6 color-black-2 font-size-16">میزان ریسک</span>
          <span class="col-6 color-gray-3 font-size-16">
            {{ risk }}
          </span>
        </div>
        <div class="d-flex flex-fill col-6 border-l">
          <span class="col-6 color-black-2 font-size-16">R/R</span>
          <span class="col-6 color-gray-3 font-size-16">{{ Math.round(riskReward * 100) / 100 }}</span>
        </div>
        <div class="d-flex flex-fill col-6 border-l">
          <span class="col-6 color-black-2 font-size-16">مدت سیگنال</span>
          <span class="col-6 color-gray-3 font-size-16">
            {{ time ? time : 0 }}
            روز</span>
        </div>
      </li>
      <li v-if="false" class="d-flex item">
        <div class="d-flex flex-fill col-6 border-l">
          <span class="col-6 color-black-2 font-size-16">‌بازدهی</span>
          <span class="col-6 color-green-2 font-size-16 fw-bold">
            {{ yieldNumber }}%
          </span>
        </div>
        <div class="d-flex flex-fill col-6">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SignalDetails",
  props: {
    entriesList: {
      type: Array,
      default: () => {
        return []
      },
    },
    amount: {
      type: Number,
      default: 0
    },
    stopLoss: {
      type: Number,
      default: 0
    },
    percent: {
      type: Number,
      default: 0
    },
    yieldNumber: {
      type: Number,
      default: 0
    },
    riskReward: {
      type: Number,
      default: 0
    },
    risk: {
      type: String,
      default: String
    },
    time: {
      type: String,
      default: String
    },
    stateValue: {
      type: String,
      default: String
    },
    singleTargets: {
      type: Array,
      default: () => {
        return []
      },
    }
  }
}
</script>

<style scoped>
</style>