<template>
  <div class="hold-transition login-page bg-de home-login">
      <div class="login-box">
  <div class="login-logo">
    <router-link to="/" class="text-gold"><b class="text-gold">Trap</b>eli</router-link>
    <!-- <a href="../../index2.html">Trapeli</a> -->
  </div>
  <!-- /.login-logo -->
  <div class="card bordered-class">
    <div class="card-body login-card-body bg-de">
      <p class="login-box-msg text-light" style="font-size: 22px;">
          <b>Sign in to start</b>
      </p>

      <form>
        <div class="input-group mb-3">
          <input type="email" class="form-control input-signin" placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text text-light">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control input-signin" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text text-light">
              <span class="fas fa-key"></span>
            </div>
          </div>
        </div>
      </form>

      <div class="social-auth-links text-center mb-3">
        <p class="text-gold">-  -</p>
        <button type="submit" class="btn btn-light btn-block btn-custom">Sign In</button>
        <!-- <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a> -->
      </div>
      <!-- /.social-auth-links -->

      <p class="mb-1">
        <router-link to="/forgot-password" class="text-info">I forgot my password</router-link>
      </p>
      <p class="mb-0">
        <router-link to="/signup" class="text-center text-info">Register a new membership</router-link>
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
  </div>
</template>

<script>
export default {
    name: "SignIn"
}
</script>

<style>
.home-login {
    background-image: url('https://bcn-a.akamaihd.net/img/blogs/blog-22.01.2018-fever-1.jpg');
    /* background-image: url('https://blog.equinix.com/wp-content/uploads/2017/10/blockchain.jpg'); */
    /* background-image: url('../assets/img/code.jpg'); */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.input-signin {
  background-color: #1b1b1b !important;
  color: gold;
}

input {
  color: gold !important;
}
</style>