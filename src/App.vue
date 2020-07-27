<template>
  <div id="app" >

    <nav class="teal">
      <div class="nav-wrapper container">
        <router-link to="/" class="brand-logo">Logo</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><router-link to="/">Home</router-link> </li>
              <li><router-link to="/shop">Shop</router-link></li> 
        </ul>
      </div>
    </nav>

    <router-view class="container" />
  </div>
</template>

<style>
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css'; 
</style>
