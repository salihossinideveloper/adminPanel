<template>
  <section class="single-signal-detail d-flex justify-content-between mb-8">
    <legend>
      سیگنال
      {{ signalTypeName }} -
      <span class="pe-2 mb-2">
      <button
          v-if="signalType === 0"
          type="button"
          class="btn btn-success border-radius-15 fw-bold py-1 px-3 color-green-1 bgc-green-3 border border-color-green-1">
        Buy/long
      </button>
      <button
          v-if="signalType === 1"
          type="button"
          class="btn btn-success border-radius-15 fw-bold py-1 px-3 color-white bgc-red-1 border border-color-red-1">
        Sell/short
      </button>
    </span>
    </legend>
    <section class="back-to-signal">
      <router-link to="/signal/list">
        <button class="btn btn-light">
          بازگشت
        </button>
      </router-link>
    </section>
  </section>

</template>

<script>
export default {
  name: "signalType",
  props: {
    signalTypeName: {
      type: String,
      default: ''
    },
    signalType: {
      type: Number,
      default: 0
    }
  },
}
</script>

