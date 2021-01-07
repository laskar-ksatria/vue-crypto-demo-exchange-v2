<template>
  <div id="app">
      <Loading v-if="isLoading" />
      <router-view v-if="!isLoading" />
  </div>
</template>

<script>
import { D_COIN_LIST } from './store/utils/defaultData'
import { priceFull } from 'cryptocompare'
import Loading from './views/Loading.vue'
import { baseURL } from './store/utils'
import Socket from 'socket.io-client'
import Header from './components/homeComp/Header.vue'
let Io;

  export default {
    name: "App",
    data() {
      return {
        isLoading: true
      }
    },
    components: {
      Loading,
      Header
    },
    created() {
      let coins = [];
      let isSocket = false;
      D_COIN_LIST.forEach(item => coins.push(item.name))
      setTimeout(() => {
        priceFull(coins, ["USD"])
        .then(prices => {
          this.$store.dispatch("coinsSet", prices)
          this.isLoading = false
          isSocket = true;
          if (isSocket) {
            Io = Socket(baseURL)
            Io.on('realtime-price', data => {
              let { LASTUPDATE, MEDIAN, TOPTIERVOLUME24HOURTO, VOLUME24HOURTO, PRICE, FROMSYMBOL} = data;
              let oldData = this.$store.state.coins
              if (oldData) {
                if (oldData[FROMSYMBOL]) {
                  oldData[FROMSYMBOL].USD.LASTUPDATE = LASTUPDATE;
                  oldData[FROMSYMBOL].USD.MEDIAN = MEDIAN;
                  oldData[FROMSYMBOL].USD.TOPTIERVOLUME24HOURTO = TOPTIERVOLUME24HOURTO;
                  oldData[FROMSYMBOL].USD.PRICE = PRICE;
                  oldData[FROMSYMBOL].USD.VOLUME24HOURTO = VOLUME24HOURTO;
                  this.$store.dispatch('coinsSet', oldData);
                }
              }
            })
          }

        })
        .catch(err => {
          this.isLoading = false
        })
      }, 3000)
    },
  }
</script>

