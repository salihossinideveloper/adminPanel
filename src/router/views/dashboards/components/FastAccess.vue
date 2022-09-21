<template>
  <div class="page-links col-12 p-3 d-md-none d-lg-none">
    <ul class="px-0 d-flex flex-wrap justify-content-center">
      <!--user profile-->
      <li class="padding-mobile mb-3">
        <router-link to="/userprofile/EditProfile" class="d-flex flex-column align-items-center color-blue-18 item">
          <div
            class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
            <i class="icon-font-profile icon icon-color-gradiant-blue"></i>
          </div>
          <span class="font-size-14 fw-bold mt-2">
            پروفایل
          </span>
        </router-link>
      </li>
      <!--technical-->
      <li class="padding-mobile mb-3">
        <router-link to="/technical" class="d-flex flex-column align-items-center color-blue-18 item">
          <div
            class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
            <i class="icon-font-chart icon icon-color-gradiant-blue"></i>
          </div>
          <span class="font-size-14 fw-bold mt-2">تکنیکال</span>
        </router-link>
      </li>
      <!--fundamental-->
      <li class="padding-mobile mb-3">
        <router-link to="/fundamental" class="d-flex flex-column align-items-center color-blue-18 item">
          <div
            class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
            <i class="icon-font-signal icon icon-color-gradiant-blue"></i>
          </div>
          <span class="font-size-14 fw-bold mt-2">فاندامنتال</span>
        </router-link>
      </li>
      <!--supporter-->
      <li class="padding-mobile mb-3">
        <router-link to="/supporter" class="d-flex flex-column align-items-center color-blue-18 item">
          <div
            class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
            <i class="icon-font-headphone icon icon-color-gradiant-blue"></i>
          </div>
          <span class="font-size-14 fw-bold mt-2">پشتیبانی</span>
        </router-link>
      </li>
      <!--learning-->
      <li class="padding-mobile mb-3">
        <router-link to="/learning" class="d-flex flex-column align-items-center color-blue-18 item">
          <div
            class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
            <i class="icon-font-book-2 icon icon-color-gradiant-blue"></i>
          </div>
          <span class="font-size-14 fw-bold mt-2">آموزش</span>
        </router-link>
      </li>
      <!--portfolio-->
      <li class="padding-mobile mb-3">
        <a href="" class="d-flex flex-column align-items-center color-blue-18 item">
          <div
            class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
            <i class="icon-font-bitcoin-wallet icon icon-color-gradiant-blue"></i>
          </div>
          <span class="font-size-14 fw-bold mt-2">پرتفو</span>
        </a>
      </li>
      <!--festival-->
      <li class="px-3 mb-3 d-none">
        <a href="" class="d-flex flex-column align-items-center color-blue-18 item">
          <div
            class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
            <i class="icon-font-gift icon icon-color-gradiant-blue"></i>
          </div>
          <span class="font-size-14 fw-bold mt-2">جشنواره</span>
        </a>
      </li>
      <li class="px-3 mb-3 d-none">
        <a href="" class="d-flex flex-column align-items-center color-blue-18 item">
          <div
            class="bgc-white box-shadow-1 icon-box bg-line bg-line-top d-flex align-items-center justify-content-center bgc-white-2">
            <i class="icon-font-VR icon icon-color-gradiant-blue"></i>
          </div>
          <span class="font-size-14 fw-bold mt-2">راهبران پلاس</span>
        </a>
      </li>
      <li class="px-3 mb-3 d-none">
        <a href="" class="d-flex flex-column align-items-center color-blue-18 item">
          <div
            class="bgc-white box-shadow-1 icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2">
            <i class="icon-font-VR icon icon-color-gradiant-blue"></i>
          </div>
          <span class="font-size-14 fw-bold mt-2">متاورس</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FastAccess"
}
</script>

<style scoped>
.padding-mobile {
  padding-left: 8px !important;
}
</style>