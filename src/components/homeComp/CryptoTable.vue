<template>
    <section class="d-flex align-items-center bg-de">
        <div class="container">
            <!-- <form class="example" action="action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form> -->
            <div class="card-body table-responsive p-3 bg-grey-wolve" style="margin-top: 20px;">
                <table class="table table-hover text-nowrap table-dark bg-de table-bordered" style="color: white; text-align:center; vertical-align: middle">
                    <thead class="home-table-header" style="height: 1vh;">                  
                        <tr style="height: 1vh; font-size: 17px; color: gold;">
                            <th class="bg-de" style="width: 10px;">#</th>
                            <th class="bg-de">Coin</th>
                            <th class="bg-de">Price</th>
                            <th class="bg-de">Direct Vol</th>
                            <th class="bg-de">Total Vol</th>
                            <th class="bg-de">Median</th>
                            <th class="bg-de">Market Cap</th>
                            <th class="bg-de">Last 7 Days</th>
                            <th class="bg-de">24h</th>
                            <!-- <th style="width: 40px">Label</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <CoinList v-for="(item, index) in listCoin" :key="index" :item="item" :no="index" />
                    </tbody>
                </table>
            </div>
            <div class="d-flex justify-content-center align-items-center mt-4">
                <router-link to="/cryptolist" class="btn btn-show btn-sm">Show more</router-link>
            </div>
        </div>
    </section>
</template>

<script>
import CoinList from './modules/CoinList.vue'
import { D_COIN_LIST } from '../../store/utils/defaultData'

export default {
    name: "CryptoTable",
    components: {
        CoinList
    },
    data() {
        return {
            listCoin: []
        }
    },
    created() {
        this.listCoin = D_COIN_LIST
    },
}
</script>

<style>
.home-table-header {
    background: #222831 !important;
}
.table-list-coin {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.table-list-first {
    width: 25%;
}
.table-list-second {
    flex: 1;
    text-align: left !important;
    font-size: 18px !important;
    /* background: red; */
}

.btn-show {
    border: 1px solid gray;
    width: 10%;
    background: rgb(51, 50, 48);
    color: white;
    font-weight: 500;
}

.btn-show:hover {
    transform: scale(0.96);
    color: white;
}

.has-search .form-control {
    padding-left: 2.375rem;
}

.search-form {
    width: 50%;
    margin: 50px auto;
}



/* Style the search field */
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}

</style>
                            
                            