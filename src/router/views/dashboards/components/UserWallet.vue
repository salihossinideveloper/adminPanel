<template>
  <div class="wallet-box col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-3 p-3">
    <div class="d-flex flex-column position-relative bgc-blue-gradiant box-shadow-1 border-radius-15 px-4 py-3 h-100">
      <div class="icon-bg position-absolute">
        <i class="icon-font-ellipse-1 position-absolute color-blue-16"></i>
        <i class="icon-font-ellipse-2 position-absolute color-blue-16"></i>
        <i class="icon-font-ellipse-3 position-absolute color-blue-16"></i>
        <i class="icon-font-ellipse-4 position-absolute color-blue-16 d-block d-md-none icon-color-gradiant-white-blue-1"></i>
      </div>
      <div class="head d-flex align-items-center position-relative z-1">
        <i class="icon-font-wallet icon-color-gradiant-blue-2 font-size-32 fw-bold fw-bold__before"></i>
        <span class="font-size-20 pt-1 ps-2 fw-bold color-gray-6">کیف پول</span>
      </div>
      <div class="d-flex flex-column main h-100 position-relative z-1">
        <div class="pt-3">
          <span class="color-gray-7 font-size-16 fw-bold">موجودی شما:</span>
          <span class="color-gray-7 font-size-16 fw-bold ps-2">{{ balance }}تومان</span>
        </div>
        <div class="mb-0 mb-md-2 d-flex justify-content-end justify-content-md-start mt-auto">
          <router-link to="" class="d-inline-flex align-items-center color-blue-4">
            <span class="font-size-12 pe-3 fw-bold">افزایش موجودی</span>
            <img src="/img/chevron-left.da5f357c.svg" alt=""></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserWallet",
  props:{
    balance:{
      type:String,
      default:String
    }
  }
}
</script>

<style scoped>

</style>