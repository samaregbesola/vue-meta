<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | A test app` : `A test application`
    }}</template>
    <template v-slot:description="{ content }">{{
      content
        ? `${content}`
        : `We have the best kind of website the internet has to offer`
    }}</template>
  </metainfo>
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
import { useMeta } from "vue-meta";

export default {
  name: "App",
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "en", amp: true },
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
