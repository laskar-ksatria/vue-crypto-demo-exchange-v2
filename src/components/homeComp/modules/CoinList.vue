<template>
    <tr style="font-size: 17px; align-items: center; cursor: pointer;">
        <td class="bg-de text-vertical">{{ no + 1 }}</td>
        <td class="bg-de text-vertical">
            <router-link to="/trade" class="table-list-coin text-light">
                <div class="table-list-first">
                    <img :src="'https://www.cryptocompare.com' + getData.IMAGEURL" width="35" />
                    <!-- <img src="assets/img/crypto/bitcoin4.png" width="27" /> -->
                </div>
                <div class="table-list-second">
                    {{ item.title }}
                </div>
            </router-link>
        </td>
        <td class="bg-de text-vertical" :style="{fontWeight: priceFontWeight}">
            <!-- <div style="background: rgb(42, 37, 37); border-radius:5px; font-size: 18px; border: 1px gray solid; padding: 3px; box-sizing: border-box;"> -->
            <div :class="[activeColor]">
                $ {{ displayPrice }}
            </div>
        </td>
        <td class="bg-de text-vertical">$ {{ directVol }} M</td>
        <td class="bg-de text-vertical">$ {{ totalVol }} B</td>
        <td class="bg-de text-vertical" :style="{color: medianColor}">$ {{ displayMedian }}</td>
        <td class="bg-de text-vertical" :style="{color: textColor}">$ {{ marketCap }} B</td>
        <td class="bg-de text-vertical">
            <!-- <img src="https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png" width="150" height="30" /> -->
            <img :src="'https://images.cryptocompare.com/sparkchart/' + item.name + '/USD/latest.png'"  width="150" height="30" alt="chart-list" />
            <!-- <img :src="'https://images.cryptocompare.com/sparkchart/' + item.name + '/USD/latest.png?ts=' + getData.LASTUPDATE"  width="150" height="30" alt="chart-list" /> -->
        </td>
        <td class="bg-de text-vertical" :style="{color: change24hColor, fontWeight: 600}">{{ change24h }}%</td>
    </tr>
</template>

<script>
import formatCurrency from 'format-currency'

export default {
    name: 'CoinList',
    props: ["item", "no"],
    data() {
        return {
            price: null,
            directVol: null,
            displayPrice: null,
            priceFontWeight: "300",
            last24: null,
            activeColor: "price-list",
            textColor: "white",
            totalVol: null,
            marketCap: null,
            median: null,
            displayMedian: null,
            medianColor: 'white',
            change24h: null,
            change24hColor: 'white'
        }
    },
    computed: {
        getData() {
            let coin = this.$store.state.coins[this.item.name].USD;
            let newPrice = (coin.PRICE).toFixed(2)
            let lastPrice = this.price;
            if (lastPrice) {
                if (newPrice > lastPrice) {
                    this.activeColor = "price-list-green"
                    this.priceFontWeight = '500'
                }else if (newPrice < lastPrice) {
                    this.activeColor = "price-list-red"
                    this.priceFontWeight = '500'
                }else {
                    this.activeColor = "price-list"
                    this.priceFontWeight = '300'
                }
            }
            this.directVol = formatCurrency((coin.TOPTIERVOLUME24HOURTO / 1000000).toFixed(2))
            this.price = coin.PRICE;
            this.displayPrice = formatCurrency(coin.PRICE)
            this.totalVol = formatCurrency((coin.TOTALVOLUME24HTO / 1000000000).toFixed(2))
            this.marketCap = formatCurrency((coin.MKTCAP / 1000000000).toFixed(2))
            if (this.median) {
                let newMedian = coin.MEDIAN
                if (newMedian) {
                    if (newMedian > this.median) {
                        this.medianColor = 'rgb(37, 248, 9)'
                    }else if (newMedian < this.median) {
                        this.medianColor = 'red'
                    }else {
                        this.medianColor = "white"
                    }
                    this.median = coin.MEDIAN
                    this.displayMedian = formatCurrency(coin.MEDIAN)
                }
            }else {
                if (coin.MEDIAN) {
                    this.displayMedian = formatCurrency(coin.MEDIAN)
                    this.median = coin.MEDIAN
                }else {
                    this.displayMedian = formatCurrency(0.00)
                }
            }
            let percentage = (coin.PRICE - coin.OPEN24HOUR)
            if (percentage < 0) {
                this.change24hColor = "red"
            }else if (percentage > 0) {
                this.change24hColor = "rgb(37, 248, 9)"
            }else {
                this.change24hColor = 'white'
            }
            let newPercentage = (percentage / coin.OPEN24HOUR) * 100
            this.change24h = formatCurrency(newPercentage.toFixed(2))
            return coin
        }
    }
}
</script>

<style scoped>
.text-color {
    color: rgb(37, 248, 9);
}
.text-vertical {
    vertical-align: middle;
}
.price-list {
    background: #242629;
    border-radius: 5px;
    font-size: 18px;
    border: 1px gray solid;
    padding: 3px;
    box-sizing: border-box;
}

.price-list-green {
    /* background: rgb(29, 168, 10); */
    background: #3d9400;
    border-radius: 5px;
    font-size: 18px;
    border: 1px gray solid;
    padding: 3px;
    box-sizing: border-box;
}

.price-list-red {
    background: red;
    /* background: rgb(255, 13, 13); */
    border-radius: 5px;
    font-size: 18px;
    border: 1px gray solid;
    padding: 3px;
    box-sizing: border-box;
}


</style><!-- <div style="background: rgb(42, 37, 37); border-radius:5px; font-size: 18px; border: 1px gray solid; padding: 3px; box-sizing: border-box;"> -->
