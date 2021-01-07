<template>
    <!-- ======= Header ======= -->
  <!-- <header id="header" class="fixed-top shadow-lg" style="background: #001c25;"> -->
  <header id="header" class="fixed-top shadow-lg bg-de" style="border-bottom: 2.5px rgb(39, 39, 39) solid">
    <div class="container d-flex align-items-center justify-content-between">
      <a href="# disable" class="logo">
        <h1 class="logo"><router-link to="/" class="text-light">Trapeli</router-link></h1>
          <!-- <img src="assets/img/logo.png" alt="" class="img-fluid"> -->
        </a>
      <!-- Uncomment below if you prefer to use text as a logo -->
      <nav class="nav-menu d-none d-lg-block">
        <ul class="text-light">
          <li class="active "><router-link to="/" class="text-light">Home</router-link></li>
          <li><router-link to="/signin" class="text-light">Sign in</router-link></li>
          <li><router-link to="/signup" class="text-light">Sign up</router-link></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header><!-- End Header -->
</template>

<script>
export default {
    name: "Header"
}
</script>
