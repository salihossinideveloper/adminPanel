<template>
  <div class="courses-box col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-4 p-3">
    <div
        class="d-flex flex-column bgc-blue-2-gradiant box-shadow-1 border-radius-15 px-4 py-3 h-100 position-relative">
      <div class="icon-bg icon position-absolute d-flex align-items-center px-4">
        <i class="icon-font-book color-blue-17-4"></i>
      </div>
      <div class="head d-flex align-items-center position-relative z-1">
        <i class="icon-font-library icon-color-gradiant-blue-2 font-size-32"></i>
        <span class="font-size-20 pt-1 ps-2 fw-bold color-gray-6">دوره های آموزشی شما</span>
      </div>
      <div class="d-flex flex-column main h-100 position-relative z-1">
        <ul class="px-0 w-100 d-flex flex-wrap mt-2">
          <template v-if="userPackage.length>0">
            <li
                v-for="item in userPackage"
                :key="item.id"
                class="w-100 mt-2">
              <router-link to="/"
                           class="d-flex justify-content-between align-items-center color-black w-100 fw-bold border border-color-blue-14 rounded-3 px-3 py-2">
              <span class="text-nowrap">
                {{ item.title }}
              </span>
                <button type="button"
                        class="d-none flex-shrink-0 btn btn-primary fw-bold py-1 px-3 color-white bgc-blue-13 border-0 border-radius-15 color-white-hover">
                  تکمیل شده
                </button>
              </router-link>
            </li>
          </template>
          <template v-else>
            <li
                class="w-100 mt-2">
              <section
                  class="
                  alert alert-info
                  d-flex
                  justify-content-center
                  align-items-center
                  color-black
                  w-100
                  fw-bold
                  border
                  border-color-blue-14
                  rounded-3 px-3 py-2">
              <span class="text-nowrap ">
              در حال حاظر شما دوره فعالی ندارید !
              </span>
              </section>
            </li>
          </template>

        </ul>
        <div class="mb-2 d-flex justify-content-start mt-auto">
          <router-link to="/all-package" class="d-inline-flex align-items-center color-blue-4">
            <span class="font-size-12 pe-3 fw-bold">مشاهده ی همه</span>
            <img src="/img/chevron-left.da5f357c.svg" alt=""></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserEducationCourses",
  props: {
    userPackage: {
      type: Array,
      default: Array
    }
  }
}
</script>

<style scoped>

</style>