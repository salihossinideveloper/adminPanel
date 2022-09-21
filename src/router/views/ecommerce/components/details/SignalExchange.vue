<template>
  <div class="border-bottom border-bottom-color-blue-38">
    <h4 class="color-black-2 font-size-20 fw-bold border-bottom border-bottom-color-blue-8 pb-2 d-inline-flex pe-3">
      صرافی ها</h4>
    <ul class="d-flex flex-wrap px-0 mt-2">
      <li v-for="item in exchangeList" :key="item.id" class="pe-2 mb-2">
        <button type="button" class="btn btn-success border-radius-15 fw-bold py-1 px-3" :class="[checkSignalType]">
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SignalExchange",
  props: {
    exchangeList: {
      type: Array,
      default: () => {
        return []
      },
    },
    signalType: {
      type: Number,
      default: 0
    }
  },
  computed: {
    //check is single signal type
    checkSignalType() {
      return this.signalType === 0 ? "color-green-1 border-color-green-1 bgc-green-3" : "color-white border-color-red-1 bgc-red-1";
    },
  },
}
</script>

<style scoped>
</style>