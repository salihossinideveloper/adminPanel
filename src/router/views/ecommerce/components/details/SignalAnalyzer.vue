<template>
  <div
      class="signal-analysis d-flex flex-column position-relative bgc-blue-40 box-shadow-1 border-radius-10 px-4 py-3 w-100 overflow-hidden">
    <div class="icon-bg position-absolute">
      <i class="icon-font-ellipse-6 position-absolute color-blue-26-10"></i>
    </div>
    <div class="d-flex flex-column position-relative z-1">
      <h4 class="font-size-20 color-black-2 fw-bold mx-auto">تحلیلگر سیگنال</h4>
      <div class="image mx-auto rounded-circle overflow-hidden">
        <img
            src="@/assets/images/users/user-not-fount.jpeg" class="w-100 h-100" alt="">
      </div>
      <span class="font-size-14 color-black-2 fw-bold mx-auto pt-2">
                    {{ name }}
                  </span>
      <div v-if="false" class="d-flex align-items-center justify-content-evenly mt-2">
        <div class="d-flex align-items-center justify-content-center pb-1 mb-1">
          <i class="icon-font-score icon font-size-22 icon-color-gradiant-blue fw-bold"></i>
          <span
              class="color-blue-4 font-size-16 px-2"> امتیاز: {{
              score
            }} </span>
        </div>
        <div class="d-flex align-items-center justify-content-center pb-1 mb-1">
          <i class="icon-font-user-level icon font-size-22 icon-color-gradiant-blue fw-bold"></i>
          <span class="color-blue-4 font-size-16 px-2"> رتبه: {{ rank }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignalAnalyzer",
  props: {
    name: {
      type: String,
      default: ''
    },
    score: {
      type: String,
      default: ''
    },
    rank: {
      type: Number,
      default: 0
    },
    userImage: {
      type: String,
      default: ""
    },
  }
}
</script>

<style scoped>

</style>