<template>
<div class="head-box" style="text-align:left">
            <img src="@/assets/logo.png" alt="Samitivej" style="height: 80px" />
</div>
</template>
<script>
import * as _ from "lodash";
export default {
  name: "Navbar",
  data() {
    return {
      isFullPage: true,
      isLoading: false,
      IsLogIn: false,
      locale: localStorage.getItem("locale") == "th" ? "TH" : "EN",
      currentMenu: {
        text: `${localStorage.getItem("locale") == "th" ? "TH" : "EN"}`
      },
      menus: [
        { text: "EN", value: "en" },
        { text: "TH", value: "th" }
      ],
    };
  },
  mounted() {
    this.GetLogIn()

  },
  methods: {
    setLocale(locale) {
      localStorage.setItem("locale", locale);
      location.reload();
    },
    GetLogIn() {
      if (!_.isEmpty(localStorage.getItem("User-LogIn"))) {
        this.IsLogIn = true;
        
      }
    },
    LogOut() {
      localStorage.setItem("User-LogIn","");
      localStorage.setItem("token","");
      this.IsLogIn = false;
      this.$router.push({ name: 'Home' });
    },
  }
};
</script>
<style lang="scss" scoped>
.nav-t {
  background: transparent;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  position: a
  bsolute;
}
.head-box {
  min-width: 80%;
  max-width: 80%;
  min-height: 5%;
  max-height: 5%;
  margin: 0 auto;
  flex-direction: column;
  border: none;
  box-shadow: none;
}
</style>
