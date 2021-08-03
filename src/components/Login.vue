<template>
  <div
    
  >
      <div class="login-box" style="margin-top: 2rem;margin-bottom: 2rem">
        <h1 class="is-size-3" style="margin-top: 3rem;margin-bottom: 2rem;">
          LOG IN
          <span style="font-weight: bold; color: #007065;"></span>
        </h1>
        <div
            class="column"
            style="max-width: 100%; min-width: 100%; padding: 2% 5% 2% 5%"
          >
          <p
              :class="{
                'font-p': !errors.has('username'),
                'is-size-6': true,
                'has-text-danger': errors.has('username'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              Username
            </p>
            <b-field
              :type="{
                'is-primary': !errors.has('username'),
                'is-danger': errors.has('username'),
              }"
              
              :placeholder="'Username'"
              label-position="on-border"
              expanded
            >
              <b-input
                autocomplete="off"
                style="max-width: 100%; min-width: 100%"
                name="username"
                v-validate="'required'"
                v-model="username"
                :placeholder="'Username'"
                expanded
              ></b-input>
            </b-field>
          </div>

          <div
            class="column"
            style="max-width: 100%; min-width: 100%; padding: 2% 5% 2% 5%"
          >
          <p
              :class="{
                'font-p': !errors.has('password'),
                'is-size-6': true,
                'has-text-danger': errors.has('password'),
              }"
              style="text-align: left; margin-bottom: 0.75rem"
            >
              Password
            </p>
            <b-field
              :type="{
                'is-primary': !errors.has('password'),
                'is-danger': errors.has('password'),
              }"
              
              :placeholder="'Password'"
              label-position="on-border"
              expanded
            >
              <b-input
                autocomplete="off"
                style="max-width: 100%; min-width: 100%"
                name="password"
                v-validate="'required'"
                v-model="password"
                :placeholder="'password'"
                type="password"
                password-reveal
              ></b-input>
            </b-field>
          </div>
        
        <!-- <b-field label="Username" label-position="on-border">
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
        </b-field> -->
        <div style="margin-top: 1.5rem;margin-bottom: 3rem;" class="buttons">
          <b-button @click="handleLogin()" type="is-primary" expanded
            >Login</b-button
          >
        </div>
      </div>
  
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
        if(this.username != 'vaccine-svnh' || this.password != '13Fed5vs41')
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
.login-box {
  background-color: #bfa984;
  min-width: 80%;
  max-width: 80%;
  align-self: center;
  align-content: center;
  align-items: center;
  padding: 1rem 1rem 1.5rem 1rem;
  margin: 0% auto;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #007065;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
</style>
