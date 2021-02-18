<template>
  <div class="q-pa-md row items-start justify-center q-gutter-md">
   <q-card class="my-card bg-secondary text-white col-md-4 col-xs-12">
      <q-form @submit.prevent="handleLogin">
        <div class="form-group">
          
          <q-card-section>
            <h4 class="text-h6 text-center">Username</h4>
  
            <q-input 
              v-model="user.username"
              type="text"
              name="username"
              class="form-control"
            />
            <div
            v-if="!user.username"
            class="alert alert-danger"
            role="alert"
              >Username is required!</div>
            
          </q-card-section>

          <q-card-section>
            <h4 class="text-h6 text-center">Password</h4>

            <q-input 
              v-model="user.password"
              type="password"
              name="password"
              class="form-control"
            />
            <div
            v-if="!user.password"
            class="alert alert-danger"
            role="alert"
              >Password is required!</div>
          </q-card-section>

          <q-card-actions class="justify-center">
            <q-btn :disabled="loading" @click="handleLogin">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Login</span>
            </q-btn>
          </q-card-actions>
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import User from '../models/user';

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    handleLogin() {
      console.log("connexion")
      this.loading = true;

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
        );
      }
    }
    }
  };
</script>

<style scoped>

</style>