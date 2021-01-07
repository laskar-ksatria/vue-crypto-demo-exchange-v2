<template>
    <div>
        <Header />
        <SectionHero />
        <CryptoTable />
        <main id="main">
            <SectionAbout />
            <SectionServices />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/homeComp/Header.vue"
import SectionHero from '../components/homeComp/SectionHero.vue'
import CryptoTable from '../components/homeComp/CryptoTable.vue'
import SectionAbout from '../components/homeComp/SectionAbout.vue'
import SectionServices from '../components/homeComp/SectionServices.vue'
import Footer from "../components/homeComp/Footer.vue"

export default {
    name: "Home",
    components: {
        Header, SectionHero, CryptoTable, 
        SectionAbout, SectionServices, 
        Footer 
    },
}
</script>

<style>

</style>