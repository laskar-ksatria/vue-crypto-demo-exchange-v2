<template>
      <!-- ======= About Section ======= -->
    <section id="about" class="about bg-de">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-6 d-flex justify-content-center mt-5 video-box align-items-stretch">
            <!-- <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> -->
          </div>
          <div class="text-light col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3 class="text-light">Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

            <div class="icon-box text-light">
              <div class="icon section-pointer about-li"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title"><div class="text-light">Lorem Ipsum</div></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div class="icon-box text-light">
              <div class="icon section-pointer about-li"><i class="bx bx-gift"></i></div>
              <h4 class="title"><div class="text-light">Nemo Enim</div></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>

            <div class="icon-box section-pointer text-light">
              <div class="icon about-li"><i class="bx bx-atom"></i></div>
              <h4 class="title"><div class="text-light">Dine Pad</div></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

          </div>
        </div>

      </div>

    </section><!-- End About Section -->
</template>

<script>
export default {
    name: "SectionAbout"
}
</script>

<style>
.about .video-box {
  /* background: url("https://images.unsplash.com/photo-1579225663317-c0251b4369bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80") center center no-repeat; */
  background: url("https://images.unsplash.com/photo-1579226905180-636b76d96082?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60") center center no-repeat;
  background-size: cover;
  min-height: 500px;
}

.about-li {
  cursor: pointer;
}


</style>