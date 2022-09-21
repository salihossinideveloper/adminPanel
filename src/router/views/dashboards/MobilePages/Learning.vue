<template>
  <main-layout>
    <section class="container page-links p-3">
      <ul class="px-0 d-flex flex-wrap justify-content-center">
        <li class="px-3 mb-3">
          <router-link to="/invoices/article/list" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-articles icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">مقالات</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/invoices/cource/list" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-courses icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">دوره ها</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/invoices/books/list" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-jozve icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">جزوه ها</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/invoices/free/list" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-free-video icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">ویدئوهای رایگان سایت</span>
          </router-link>
        </li>
      </ul>
    </section>
  </main-layout>
</template>

<script>
export default {
  name: "Learning"
}
</script>

<style scoped>

</style>