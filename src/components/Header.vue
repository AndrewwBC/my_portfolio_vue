<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  name: "Header",
};
</script>

<template>
  <header class="header">
    <div class="headerContent">
      <div>
        <RouterLink to="/">
          <h1>Andrew Campos</h1>
        </RouterLink>
      </div>

      <nav>
        <ul class="menuItems">
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li><RouterLink to="/projects">Projects</RouterLink></li>
          <li>Knowledge</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
}

.headerContent {
  max-width: 600px;
  color: white;
  padding-top: 64px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}

.menuItems {
  display: flex;
  gap: 16px;
  flex-direction: row;
  align-items: center;

  li {
    cursor: pointer;
  }
}

h1 {
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
