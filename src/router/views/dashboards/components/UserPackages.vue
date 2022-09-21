<template>
  <div class="package-box col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3 p-3">
    <div
      class="d-flex flex-column bgc-purple-1-gradiant box-shadow-1 border-radius-15 px-4 py-3 h-100 position-relative">
      <div class="icon-bg icon position-absolute d-flex align-items-center px-4">
        <i class="icon-font-add-basket color-purple-3-10"></i>
      </div>
      <div class="head d-flex align-items-center position-relative z-1">
        <i class="icon-font-package icon-color-gradiant-purple-1 font-size-32 fw-bold fw-bold__before"></i>
        <span class="font-size-20 pt-1 ps-2 fw-bold color-gray-6">پکیج های شما</span>
      </div>
      <div class="d-flex flex-column main h-100 position-relative z-1">
        <div class="d-flex">
          <div class="pt-3 d-flex flex-fill flex-column">
            <span class="color-gray-7 font-size-18 fw-bold">پکیج فعال شما:</span>
            <span v-if="Object.keys(currentPackage).length" class="color-gold-1 font-size-16 fw-bold">{{
                currentPackage.title
            }}</span>
            <span v-else class="color-gold-1 font-size-16 fw-bold">در حال حاظر پکیج فعالی ندارید</span>
          </div>
          <div class="pt-3 d-flex flex-fill flex-column chart">
          </div>
        </div>
        <div class="mt-2 d-flex justify-content-start mt-auto">
          <a href="" class="d-inline-flex align-items-center color-blue-4">
            <span class="font-size-12 pe-3 fw-bold">اطلاعات بیشتر</span>
            <img src="/img/chevron-left.da5f357c.svg" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPackages",
  props: {
    currentPackage: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
}
</script>

<style scoped>
</style>