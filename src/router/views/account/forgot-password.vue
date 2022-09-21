<template>
  <auth-layout>
    <div class="d-flex flex-column align-items-center justify-content-center flex-lg-row login login-central">
      <div class="container box-shadow-1 border-radius-15 overflow-hidden">
        <div class="row h-100 overflow-hidden">
          <div class="col-12 col-lg-6 position-relative welcome">
            <div class="position-absolute login-pattern overflow-hidden d-none d-lg-flex">
              <i class="icon-font-sun position-absolute top justify-content-start px-5 mx-5 color-blue-21"></i>
              <i class="icon-font-sun position-absolute bottom justify-content-end color-blue-21"></i>
              <i class="circle position-absolute bottom justify-content-end bgc-gray-19"></i>
            </div>
            <div class="h-100 position-relative z-1 d-flex flex-column align-items-center justify-content-center">
              <h4 class="color-white-2 font-size-32">
                به <span class="color-gold-2"> ترید اپ </span>خوش آمدید
              </h4>
              <h4 class="color-white-2 font-size-32">نرم افزار تخصصی ارز دیجیتال</h4>
            </div>
          </div>
          <div
            class="col-12 col-lg-6 d-flex align-items-center justify-content-center position-relative login-content pt-4 pt-lg-0">
            <section class="position-relative z-1">
              <loader :loading="loading">
                <h5 class="font-size-32 text-black">تغییر رمز</h5>
                <div class="move-placeholder position-relative mt-4 form-control__purple">
                  <input @keydown.enter="forgetPasswordAction" v-model="forgetPasswordParams.phone" :class="{
                    'is-invalid': submitted && $v.forgetPasswordParams.phone.$error,
                  }" type="number" class="form-control px-4 py-4 box-shadow-1" id="num"
                    placeholder="dont change placeholder" />
                  <label for="num" class="form-label position-absolute pointer-events-none">شماره موبایل</label>
                  <span class="icon-font-edit edit-icon font-size-18 bgc-white fw-bold position-absolute"></span>
                </div>
                <div v-if="submitted && !$v.forgetPasswordParams.phone.required" class="error-preview">
                  شماره تلفن اجباری است
                </div>
                <!--check mobile length is 11-->
                <div v-if="submitted && $v.forgetPasswordParams.phone.$error" class="error-preview">
                  <span v-if="!$v.forgetPasswordParams.phone.maxLength">شماره موبایل باید 11 کاراکتر باشد</span>
                </div>
                <span @click="forgetPasswordAction"
                  class="btn btn-primary bgc-blue-20 bgc-blue-20-80-hover color-white border-color-blue-19 w-100 border-radius-10 py-3 mt-4">ارسال
                  رمز</span>
              </loader>
            </section>
          </div>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import { ForgetPassword } from "@/Service/Actions/User";
import { maxLength, required } from "vuelidate/lib/validators";
import modules from "@/modules";

/**
 * Forgot Password component
 */
export default {
  page: {
    title: "فراموشی رمز عبور",
  },
  data() {
    return {
      forgetPasswordParams: {
        phone: "",
      },
      loading: false,
      submitted: false,
    };
  },
  validations: {
    forgetPasswordParams: {
      phone: {
        required,
        maxLength: maxLength(11),
      },
    },
  },
  methods: {
    //forget password
    async forgetPasswordAction() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        await ForgetPassword(this.forgetPasswordParams.phone)
          .then((response) => {  //eslint-disable-line
            this.$store.dispatch(
              "notification/showSingleMessageSuccess",
              response.message
            );
            //change current form forget password to change password and accepted verification code
            this.goToChangePassword();
            this.loading = false;
          })
          .catch((error) => {  //eslint-disable-line
            this.loading = false;
            //show error notification to user
            // this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
          });
      }
    },

    //redirect user to login route
    goToChangePassword() {
      modules.actions.redirectTo("/change-password");
    },
  },
};
</script>
