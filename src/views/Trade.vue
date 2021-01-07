<template>
  <div class="nw-trade bg-de">
      <Loading v-if="isLoading" />
      <Header v-if="!isLoading" />
      <div class="bg-de p-2 container" v-if="!isLoading">
        <div class="row m-1">
          <div class="col-sm-8 p-0">
            <Chart />
          </div>

          <div class="col-sm-6">
            <div class="row">
                <div class="col-6 pr-1" style="height: 50vh;">
                    <div class="card text-light bg-de bordered-class" style="border-radius: 0;">
                      <div class="card-body p-0">
                          <div class="col-6 p-2">
                              <h5 class="font-weight-bold">Limit Orders</h5>
                          </div>

                          <div class="row m-0">
                              <div class="col-12 p-0">
                                  <LimitTable />
                              </div>
                          </div>
                      </div>
                  </div>
                </div>

                <!-- <div class="col-6 pl-1 pr-0">
                  <div class="card text-light bg-de bordered-class" style="border-radius: 0;">
                      <div class="card-body p-0">
                          <div class="col-6 p-2">
                              <h5 class="font-weight-bold">History Orders</h5>
                          </div>
                          <div class="row m-0">
                              <div class="col-12 p-0">
                                  <LimitTable />
                              </div>
                          </div>
                      </div>
                  </div>
                </div> -->
            </div>
          </div>
        </div>
          <BottomContent />
      </div>
  </div>
</template>

<script>
import Header from "../components/tradeComp/Header.vue"
import Chart from '../components/tradeComp/Chart.vue'
import LimitTable from '../components/tradeComp/LimitTable.vue'
import Loading from "./Loading.vue"
import BottomContent from '../components/tradeComp/BottomContent.vue'

export default {
  name: "Trade",
  data() {
    return {
      isLoading: true
    }
  },
  components: {
    Header, Chart,
    LimitTable,
    Loading, BottomContent
  },
  created() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  }
}
</script>

<style lang="scss">
  @import "../styles/trade.scss";
</style>