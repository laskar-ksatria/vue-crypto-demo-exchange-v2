<template>
    <div class="row mt-0">
        <div class="col-12">
            <div class="card bg-de bordered-class" style="border-radius: 0;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="bg-de">
                                <Navbar />

                                <div class="tab-content col-12 p-0 bg-de text-light">
                                    <div class="tab-pane fade show active" id="nw-nav-tab1" role="tabpanel" aria-labelledby="nw-nav-tab-1">
                                        <LimitOrder />
                                    </div>
                                    <div className="tab-pane fade" id="nw-nav-tab2" role="tabpanel" aria-labelledby="nw-nav-tab-2">

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './BottomContent/Navbar.vue'
import LimitOrder from './BottomContent/LimitOrder.vue'

export default {
    name: "TradeBottom",
    components: {
        Navbar,
        LimitOrder
    }
}
</script>

<style>
.card-limit {
    padding: 0 !important; 
}
</style>