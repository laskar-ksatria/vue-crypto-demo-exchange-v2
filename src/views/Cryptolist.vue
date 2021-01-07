<template>
    <div class="bg-de">
        <Header />
        <div class="container" style="padding-top: 10%;">
            <CryptoTable />
        <Footer />
        </div>
    </div>
</template>

<script>
import CryptoTable from '../components/homeComp/CryptoTable.vue'
import Header from '../components/homeComp/Header.vue'
import Footer from '../components/homeComp/Footer.vue'


export default {
    name: "CryptoList",
    components: {
        CryptoTable,
        Header,
        Footer
    },
    created() {
        window.scroll(0, 0)
    }
}
</script>

<style>

</style>