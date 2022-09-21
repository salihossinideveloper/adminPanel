<template>
  <ul class="d-flex flex-wrap px-0">
    <li v-for="item in list" :key="item.id" class="pe-2 mb-2">
      <button type="button" class="btn btn-success fw-bold py-1 px-3 font-size-11" :class="[checkSignalType]">
        {{ item.title }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "exchange",
  props: {
    list: {
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