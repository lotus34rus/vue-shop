<template>
  <div class="container">
    <form class="login" @submit.prevent="login">
      <h1>Sign In</h1>
      <div class="input-field col s6">
        <input
          required
          v-model="username"
          id="username"
          type="text"
          class="validate"
        />
        <label for="username">User name</label>
      </div>

      <div class="input-field col s6">
        <input
          required
          v-model="password"
          type="password"
          id="password"
          class="validate"
        />
        <label for="password">Password</label>
      </div>

      <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>


<script>

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      const { username, password } = this;
      this.$store.dispatch("AUTH_REQUEST", { username, password }).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>