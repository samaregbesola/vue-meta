<template>
  <div id="page-1">
    This page has Vuex store counters.

    <div>
      <button @click="incrementCounter">Increment</button>

      Store counter: {{ storeCounter }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { useMeta } from "vue-meta";

export default {
  name: "Page1",
  methods: {
    ...mapMutations(["incrementCounter"]),
  },
  computed: {
    ...mapState(["storeCounter"]),
    // title() {
    //   return `Page 1 - My App`;
    // },
  },
  setup() {
    useMeta({ title: "Page one", description: "This page is a demo" });
  },
};
</script>
