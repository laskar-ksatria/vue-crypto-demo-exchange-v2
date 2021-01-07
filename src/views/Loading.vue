<template>
  <div class="loading-page">
      <div>
          <hollow-dots-spinner
            :animation-duration="1000"
            :dot-size="15"
            :dots-num="3"
            color="#ff1d5e"
            />
          <!-- <SemipolarSpinner
                :animation-duration="1500"
                :size="80"
                color="gold"
            /> -->
            <div class="loading-text">
                <p>Please wait..</p>
                <!-- <h5>Please wait..</h5> -->
            </div>
      </div>
  </div>
</template>

<script>
// import { SemipolarSpinner  } from 'epic-spinners'
import { HollowDotsSpinner } from 'epic-spinners'

export default {
    name: "Loading",
    components: {
        HollowDotsSpinner
        // SemipolarSpinner
    },
}
</script>

<style>
.loading-page {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    /* background: rgb(22, 22, 22); */
    background: rgb(8, 8, 8);
}
.loading-text {
    color: white;
    margin-top: 20px;
    font-weight: 600;
}

.loading-text p {
    font-size: 18px;
}

.loading-text h5 {
    text-align: center;
}
</style>