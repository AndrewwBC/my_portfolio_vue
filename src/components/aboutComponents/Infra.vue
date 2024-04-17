<script setup lang="ts"></script>

<template>
  <div>
    <p class="intro">
      Infrastructure of a software refers to the set of physical and logical
      components needed to support the operation of that software. This includes
      servers, networks, operating systems, databases, cloud services, among
      others. The infrastructure is responsible for ensuring that the software
      runs efficiently, securely, and reliably. Here are some common
      technologies used in software infrastructure:
    </p>

    <div>
      <!-- <h3>Tools that I'been using in this stack:</h3> -->

      <ul class="list">
        <li>
          <p>TOOLS</p>
          <p>AWS Services</p>
        </li>

        <li>
          <p>THAT</p>
          <p>Operational Systems</p>
        </li>

        <li>
          <p>I'VE</p>
          <p>AWS S3 Bucket</p>
        </li>

        <li>
          <p>BEEN</p>
          <p>Terraform</p>
        </li>

        <li>
          <p>USING.</p>
          <p>Network Management</p>
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
  font-weight: 300;
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
