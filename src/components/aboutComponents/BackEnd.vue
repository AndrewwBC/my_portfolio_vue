<script setup lang="ts"></script>

<template>
  <div>
    <p class="intro">
      Backend refers to the part of a software application or website that is
      responsible for handling tasks such as data processing, business logic,
      and database management. It works behind the scenes to ensure that the
      frontend functions correctly and that data is managed appropriately.
    </p>

    <div>
      <!-- <h3>Tools that I'been using in this stack:</h3> -->

      <ul class="list">
        <li>
          <p>TOOLS</p>
          <p>Node.js - Express</p>
        </li>

        <li>
          <p>THAT</p>
          <p>PHP - Laravel</p>
        </li>

        <li>
          <p>I'VE</p>
          <p>Java - Spring Boot</p>
        </li>

        <li>
          <p>BEEN</p>
          <p>MySQL</p>
        </li>

        <li>
          <p>USING.</p>
          <p>PostgreSQL</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 20px;
  letter-spacing: 2px;
  color: #999;
}

.intro {
  color: #999;
}

.stackTools {
  display: flex;
  align-items: start;
  margin-top: 24px;
  gap: 24px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 32px;
  li {
    border-bottom: 1px solid rgb(37, 37, 37);
    padding: 8px 0px;
    p:nth-child(1) {
      color: #a9a8a8;
    }

    p + p {
      color: rgb(155, 105, 197);
    }
    display: flex;
    justify-content: space-between;
  }
}
</style>
