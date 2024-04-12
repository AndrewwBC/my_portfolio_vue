<script lang="ts">
import { RouterLink } from "vue-router";
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<template>
  <Header />
  <router-view class="routerContent"></router-view>
</template>

<style scoped>
.routerContent {
  max-width: 600px;
  margin: 0 auto;
}
</style>
