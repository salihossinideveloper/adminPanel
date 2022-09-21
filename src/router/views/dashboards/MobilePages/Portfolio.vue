<template>
  <main-layout>
    <section class="container page-links p-3">
      <ul class="px-0 d-flex flex-wrap justify-content-center">
        <li class="px-3 mb-3">
          <router-link to="/portfolio/create" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-bitcoin-wallet icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">تعریف پورتفو</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/portfolio/signals" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-portfo-signal icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">سیگنال پورتفو</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/portfolio/articles" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-articles icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">اخبار پورتفو</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/portfolio/connection-wallet" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-user-wallet icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">اتصال کیف پول</span>
          </router-link>
        </li>
      </ul>
    </section>
  </main-layout>
</template>

<script>
export default {
  name: "Technical"
}
</script>

<style scoped>

</style>