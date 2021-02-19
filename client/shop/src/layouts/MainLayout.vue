<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark">
      <q-toolbar>
        <q-toolbar-title>
          The shop
        </q-toolbar-title>
        
        <q-btn icon="home" to="/"> HOME </q-btn>
        <q-btn v-if="!currentUser" flat round dense  to="/register"> Signup </q-btn>
        <q-btn v-if="!currentUser" flat round dense icon="login" to="/login" />
        <q-btn flat v-if ="currentUser" round dense @click.prevent="logOut" icon="logout" to="/login" />
        <q-btn v-if="showAdminBoard" class="nav-item" to="/admin" >
          Admin Board
        </q-btn>
        <q-btn v-if="currentUser" icon="account_circle" class="nav-item" to="/profile" >
          {{currentUser.username}}
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {  },
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>
