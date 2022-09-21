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
              <h4 class="color-white-2 font-size-30">
                به <span class="color-gold-2"> ترید اپ </span>خوش آمدید
              </h4>
              <h4 class="color-white-2 font-size-30">نرم افزار تخصصی ارز دیجیتال</h4>
            </div>
          </div>
          <div
            class="col-12 col-lg-6 d-flex align-items-center justify-content-center position-relative login-content pt-4 pt-lg-0">
            <section class="position-relative z-1">
              <loader :loading="loading">
                <h5 class="font-size-32 text-black">تغییر رمز</h5>
                <!--phone number-->
                <div class="move-placeholder position-relative mt-4 form-control__purple">
                  <input v-model="changePasswordParams.phone" :class="{
                    'is-invalid': submitted && $v.changePasswordParams.phone.$error,
                  }" type="number" class="form-control px-4 py-4 box-shadow-1" id="num"
                    placeholder="dont change placeholder" />
                  <label for="num" class="form-label position-absolute pointer-events-none">شماره موبایل</label>
                  <a href="#" class="icon-font-edit edit-icon font-size-18 bgc-white fw-bold position-absolute"></a>
                </div>
                <div v-if="submitted && !$v.changePasswordParams.phone.required" class="error-preview">
                  شماره تلفن اجباری است
                </div>
                <!--check mobile length is 11-->
                <div v-if="submitted && $v.changePasswordParams.phone.$error" class="error-preview">
                  <span v-if="!$v.changePasswordParams.phone.maxLength">شماره موبایل باید 11 کاراکتر باشد</span>
                </div>
                <!--********************-->
                <!--Token-->
                <div class="move-placeholder position-relative mt-4 form-control__purple">
                  <input v-model="changePasswordParams.token" :class="{
                    'is-invalid': submitted && $v.changePasswordParams.token.$error,
                  }" type="number" class="form-control px-4 py-4 box-shadow-1" id="token"
                    placeholder="dont change placeholder" />
                  <label for="token" class="form-label position-absolute pointer-events-none">کد پیامکی</label>
                  <a href="#" class="icon-font-edit edit-icon font-size-18 bgc-white fw-bold position-absolute"></a>
                </div>
                <div v-if="submitted && !$v.changePasswordParams.token.required" class="error-preview">
                  کد پیامکی اجباری است
                </div>
                <!--********************-->
                <!--Password-->
                <div class="move-placeholder position-relative mt-4 form-control__purple">
                  <input v-model="changePasswordParams.password" :class="{
                    'is-invalid': submitted && $v.changePasswordParams.password.$error,
                  }" type="password" class="form-control px-4 py-4 box-shadow-1" id="password"
                    placeholder="dont change placeholder" />
                  <label for="password" class="form-label position-absolute pointer-events-none">کلمه عبور</label>
                  <a href="#" class="icon-font-edit edit-icon font-size-18 bgc-white fw-bold position-absolute"></a>
                </div>
                <div v-if="submitted && !$v.changePasswordParams.password.required" class="error-preview">
                  رمز عبور اجباری است
                </div>
                <!--********************-->
                <!--Confirmation Password-->
                <div class="move-placeholder position-relative mt-4 form-control__purple">
                  <input v-model="changePasswordParams.password_confirmation" :class="{
                    'is-invalid':
                      submitted && $v.changePasswordParams.password_confirmation.$error,
                  }" type="password" class="form-control px-4 py-4 box-shadow-1" id="password_confirmation"
                    placeholder="dont change placeholder" />
                  <label for="password_confirmation" class="form-label position-absolute pointer-events-none">تکرار کلمه
                    عبور</label>
                  <a href="#" class="icon-font-edit edit-icon font-size-18 bgc-white fw-bold position-absolute"></a>
                </div>
                <div v-if="
                  submitted && !$v.changePasswordParams.password_confirmation.required
                " class="error-preview">
                  تکرار رمز عبور اجباری است
                </div>

                <span @click="changePasswordAction"
                  class="btn btn-primary bgc-blue-20 bgc-blue-20-80-hover color-white border-color-blue-19 w-100 border-radius-10 py-3 mt-4">تایید</span>
              </loader>
            </section>
          </div>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import { ChangePassword } from "@/Service/Actions/User";
import { maxLength, required } from "vuelidate/lib/validators";
import modules from "@/modules";

/**
 * Change Password component
 */
export default {
  page: {
    title: "تغییر رمز عبور",
  },
  data() {
    return {
      changePasswordParams: {
        phone: "",
        token: "",
        password: "",
        password_confirmation: "",
      },
      loading: false,
      submitted: false,
    };
  },
  validations: {
    changePasswordParams: {
      phone: {
        required,
        maxLength: maxLength(11),
      },
      token: {
        required,
        maxLength: maxLength(4),
      },
      password: {
        required,
      },
      password_confirmation: {
        required,
      },
    },
  },
  methods: {
    //change password
    async changePasswordAction() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        await ChangePassword(this.changePasswordParams)
          .then((response) => {  //eslint-disable-line
            this.$store.dispatch(
              "notification/showSingleMessageSuccess",
              response.message
            );
            //redirect user to login form
            this.goToLogin();
            //disable loading status
            this.loading = false;
          })
          .catch((error) => {  //eslint-disable-line
            //show error notification to user
            this.$store.dispatch(
              "notification/showErrorsNotification",
              error.response.data.errors
            );
            this.loading = false;
          });
      }
    },
    //redirect user to login route
    goToLogin() {
      modules.actions.redirectTo("/login");
    },
  },
};
</script>
