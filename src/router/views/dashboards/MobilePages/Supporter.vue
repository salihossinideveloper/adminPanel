<template>
  <main-layout>
    <section class="container page-links p-3">
      <ul class="px-0 d-flex flex-wrap justify-content-center">
        <li class="px-3 mb-3">
          <router-link to="/ticket" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-ticket icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">تیکت</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/ticket" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-online-chat icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">چت آنلاین</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/ticket" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-question-answer icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">پرسش و پاسخ کانال</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/ticket" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-call-center icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">تماس با کارشناسان</span>
          </router-link>
        </li>
      </ul>
    </section>
  </main-layout>
</template>

<script>
export default {
  name: "Supporter"
}
</script>

<style scoped>

</style>