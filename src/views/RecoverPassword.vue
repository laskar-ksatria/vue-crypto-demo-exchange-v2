<template>
  <div class="hold-transition login-page home-recover">
    <div class="login-box">
        <div class="login-logo">
            <router-link to="/" class="text-gold text-bordered"><b>Trap</b>eli</router-link>
        </div>

        <div class="card">
            <div class="card-body login-card-body bg-de bordered-class">
                <p class="login-box-msg text-light">You are only one step a way from your new password, recover your password now.</p>
                <form action="login.html" method="post">
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control input-recover" placeholder="Confirm Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-block">Change password</button>
                    </div>
                    <!-- /.col -->
                    </div>
                </form>

                <p class="mt-3 mb-1">
                    <router-link to="/signin" class="text-info">Login</router-link>
                </p>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "RecoverPassword"
}
</script>

<style>
.home-recover {
    /* background-image: url('https://medici-prod.s3-us-west-2.amazonaws.com/uploads/nonfinanceblockchain.jpg'); */
    /* background-image: url('https://bcn-a.akamaihd.net/img/blogs/blog-22.01.2018-fever-1.jpg'); */
    background-image: url('../assets/img/code.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

::placeholder {
    color: grey !important;
}

.input-recover {
  background-color: #1b1b1b !important;
  color: gold;
}

input {
  color: gold !important;
}
</style>