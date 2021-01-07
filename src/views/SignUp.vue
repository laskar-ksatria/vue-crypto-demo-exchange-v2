<template>
  <div class="hold-transition register-page bg-de home-signup">
      <div class="login-box">
  <div class="login-logo">
    <router-link to="/" class="text-gold"><b class="text-gold">Trap</b>eli</router-link>
    <!-- <a href="../../index2.html">Trapeli</a> -->
  </div>
  <!-- /.login-logo -->
  <div class="card bordered-class register-box-width">
    <div class="card-body login-card-body bg-de">
      <p class="login-box-msg text-light" style="font-size: 22px;">
          <b>Sign up for free</b>
      </p>
      <form>
        <div class="input-group mb-3">
            <input type="text" class="form-control input-register" placeholder="Full Name">
            <div class="input-group-append">
              <div class="input-group-text text-light">
                <span class="fas fa-user"></span>
              </div>
            </div>
        </div>
        <div class="input-group mb-3">
            <input type="email" class="form-control input-register" placeholder="Email">
            <div class="input-group-append">
              <div class="input-group-text text-light">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
        </div>
        <div class="input-group mb-3">
            <input type="password" class="form-control input-register" placeholder="Password">
            <div class="input-group-append">
              <div class="input-group-text text-light">
                <span class="fas fa-lock"></span>
              </div>
            </div>
        </div>
        <div class="input-group mb-3">
            <input type="password" class="form-control input-register" placeholder="Confirm Password">
            <div class="input-group-append">
              <div class="input-group-text text-light">
                <span class="fas fa-key"></span>
              </div>
            </div>
        </div>
          <div class="captcha-loader">
            <vue-recaptcha @verify="captchaVer" theme="dark" size="100" sitekey="6LfDQR8aAAAAAL9fERoLIbTuPoDv8-cMu8WDJaLP"></vue-recaptcha>
          </div>
        
      </form>

      <div class="social-auth-links text-center mb-3">
        <p class="text-gold">- - -</p>
        <button type="submit" class="btn btn-light btn-block btn-custom" style="font-weight: 500; color: black;">Sign Up</button>
        <!-- <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a> -->
      </div>

      <p class="mb-1">
      </p>
      <p class="mb-0">
        <router-link to="/signin" class="text-center text-info">Already have account ? Signin</router-link>
      </p>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
    name: "SignUp",
    components: {
      VueRecaptcha
    },
    methods: {
      captchaVer(token) {
        alert(token)
      }
    }
}
</script>

<style>
.home-signup {
    background-image: url('https://bcn-a.akamaihd.net/img/blogs/blog-22.01.2018-fever-1.jpg');
    /* background-image: url('https://medici-prod.s3-us-west-2.amazonaws.com/uploads/nonfinanceblockchain.jpg'); */
    /* background-image: url('https://blog.equinix.com/wp-content/uploads/2017/10/blockchain.jpg'); */
    /* background-image: url('../assets/img/code.jpg'); */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.input-register {
  background-color: #1b1b1b !important;
  color: gold;
}

.input-bordered {
  border: 1px solid red
}

::placeholder {
  color: white !important;
  opacity: 0.4;
}

input {
  color: gold !important;
}

.captcha-loader {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

</style>