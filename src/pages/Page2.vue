<template>
  <div id="page-2">
    This is a page that has Composition API

    <div class="counter">
      <button @click="incrementCounter">Increment</button>

      Composition Counter: {{ counter }}
    </div>

    <VueImage :src="godcode" alt="Code Meme" />
    <vue-title />
  </div>
</template>

<script>
import useCounter from "../compositions/useCounter";
import VueImage from "../components/VueImage.vue";
import godcode from "../assets/godcode.jpg";
import { useHead } from "unhead";
const { counter, incrementCounter } = useCounter();

export default {
  setup() {
    useHead({
      title: "Mo gbadun",
    });
  },
};
</script>

<style lang="postcss" scoped>
#page-2 {
  .counter {
    margin-bottom: 20px;
  }
}
</style>
