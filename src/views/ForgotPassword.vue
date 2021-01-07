<template>
  <div class="hold-transition login-page bg-de home-forgot">
          
    <div class="login-box">
      <div class="login-logo">
        <a href="# disable" class="text-light">Enter your email</a>
      </div>
      <!-- /.login-logo -->
      <div class="card bordered-class">
        <div class="card-body login-card-body bg-dark-gray">
          <p class="login-box-msg text-gold">You forgot your password? Here you can easily retrieve a new password.</p>
          <form action="recover-password.html" method="post">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button type="submit" class="btn btn-primary btn-block">Request new password</button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <p class="mt-3 mb-1">
            <router-link to="/signin">Login</router-link>
          </p>
          <p class="mb-0">
            <router-link to="/signup" class="text-center">Register a new membership</router-link>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ForgotPassword"
}
</script>

<style>
.home-forgot {
    /* background-image: url('https://medici-prod.s3-us-west-2.amazonaws.com/uploads/nonfinanceblockchain.jpg'); */
    background-image: url('https://bcn-a.akamaihd.net/img/blogs/blog-22.01.2018-fever-1.jpg');
    /* background-image: url('../assets/img/code.jpg'); */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>