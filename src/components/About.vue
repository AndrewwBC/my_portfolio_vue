<script setup lang="ts">
defineProps<{
  msg?: string;
}>();
</script>

<template>
  <div class="aboutContent">
    <div class="intro">
      <h2>Hey, I'm Andrew 👋🏼</h2>
      <p>
        I'm twenty four years old, and I've been a programming student since
        2022. In college, I've been learning about
        <span> <RouterLink to="/about/frontend">FrontEnd</RouterLink></span
        >, <span> <RouterLink to="/about/backend">Backend</RouterLink></span
        >, <span> <RouterLink to="/about/devops">DevOps</RouterLink></span
        >, <span> <RouterLink to="/about/so">S.O</RouterLink></span> and
        <span> <RouterLink to="/about/design">Design</RouterLink> </span>.
      </p>
    </div>

    <div class="stackContent">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.aboutContent {
  letter-spacing: 0.5px;

  h2 {
    font-size: 32px;
    margin-bottom: 28px;
  }

  p {
    line-height: 24px;

    a {
      color: #fb1;
    }
  }

  .stackContent {
    margin-top: 24px;
  }
}
</style>
