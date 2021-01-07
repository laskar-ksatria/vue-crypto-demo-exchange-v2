<template>
   <section id="hero" class="d-flex align-items-center bg-de">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <!-- <h1 class="text-light">Creating websites that make you stop & stare</h1> -->
                    <h1 style="font-size: 25px;" class="text-light">See while others can't see</h1>
                    <h2 class="text-light mt-3">
                        Trapeli is a platform that provides services for trading cryptocurrencies such as bitcoin, ethereum, litecoin made by Trapeli Corporation.
                    </h2>
                    <h2 class="text-gold mt-4">
                        Soon, we will be deploying our cryptocurrency and smart contracts.
                    </h2>
                    <div><a href="" class="btn-get-started bg-primary btn-hover" style="margin-top: 50px;">Get Started</a></div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 hero-img">
                    <img src="assets/img/wallet.png" class="img-fluid mt-5" alt="crypto">
                </div>
            </div>
        </div>
  </section><!-- End Hero -->
</template>

<script>
export default {
    name: "SectionHero",
}
</script>

<style>
.btn-hover:hover {
    transform: scale(0.80) !important;
}
</style>
