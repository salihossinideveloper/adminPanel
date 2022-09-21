<template>
  <authLayout>
    <div
      class="d-flex flex-column align-items-center justify-content-center flex-lg-row login login-central"
    >
      <div class="container box-shadow-1 border-radius-15 overflow-hidden">
        <div class="row h-100 overflow-hidden">
          <div class="col-12 col-lg-6 position-relative welcome">
            <div class="position-absolute login-pattern overflow-hidden d-none d-lg-flex">
              <i
                class="icon-font-sun position-absolute top justify-content-start px-5 mx-5 color-blue-21"
              ></i>
              <i
                class="icon-font-sun position-absolute bottom justify-content-end color-blue-21"
              ></i>
              <i
                class="circle position-absolute bottom justify-content-end bgc-gray-19"
              ></i>
            </div>
            <div
              class="h-100 position-relative z-1 d-flex flex-column align-items-center justify-content-center"
            >
              <h4 class="color-white-2 font-size-30">
                به <span class="color-gold-2"> ترید اپ </span>خوش آمدید
              </h4>
              <h4 class="color-white-2 font-size-30">نرم افزار تخصصی ارز دیجیتال</h4>
            </div>
          </div>

          <div
            class="col-12 col-lg-6 d-flex align-items-center justify-content-center position-relative login-content pt-4 pt-lg-0"
          >
            <form class="position-relative z-1">
              <loader :loading="loading">
                <h5 class="font-size-32 text-black">ورود</h5>
                <div class="move-placeholder position-relative mt-4 form-control__purple">
                  <input
                    v-model="login.phone"
                    type="number"
                    class="form-control px-4 py-4 box-shadow-1"
                    id="num"
                    placeholder="dont change placeholder"
                    :class="{
                      'is-invalid': submitted && $v.login.phone.$error,
                    }"
                  />
                  <label
                    for="num"
                    class="form-label position-absolute pointer-events-none"
                    >شماره موبایل</label
                  >
                  <!--                  <a href="#" class="icon-font-edit edit-icon font-size-18 bgc-white fw-bold position-absolute"></a>-->
                </div>
                <div v-if="submitted && $v.login.phone.$error" class="error-preview">
                  <span v-if="!$v.login.phone.required">شماره موبایل اجباری است</span>
                </div>
                <div class="move-placeholder position-relative mt-4 form-control__purple">
                  <input
                    @keydown.enter="tryToLogIn"
                    v-model="login.password"
                    type="password"
                    class="form-control px-4 py-4 box-shadow-1"
                    id="password"
                    placeholder="dont change placeholder"
                    :class="{
                      'is-invalid': submitted && $v.login.password.$error,
                    }"
                  />
                  <label
                    for="password"
                    class="form-label position-absolute pointer-events-none"
                    >رمز عبور</label
                  >
                </div>
                <div
                  v-if="submitted && !$v.login.password.required"
                  class="error-preview"
                >
                  رمز عبور اجباری است
                </div>
                <section class="d-flex">
                  <span
                    @click="tryToLogIn"
                    class="btn btn-primary bgc-blue-20 bgc-blue-20-80-hover color-white border-color-blue-19 w-100 border-radius-10 py-3 mt-2"
                    >ورود</span
                  >

                  <router-link
                    to="/register"
                    class="btn btn-primary bgc-blue-20 bgc-blue-20-80-hover color-white border-color-blue-19 w-100 border-radius-10 py-3 mt-2"
                  >
                    ثبت نام
                  </router-link>
                </section>
                <div class="mt-2">
                  <router-link to="/forgot-password">
                    <span class="color-gray-14 font-size-10 fw-bold"
                      >رمز عبور خود را فراموش کرده اید؟</span
                    >
                    <span class="color-blue-18 font-size-10 px-1 fw-bold">کلیک کنید</span>
                  </router-link>
                </div>
              </loader>
            </form>
          </div>
        </div>
      </div>
    </div>
  </authLayout>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { login } from "@/Service/Actions/User";
import { getDeviceKey } from "@/Service/Actions/Notification";
import modules from "@/modules";

/**
 * Login component
 */
export default {
  page: {
    title: "صفحه لاگین",
  },
  data() {
    return {
      login: {
        phone: "",
        password: "",
      },
      loading: false,
      submitted: false,
      authError: null,
      tryingToLogIn: false,
    };
  },
  validations: {
    login: {
      phone: {
        required,
      },
      password: {
        required,
      },
    },
  },
  computed: {
    getCurrentUserPhoneNumber() {
      return modules.actions.getUser().phone;
    },
  },
  methods: {
    async tryToLogIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        await login(this.login)
          .then((response) => {
            //save user information
            this.saveCurrentUserInformation(response.data.user);
            //save token
            this.saveToken(response.data.token);
            this.getCurrentUserDeviceKeyWithPushe(response.message);
          })
          .catch((error) => {
            //show error notification to user
            this.$store.dispatch(
              "notification/showErrorsNotification",
              error.response.data.errors
            );
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
    //********************** */
    //NOTIFICATION
    getCurrentUserDeviceKeyWithPushe(message) {
      Pushe.getDeviceId().then((deviceId) => {
        getDeviceKey({
          device_id: deviceId,
        }).then((response) => {
          //loading stop
          this.loading = false;
          this.$store.dispatch("notification/showSingleMessageSuccess", message);
           //go to dashboard route
           this.redirectToDashboard();
        });
      });
    },
  },
};
</script>
