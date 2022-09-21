<template>
  <div
    class="sidebar bgc-gray-1 border-radius-12 d-flex align-items-center flex-column py-0 py-lg-3 overflow-auto position-relative">
    <div class="bg-icon position-absolute d-none d-lg-flex">
      <i class="icon-font-ellipse-5 icon color-blue-26-10"></i>
    </div>
    <div class="nav-sm position-relative d-flex d-lg-none">
      <router-link to="/" class="d-inline-flex back align-items-center position-absolute py-2 color-blue-33">
        <i class="icon-font-chevron-right color-blue-33 px-2 font-size-24"></i>
        بازگشت
      </router-link>
      <img src="@/assets/images/profile/profile-head.png" class="w-100 h-100 login-img object-fit-fill" alt="">
    </div>
    <div class="avatar-image bgc-blue-3-gradiant p-1 rounded-circle px-3 position-relative z-1">
      <img src="@/assets/images/users/user-not-fount.jpeg" class="w-100 h-100 rounded-circle" alt="">
    </div>
    <h4 class="font-size-16 mt-3 mb-0 px-3 position-relative z-1">
      {{getUserInfo.name}}
    </h4>
    <h5 class="color-gold-3 font-size-16 mt-1 px-3 position-relative z-1 d-none">کاربر طلایی</h5>
    <div class="profile-wallet position-relative px-3 w-100">
      <div class="position-relative w-100 bgc-blue-30 border-radius-10 mb-3 d-block d-lg-none">
        <img src="@/assets/images/profile/wallet-bg.png" class="image position-absolute object-fit-cover w-100 h-100"
          alt="">
        <div class="position-relative z-1 d-flex flex-wrap justify-content-center pt-4">
          <span class="font-size-12 color-gray-15 w-100 text-center">موجودی کیف پول: {{getUserInfo.credit}} تومان</span>
          <ul class="px-0 d-flex mt-4 mb-1 w-100 d-flex flex-wrap justify-content-center d-none">
            <li class="px-2 mb-2">
              <a href=""
                class="btn btn-primary bgc-blue-31 bgc-blue-31-50-hover color-black font-size-12 fw-bold border-color-blue-31 w-100 border-radius-10 py-2 px-4 mt-0">افزایش
                موجودی</a>
            </li>
            <li class="px-2 mb-2">
              <a href=""
                class="btn btn-primary bg-transparent bgc-blue-31-50-hover color-gray-15 font-size-12 fw-bold border-color-blue-31 w-100 border-radius-10 py-2 px-4 mt-0">برداشت
                از کیف پول</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 w-100 position-relative z-1 d-none">
      <div class="info-box info-box-blue d-flex bgc-blue-2 border-0 border-radius-10 w-100">
        <div class="d-flex flex-column flex-fill item align-items-center">
          <span class="font-size-14 fw-bold color-gray-15 title"> پلن فعال </span>
          <span class="font-size-14 fw-bold color-gold-3"> طلایی</span>
        </div>
        <div class="d-flex flex-column flex-fill item align-items-center">
          <span class="font-size-14 fw-bold color-gray-15 title"> روزهای باقی مانده</span>
          <span class="font-size-14 fw-bold color-gold-3">180</span>
        </div>
        <div class="d-flex flex-fill item justify-content-center align-items-center">
          <a href="" class="d-flex align-items-center revival">
            <span class="font-size-14 fw-bold color-gray-15 pe-0 pe-lg-2">تمدید یا تغییر پلن</span>
            <i class="icon-font-arrow-down arrow-left color-gold-3 font-size-14 d-none d-lg-block"></i>
          </a>
        </div>
      </div>
    </div>
    <ul class="menu page-links d-flex flex-column w-100 px-0 mt-3 position-relative z-1">
      <li class="w-100 active px-3 px-lg-2 position-relative d-none">
        <router-link to="/userprofile/UserWallet"
          class="d-flex py-3 w-100 align-items-center item border-bottom border-bottom-color-gray-16 px-3">
          <div
            class="icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2 pe-2 w-auto h-auto position-relative">
            <i class="icon-font-wallet icon icon-color-gradiant-blue font-size-26"></i>
          </div>
          <span class="font-size-14 fw-bold">کیف پول</span>
          <i class="icon-font-arrow-down arrow-left color-blue-3 font-size-14 d-block d-lg-none ms-auto"></i>
        </router-link>
      </li>
      <li class="w-100 active px-3 px-lg-2 position-relative">
        <router-link to="/userprofile/EditProfile"
          class="d-flex py-3 w-100 align-items-center item border-bottom border-bottom-color-gray-16 px-3">
          <div
            class="icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2 pe-2 w-auto h-auto">
            <i class="icon-font-profile icon icon-color-gradiant-blue font-size-26"></i>
          </div>
          <span class="font-size-14 fw-bold">اطلاعات کاربر</span>
          <i class="icon-font-arrow-down arrow-left color-blue-3 font-size-14 d-block d-lg-none ms-auto"></i>
        </router-link>
      </li>
      <li class="w-100 px-3 px-lg-2 position-relative d-none">
        <router-link to="/userprofile/ChangePassword"
          class="d-flex py-3 w-100 align-items-center item border-bottom border-bottom-color-gray-16 px-3">
          <div
            class="icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2 pe-2 w-auto h-auto">
            <i class="icon-font-lock icon icon-color-gradiant-blue font-size-26"></i>
          </div>
          <span class="font-size-14 fw-bold">تغییر رمز عبور</span>
          <i class="icon-font-arrow-down arrow-left color-blue-3 font-size-14 d-block d-lg-none ms-auto"></i>
        </router-link>
      </li>
      <li class="w-100 px-3 px-lg-2 position-relative d-none">
        <router-link to="/userprofile/ChangePassword"
          class="d-flex py-3 w-100 align-items-center item border-bottom border-bottom-color-gray-16 px-3">
          <div
            class="icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2 pe-2 w-auto h-auto">
            <i class="icon-font-book-2 icon icon-color-gradiant-blue font-size-26"></i>
          </div>
          <span class="font-size-14 fw-bold">دوره های خریداری شده</span>
          <i class="icon-font-arrow-down arrow-left color-blue-3 font-size-14 d-block d-lg-none ms-auto"></i>
        </router-link>
      </li>
      <li class="w-100 px-3 px-lg-2 position-relative d-none">
        <router-link to="/userprofile/Purchase"
          class="d-flex py-3 w-100 align-items-center item border-bottom border-bottom-color-gray-16 px-3">
          <div
            class="icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2 pe-2 w-auto h-auto">
            <i class="icon-font-basket icon icon-color-gradiant-blue font-size-26"></i>
          </div>
          <span class="font-size-14 fw-bold">سوابق خرید </span>
          <i class="icon-font-arrow-down arrow-left color-blue-3 font-size-14 d-block d-lg-none ms-auto"></i>
        </router-link>
      </li>
      <li class="w-100 px-3 px-lg-2 position-relative">
        <span @click="logoutUser" class="d-flex py-3 w-100 align-items-center item px-3 pointer">
          <div
            class="icon-box bg-line bg-line-bottom d-flex align-items-center justify-content-center bgc-white-2 pe-2 w-auto h-auto">
            <i class="icon-font-exit icon icon-color-gradiant-blue font-size-26"></i>
          </div>
          <span class="font-size-14 fw-bold">خروج از حساب کاربری</span>
          <i class="icon-font-arrow-down arrow-left color-blue-3 font-size-14 d-block d-lg-none ms-auto"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import modules from '@/modules';
import { Logout } from "@/Service/Actions/User";
export default {
  name: "sidebard",
  computed: {
    getUserInfo() {
      return modules.actions.getUser()
    }
  },
  methods: {
    async logoutUser() {
      await Logout().then((response) => {
        //eslint-disable-line
        modules.actions.clearTokenAndUserInformation();
        modules.actions.redirectTo("/login");
      });
    },
  }
}
</script>

<style scoped>

</style>