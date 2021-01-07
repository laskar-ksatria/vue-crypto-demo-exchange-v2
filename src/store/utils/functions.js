import { priceFull } from 'cryptocompare'


export const F_GET_DATA = () => {
    return new Promise((res, rej) => {
        priceFull(["BTC", "ETH", ], ["USD"])
            .then(prices => {
                alert("Suksuss")
                console.log(prices)
            })
            
    })
}
