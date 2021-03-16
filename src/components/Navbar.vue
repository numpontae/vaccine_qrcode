<template>
<div>
    <b-navbar class="nav-t">
        <template slot="start">
              
          </template>
        

        <template slot="end" v-if="IsLogIn != true">
            <b-navbar-dropdown :label="currentMenu.text" class="has-text-left" v-model="locale"> 
                <b-navbar-item v-for="(menu, index) in menus"
                  :key="index"
                  :value="menu" @click="setLocale(menu.value)" class="has-text-left">
                    {{ menu.text }}
                </b-navbar-item>
            </b-navbar-dropdown>
            <!-- <b-navbar-item tag="router-link" :to="{ name: 'Login' }">
                <div class="buttons">
                    <a class="button ">
                        <strong>Log in</strong>
                    </a>
                </div>
            </b-navbar-item> -->
        </template>
        <template slot="end" v-else>
            <b-navbar-dropdown :label="currentMenu.text" class="has-text-left" v-model="locale"> 
                <b-navbar-item v-for="(menu, index) in menus"
                  :key="index"
                  :value="menu" @click="setLocale(menu.value)" class="has-text-left">
                    {{ menu.text }}
                </b-navbar-item>
            </b-navbar-dropdown>
            <!-- <b-navbar-item @click="LogOut()">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Log Out</strong>
                    </a>
                </div>
            </b-navbar-item> -->
        </template>
    </b-navbar>
    <!-- <b-modal 
          :active.sync="isComponentModalLoginActive"
          has-modal-card
          trap-focus
          :destroy-on-hide="true"
          aria-role="dialog"
          aria-modal>
        <template>
            <modalLogin @close="isComponentModalLoginActive = false"></modalLogin>
        </template>
      </b-modal> -->
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
  position: absolute;
}
</style>
