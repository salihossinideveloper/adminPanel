<template>
  <div class="d-flex flex-column px-4 mb-3">
    <div class="w-100">
      <h5 class="font-size-14 fw-bold color-black-2">اطلاعات</h5>
    </div>
    <!-- info-box d-flex bgc-green-3 -->
    <div class="info-box d-flex" :class="[checkSignalType.parentClass]">
      <div class="d-flex flex-column flex-fill item align-items-center">
        <!-- font-size-14 fw-bold color-gray-4 -->
        <span class="font-size-14 fw-bold" :class="[checkSignalType.childClass]"
          >میزان ریسک</span
        >
        <!-- font-size-14 color-gray-3 -->
        <span class="font-size-14" :class="[checkSignalType.childClass]">
          {{ risk }}
        </span>
      </div>
      <div class="d-flex flex-column flex-fill item align-items-center">
        <span class="font-size-14 fw-bold" :class="[checkSignalType.childClass]"
          >مدت سیگنال</span
        >
        <span class="font-size-14" :class="[checkSignalType.childClass]">
          {{ period }}
        </span>
      </div>
      <div class="d-flex flex-column flex-fill item align-items-center">
        <span class="font-size-14 fw-bold" :class="[checkSignalType.childClass]"
          >R/R</span
        >
        <span class="font-size-14" :class="[checkSignalType.childClass]">
          {{ Math.round(riskReward * 100) / 100 }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  props: {
    riskReward: {
      type: Number,
      default: null,
    },
    risk: {
      type: String,
      default: null,
    },
    period: {
      type: String,
      defauil: null,
    },
    signalType: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    //check is single signal type
    checkSignalType() {
      // return this.signalType === 0 ?
      //   "color-green-1 border-color-green-1 bgc-green-3" :
      //   "color-white border-color-red-1 bgc-red-1";
      if (this.signalType === 1) {
        //فروش
        return {
          parentClass: "public bgc-red-1",
          childClass: "color-white",
        };
      } else {
        //خرید
        return {
          parentClass: "public bgc-green-3",
          childClass: "color-green-1",
        };
      }
    },
  },
};
</script>

<style scoped lang="scss">
.public {
  border: 1px solid #ccc;
  padding: 5px 0;
  border-radius: 8px;
}
</style>
