// import pairs from "./pairs";
var rp = require("request-promise").defaults({ json: true });
// const api_root = "https://min-api.cryptocompare.com";
const history = {};

export default {
  history: history,

  getBars: function (symbolInfo, resolution, from, to, first, limit) {
    var split_symbol = symbolInfo.name.split(/[:/]/);
    // const url =
    //   resolution === "D"
    //     ? "/data/histoday"
    //     : resolution >= 60
    //     ? "/data/histohour"
    //     : "/data/histominute";
    const qs = {
      // e: pairs["CCCAGG" + "/" + split_symbol[1]],
      fsym: split_symbol[0],
      tsym: split_symbol[1],
      toTs: to ? to : "",
      limit: limit ? limit : 2000,
      // aggregate: 1//resolution
    };
    // `${api_root}${url}`,
    // console.log({qs})
    return rp({
      url: `https://api.coingecko.com/api/v3/coins/codeo-token/market_chart?vs_currency=${qs.tsym}&days=max`,
      // qs,
    }).then((data) => {

      // if (data.Response && data.Response === "Error") {
      //   console.log("CryptoCompare API error:", data.Message);
      //   return [];
      // }
      // if (data.length) {
      let harga = data.prices;
      // let nilai = [];
      for (let i = 0; i < data.total_volumes.length; i++) {
        harga[i].push(data.total_volumes[i][1]);
      }

      // let nilai = [];
      // for (let i = 0; i < data.prices.length; i++) {
      //   nilai = nilai.push(data.prices[i][1]);
      // }

      // console.log(nilai);
      // let Max = Math.max(...nilai);
      // let Min = Math.min(...nilai);

      // console.log(Max);
      // console.log(Min);

      // console.log(harga);

      var bars = harga.map((el) => {
        return {
          time: el[0], //TradingView requires bar time in ms
          low: el[1],
          high: el[1],
          open: el[1],
          close: el[1],
          volume: el[2] / 1000000,
        };
      });
      // console.log(bars);
      return bars;
      // } else {
      //   return [];
      // }
    });
  },
};
