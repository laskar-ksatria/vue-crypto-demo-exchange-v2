<template>
        <section id="services" class="services section-bg bg-de">
      <div class="container">

        <div class="section-title">
          <h2 class="text-light">Excellent</h2>
          <p class="text-light">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
            <!-- <service-card v-for="(item, index) in" /> -->
            <ServiceCard v-for="(item, index) in servicesList" :key="index" :item="item" />
        </div>

      </div>
    </section><!-- End Services Section -->
</template>

<script>
import ServiceCard from './modules/ServiceCard.vue'

export default {
    name: "SectionServices",
    components: {
        ServiceCard
    },
    data() {
        return {
            servicesList: [
                {
                    icon: "las la-basketball-ball",
                    styled: {color: "#ff689b"},
                    title: "Lorem Ipsum",
                    message: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
                },
                {
                    icon: "las la-book",
                    styled: {color: "#e9bf06"},
                    title: "Dolor Sitema",
                    message: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
                },
                {
                    icon: "las la-book",
                    styled: {color: "#e9bf06"},
                    title: "Sed ut perspiciatis",
                    message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                },
                {
                    icon: "las la-tachometer-alt",
                    styled: {color: "#41cf2e"},
                    title: "Magni Dolores",
                    message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                },
                {
                    icon: "las la-globe-americas",
                    styled: {color: "#d6ff22"},
                    title: "Nemo Enim",
                    message: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
                },
                {
                    icon: "las la-clock",
                    styled: {color: "#4680ff"},
                    title: "Eiusmod Tempor",
                    message: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"
                },
            ]
        }
    }
}
</script>

<style>

</style>