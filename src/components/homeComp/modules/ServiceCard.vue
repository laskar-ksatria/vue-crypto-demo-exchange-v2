<template>
    <div class="col-lg-4 col-md-6">
        <div class="icon-box bg-dark text-color">
            <div class="icon"><i class="las la-basketball-ball" style="color: #ff689b;"></i></div>
            <h4 class="title"><a href="#" style="color: orange;">{{ item.title }}</a></h4>
            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ServiceCard",
    props: ["item"]
}
</script>

<style>
.text-color {
    color: white !important;
}
</style>
