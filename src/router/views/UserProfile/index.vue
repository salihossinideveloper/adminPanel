<template>
  <main-layout>
    <section class="profile">
      <!--sidebar-->
      <sidebar/>
      <!--content-->
      <section class="main bgc-gray-1 border-radius-12 overflow-auto">
        <router-view :is="manageCurrentRoute()"></router-view>
      </section>
    </section>
  </main-layout>
</template>

<script>
import Sidebar from './components/sidebar'
import UserWallet from "./components/UserWallet";
import ChangePassword from "./components/ChangePassword";
import EditProfile from './components/EditProfile'
import Purchase from './components/Purchase'

export default {
  name: "index",
  components: {
    Sidebar,
    UserWallet,
    ChangePassword,
    EditProfile,
    Purchase
  },
  data() {
    return {
      currentView: 'UserWallet'
    }
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler(val) {
        if (val) {
          this.manageCurrentRoute(val);
        }
      },
    },
  },
  methods: {
    manageCurrentRoute() {
      switch (this.$route.params.id) {
        case "UserWallet":
          return "UserWallet";
        case "ChangePassword":
          return "ChangePassword"
        case "EditProfile":
          return "EditProfile"
        case "Purchase":
          return "Purchase"
      }
    },
    // change route action
    changeRoute(route) {
      this.currentView = route;
    },
  }
}
</script>

<style scoped>

</style>