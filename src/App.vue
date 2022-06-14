<template>
  <div class="container d-flex justify-content-center">
    <Cube />
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
body {
  background-image: url("https://thumbs.gfycat.com/WhimsicalThoseConure-max-1mb.gif");
  background-size: 100%;
}
</style>
