<template>
  <main-layout>
    <section class="container page-links p-3">
      <ul class="px-0 d-flex flex-wrap justify-content-center">
        <li class="px-3 mb-3">
          <router-link to="/signal/list" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-vip-chanel icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">کانال Vip</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/tradeAssistant/chart" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-trade-assistant icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">دستیار ترید</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/trade" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-weekly-analiz icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">آنالیز هفتگی</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/calculationProfitLoss" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-formula-risk icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">فرمول ریسک</span>
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