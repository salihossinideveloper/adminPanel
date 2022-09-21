<template>
  <main-layout>
    <section class="container page-links p-3">
      <ul class="px-0 d-flex flex-wrap justify-content-center">
        <li class="px-3 mb-3">
          <router-link to="/blog/6" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-blog icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">اخبار</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/chart/glassNode" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-unchain icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">آنچین</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/social/11" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-social icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">سوشال</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/project/2" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-project icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">پروژه</span>
          </router-link>
        </li>
        <li class="px-3 mb-3">
          <router-link to="/airdrop/25" class="d-flex flex-column align-items-center color-blue-18 item">
            <div
                class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
              <i class="icon-font-airdrop icon icon-color-gradiant-blue"></i>
            </div>
            <span class="font-size-14 fw-bold mt-2">ایردراپ</span>
          </router-link>
        </li>
      </ul>
    </section>
  </main-layout>
</template>

<script>
export default {
  name: "Fundamental"
}
</script>

<style scoped>

</style>