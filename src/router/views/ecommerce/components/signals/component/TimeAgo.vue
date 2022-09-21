<template>
  <span class="font-size-14 fw-bold color-black-2 px-1">
    {{ currentTime() }}
  </span>
</template>

<script>
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
export default {
  name: "TimeAgo",
  props: {
    time: {
      type: String,
      default: "",
    },
  },
  methods: {
    currentTime() {
      moment.locale("fa", fa);
      moment.loadPersian();
      let splitTime = this.time.split("T")[0].toString();
      return moment(splitTime).fromNow();
    },
  },
};
</script>

<style scoped></style>
