<template>
  <div class="hello">
    <VueCharting :options="options" />
  </div>
</template>

<script>
import VueCharting from 'vue-charting';
import Datafeed from "../api";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    VueCharting,
  },
  data() {
    return {
      options: {
        datafeed: Datafeed,
        library_path: '../charting_library/'
      }
    };
  },
}
</script>