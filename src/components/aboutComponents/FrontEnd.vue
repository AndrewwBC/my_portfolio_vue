<script setup lang="ts"></script>

<template>
  <div>
    <p class="intro">
      Frontend refers to the part of a software application or website that
      users interact with directly. It includes the user interface (UI), which
      comprises the visual elements such as buttons, text, images, forms, and
      other elements that users see and interact with. Frontend
    </p>

    <div>
      <!-- <h3>Tools that I'been using in this stack:</h3> -->

      <ul class="list">
        <li>
          <p>TOOLS</p>
          <p>HTML</p>
        </li>

        <li>
          <p>THAT</p>
          <p>CSS</p>
        </li>

        <li>
          <p>I</p>
          <p>JavaScript</p>
        </li>

        <li>
          <p>HAVE</p>
          <p>React.Ts</p>
        </li>

        <li>
          <p>BEEN</p>
          <p>Vue</p>
        </li>

        <li>
          <p>USING</p>
          <p>Tailwind</p>
        </li>

        <li>
          <p>.</p>
          <p>Styled Components</p>
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
      color: #fb1;
    }
    display: flex;
    justify-content: space-between;
  }
}
</style>
