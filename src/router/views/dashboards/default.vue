<template>
  <main-layout>
    <loader :loading="loading">
      <div class="dashboard-main d-flex flex-wrap">
        <!--waller box-->
        <user-wallet :balance="currentUserInformationData.credit" />
        <!--user education courses-->
        <user-education-courses :user-package="currentUserInformationData.contents" />
        <!--slider box-->
        <slider-box />
        <!--user packages-->
        <user-packages :current-package="currentUserInformationData.package" />
        <!--fast access-->
        <fast-access />
      </div>
    </loader>
  </main-layout>
</template>

<script>
import UserWallet from "./components/UserWallet";
import UserEducationCourses from "./components/UserEducationCourses";
import SliderBox from "./components/SliderBox";
import UserPackages from "./components/UserPackages";
import FastAccess from "./components/FastAccess";
//******************************************************
import { CurrentUserInformation } from "@/Service/Actions/User";

export default {
  page: {
    title: "داشبورد",
  },
  components: {
    UserWallet,
    UserEducationCourses,
    SliderBox,
    UserPackages,
    FastAccess,
  },
  data() {
    return {
      currentUserInformationData: {},
      loading: false,
      currencyLoading: false,
      intervalData: null,
    };
  },
  created() {
    this.getCurrentUserInformation();
  },
  beforeDestroy() {
    clearInterval(this.intervalData);
  },
  methods: {
    //get current user information
    async getCurrentUserInformation() {
      this.loading = true;
      await CurrentUserInformation()
        .then((response) => {
          this.currentUserInformationData = response.data;
          this.loading = false;
        })
        .catch((error) => {
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
          this.loading = false;
        });
    },
   
  },
};
</script>
