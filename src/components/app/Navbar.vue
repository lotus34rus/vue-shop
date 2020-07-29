<template>
  <nav class="teal">
    <div class="nav-wrapper container">
      <router-link to="/" class="brand-logo">Logo</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/shop">Shop</router-link>
        </li>

        <li>
          <router-link to="/login">Войти</router-link>
          <a @click="logout">Выйти</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    logout() {
      this.$store.dispatch("AUTH_LOGOUT").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>