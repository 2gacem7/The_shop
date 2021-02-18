<template>
  <div class="q-pa-md row items-start justify-center q-gutter-md">
   <q-card class="my-card bg-secondary text-white col-md-4 col-xs-12">
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
            v-if="!user.username && submitted"
            class="alert alert-danger"
            role="alert"
              >Username is required!</div>   
          </q-card-section>
          <q-card-section>
            <h4 class="text-h6 text-center">Email</h4>
            <q-input 
              v-model="user.email"
              type="text"
              name="email"
              class="form-control"
            />
            <div
            v-if="!user.email && submitted"
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
            v-if="!user.password && submitted"
            class="alert alert-danger"
            role="alert"
              >Password is required!</div>
          </q-card-section>
          <q-card-actions class="justify-center">
            <q-btn  @click="handleRegister">
              <span class="spinner-border spinner-border-sm"></span>
              <span>Login</span>
            </q-btn>
          </q-card-actions>
        </div>
    </q-card>
  </div>
</template>


<script>
import User from '../models/user';

export default {
  name: 'Register',
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/login');
    }
  },
  methods: {
    handleRegister() {
        console.log("enregistrement")
      this.message = '';
      this.submitted = true;
        if (this.user.username && this.user.email && this.user.password) {
          this.$store.dispatch('auth/register', this.user).then(
            this.$router.push('/login'),
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
    }
  }
};
</script>

<style scoped>

</style>