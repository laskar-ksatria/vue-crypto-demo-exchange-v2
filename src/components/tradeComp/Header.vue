<template>
    <div class="container-fluid pb-1 pt-2 pl-5 pr-5 bg-de text-light" style="height: 10vh;">
    <!-- <div class="container-fluid pb-1 pt-2 pl-5 pr-5 bg-de text-light" style="border-bottom: 2.5px rgb(39, 39, 39) solid; height: 10vh;"> -->
        
         <div class="d-flex align-items-center justify-content-between">
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
        
        <!-- <div class="row">
            <div class="col-5">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-6">
                        <p align="center" class="mb-0">
                            Harga Terakhir
                        </p>
                        <p align="center" class="mb-0 text-success font-weight-bold">
                            Rp. 134,445,321
                        </p>
                        <p align="center" class="mb-0 font-weight-bold">
                            Rp. 134,445,321
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-7 d-flex justify-content-center align-items-center">
                <div class="row d-flex justify-content-center align-items-center col-12 p-0">
                    <div class="col-3">
                        <p align="center" class="mb-0">
                            Perubahan
                        </p>
                        <p align="center" class="mb-0 text-success font-weight-bold">
                            1.273%
                        </p>
                    </div>
                    <div class="col-3">
                        <p align="center" class="mb-0">
                            Tertinggi
                        </p>
                        <p align="center" class="mb-0 text-success font-weight-bold">
                            134,445,321
                        </p>
                    </div>
                    <div class="col-3">
                        <p align="center" class="mb-0">
                            Terendah
                        </p>
                        <p align="center" class="mb-0 text-success font-weight-bold">
                            130,445,321
                        </p>
                    </div>
                    <div class="col-3">
                        <p align="center" class="mb-0">
                            Volume 24 Jam
                        </p>
                        <p align="center" class="mb-0 text-success font-weight-bold">
                            200,445,321
                        </p>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "TradeHeader"
}
</script>

<style>

</style>