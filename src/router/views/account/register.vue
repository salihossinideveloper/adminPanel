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
                <h5 class="font-size-32 text-black">ساخت اکانت</h5>
                <div class="move-placeholder position-relative mt-4 form-control__purple">
                  <input v-model="user.phone" type="number" class="form-control px-4 py-4 box-shadow-1" id="num"
                    placeholder="dont change placeholder" />
                  <label for="num" class="form-label position-absolute pointer-events-none">شماره موبایل</label>
                  <a href="#" class="icon-font-edit edit-icon font-size-18 bgc-white fw-bold position-absolute"></a>
                </div>
                <div class="move-placeholder position-relative mt-4 form-control__purple">
                  <input @keydown.enter="tryToRegister" v-model="user.name" class="form-control px-4 py-4 box-shadow-1"
                    id="name" placeholder="dont change placeholder" />
                  <label for="name" class="form-label position-absolute pointer-events-none">نام</label>
                  <span class="icon-font-edit edit-icon font-size-18 bgc-white fw-bold position-absolute"></span>
                </div>
                <section class="d-flex">
                  <span @click="tryToRegister"
                    class="btn btn-primary bgc-blue-20 bgc-blue-20-80-hover color-white border-color-blue-19 w-100 border-radius-10 py-3 mt-4">ثبت
                    نام</span>
                  <router-link to="/login"
                    class="btn btn-primary bgc-blue-20 bgc-blue-20-80-hover color-white border-color-blue-19 w-100 border-radius-10 py-3 mt-4">
                    بازگشت</router-link>
                </section>
              </loader>
            </section>
          </div>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import appConfig from "@/app.config";
import { maxLength, required } from "vuelidate/lib/validators";
import { Register } from "@/Service/Actions/User";
import modules from "@/modules";

export default {
  page: {
    title: "Register",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      user: {
        name: "",
        phone: "",
      },
      loading: false,
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
    };
  },
  validations: {
    user: {
      name: {
        required,
      },
      phone: {
        required,
        maxLength: maxLength(11),
      },
    },
  },
  methods: {
    // and password they provided.
    async tryToRegister() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.loading = true;
        await Register(this.user)
          .then((response) => {
            //save token
            this.saveToken(response.data.token);
            //show single message success with user login
            this.$store.dispatch(
              "notification/showSingleMessageSuccess",
              response.message
            );
            //save user information
            this.saveCurrentUserInformation(response.data.user);
            //loading stop
            this.loading = false;
            //go to dashboard route
            this.redirectToDashboard();
          })
          .catch((error) => {
            //show error notification to user
            this.$store.dispatch(
              "notification/showErrorsNotification",
              error.response.data.errors
            );
            //loading stop
            this.loading = false;
          });
      }
    },
    //save to storage user token
    saveToken(token) {
      modules.actions.setToken(token);
    },
    saveCurrentUserInformation(userInfo) {
      modules.actions.setUser(userInfo);
    },
    //redirect to dashboard route
    redirectToDashboard() {
      modules.actions.redirectTo("/");
    },
  },
};
</script>
