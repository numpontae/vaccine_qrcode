<template>
  <div
    id="login"
    class="has-text-centered has-text-justified"
    style="padding: 12rem;"
  >
    <section>
      <div class="box" style="margin: auto; width: 100%; max-width: 482px;">
        <h1 class="is-size-3" style="margin-bottom: 1rem;">
          LOG IN
          <span style="font-weight: bold; color: #007065;"></span>
        </h1>

        <b-field label="Username" label-position="on-border">
          <b-input
            placeholder="Username Input"
            size="is-medium"
            v-model="username"
            maxlength="30"
          ></b-input>
        </b-field>
        <b-field label-position="on-border" label="Password">
          <b-input
            placeholder="Password Input"
            size="is-medium"
            type="password"
            v-model="password"
            password-reveal
          >
          </b-input>
        </b-field>
        <div style="margin-top: 1.5rem;" class="buttons">
          <b-button @click="handleLogin()" type="is-primary" expanded
            >Login</b-button
          >
        </div>
      </div>
    </section>
    <b-loading
      :is-full-page="isFullPage"
      :active.sync="isLoading"
      :can-cancel="false"
    >
    </b-loading>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
      isLoading: false,
      isFullPage: true,
    }
  },
  methods: {
    async handleLogin() {
      try {
        this.isLoading = true
        if(this.username != '1sH5Or24Hb' && this.password != '13Fed5vs41')
        {
          this.isLoading = false
          this.$buefy.snackbar.open({
          duration: 3000,
          message:
            'User and Password Invalid',
            type: 'is-danger',
            position: 'is-top',
        })
        }else {
          this.isLoading = true
          localStorage.setItem("logintoken",'login');
          localStorage.setItem("token",'login');
          this.$router.push({ name: 'Home' })
          location.reload();
        }
        
      
        //this.$router.push({ name: 'Home' })
      } catch (error) {
        
        this.isLoading = false
        this.$buefy.snackbar.open({
          duration: 3000,
          message:
            'Username or Password invalid',
            type: 'is-danger',
            position: 'is-top',
        })
      }
    },
  },
}
</script>
<style scoped lang="scss">
#login {
  background-color: #bfa984;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
