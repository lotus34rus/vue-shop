<template>
  <nav class="teal">
    <div class="nav-wrapper container">
      <!-- <router-link to="/" class="brand-logo">Logo</router-link> -->
      <span 
        v-if='user'
      >Привет: {{user.username}}</span>
      <span v-else>Вы не авторизированны</span>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/shop">Shop</router-link>
        </li>

        <li>
          <router-link to="/registration">Зарегестрироваться</router-link>
        </li>
        <li>
          <a @click="logout">Выйти</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ['user'],
  methods: {
    logout() {
      this.$store.dispatch("AUTH_LOGOUT").then(() => {
        this.$emit('userLogout')
        this.$router.push("/registration")
      });
    }
  }
};
</script>