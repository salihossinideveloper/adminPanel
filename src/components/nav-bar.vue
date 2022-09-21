<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm ">
            </span>
          </router-link>

          <router-link v-if="isFireToggleMenu" to="/" class="logo logo-light">
            <span class="logo-sm">
              <!--              <img src="@/assets/images/logo-light.svg" alt height="22" />-->
              <span class="company-name font-size-24 text-white"> راهبر</span>
            </span>
            <span class="logo-lg">
              <!--              <img src="@/assets/images/logo-light.png" alt height="19" />-->
              <span class="company-name font-size-24 text-white"> راهبر </span>
            </span>
          </router-link>
        </div>
        <button id="vertical-menu-btn" type="button" class="btn btn-sm px-3 font-size-16 header-item"
          @click="toggleMenu">
          <i class="fa fa-fw fa-bars"></i>
        </button>
        <!-- App Search-->
        <form v-if="showUserInfo" class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" :placeholder="$t('navbar.search.text')" />
            <span class="bx bx-search-alt"></span>
          </div>
        </form>
      </div>
      <div class="d-flex">
        <b-dropdown right variant="black" toggle-class="header-item" menu-class="dropdown-menu-end">
          <template v-slot:button-content>
            <img class="rounded-circle header-profile-user" src="@/assets/images/users/user-not-fount.jpeg"
              alt="Header Avatar" />
            <span class="d-none d-xl-inline-block ms-1">
              <div>
                {{ currentUserName }}
              </div>
            </span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <!-- item-->
          <b-dropdown-item>
            <router-link to="/userprofile/EditProfile" v-slot="{ navigate }" custom>
              <span @click="navigate" @keypress.enter="navigate">
                <i class="bx bx-user font-size-16 align-middle me-1"></i>
                {{ $t("navbar.dropdown.henry.list.profile") }}
              </span>
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item v-if="showUserInfo" href="javascript: void(0);">
            <i class="bx bx-wallet font-size-16 align-middle me-1"></i>
            {{ $t("navbar.dropdown.henry.list.mywallet") }}
          </b-dropdown-item>
          <b-dropdown-divider v-if="showUserInfo"></b-dropdown-divider>
          <b-dropdown-item class="d-block" @click="logoutUser">
            <span>
              <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
              {{ $t("navbar.dropdown.henry.list.logout") }}
            </span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </header>
</template>
<script>
import { Logout } from "@/Service/Actions/User";
import modules from "@/modules";
import i18n from "../i18n";

export default {
  data() {
    return {
      lan: i18n.locale,
      text: null,
      flag: null,
      value: null,
      myVar: 1,
      showUserInfo: false,
      isFireToggleMenu: true,
    };
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
      this.isFireToggleMenu = !this.isFireToggleMenu;
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    logoutUser() {
      Logout().then((response) => {
        //eslint-disable-line
        modules.actions.clearTokenAndUserInformation();
        modules.actions.redirectTo("/login");
      });
    },
  },
  computed: {
    //current user name
    currentUserName() {
      return modules.actions.getUser().name;
    },
  },
};
</script>
