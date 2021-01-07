<template>
  <div class="table-responsive nw-table-bottom">
      <table class="table"> 
          <thead>
              <tr>
                  <th colspan="3">
                      <div class="nw-tabs-trade-tablist-table-header">
                          <div class="row m-0">
                                <div class="col p-0 pt-1 pb-1">No.</div>
                                <div class="col p-0 pt-1 pb-1">Type</div>
                                <div class="col p-0 pt-1 pb-1">Amount</div>
                                <div class="col p-0 pt-1 pb-1">Price</div>
                                <div class="col p-0 pt-1 pb-1">Gain/Loss</div>
                                <div class="col p-0 pt-1 pb-1">Filled</div>
                                <div class="col p-0 pt-1 pb-1">Action</div>
                          </div>
                      </div>
                  </th>
              </tr>
          </thead>

                          <tbody>
                    <tr>
                        <td colSpan="3" style="text-align: center">
                            <div class="nw-tabs-trade-tablist-table-scrollbottom">
                                <div class="row m-0" style="text-align: center">
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">1.</div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;"><span class="text-success">BELI</span></div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">1</div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">$ 10000</div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;"><span class="text-success">1.200</span></div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">45%</div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">Close</div>
                                </div>
                                <div class="row m-0" style="text-align: center">
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">1.</div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;"><span class="text-success">BELI</span></div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">1</div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">$ 10000</div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;"><span class="text-success">1.200</span></div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">45%</div>
                                    <div class="col p-0 pt-1 pb-1 d-flex align-items-center justify-content-start" style="text-align:center;">Close</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>



      </table>
  </div>
</template>

<script>
export default {
    name: "LimitOrder",
    data() {
        return {
            head: ["No.", "Type","Amount", "Price", "Gain/Loss", "Filled"]
        }
    }
}
</script>

<style>

</style>