<template>
  <div id="app">
    <h2>This is a Vue 3 starter project</h2>

    <div class="nav">
      <router-link to="/">Vuex Store Page</router-link>
      <router-link to="/page2">Composition API Page</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import { useMeta } from "vue-meta";
import { useHead } from "unhead";

export default {
  name: "App",
  setup() {
    useHead({
      title: "My awesome site",
      meta: [
        {
          name: "title",
          content: "my awesome website",
        },
        {
          name: "keywords",
          content: "I'm all good",
        },
        {
          name: "robots",
          content: "ode ni e",
        },
      ],
    });
  },
};
</script>

<style lang="postcss" scoped>
#app {
  .nav {
    padding: 12px 0px;

    a {
      margin-right: 12px;
    }
  }
}
</style>
