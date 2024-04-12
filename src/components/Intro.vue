<script lang="ts">
export default {};
</script>

<template>
  <main>
    <section class="introContent">
      <div>
        <img
          class="profileImage"
          src="https://media.licdn.com/dms/image/D4D03AQECfeL929bGhQ/profile-displayphoto-shrink_800_800/0/1684103633996?e=1718236800&v=beta&t=YhSBCmTIpWrij6mw2pHQXyRZ6VREAr5sSOa2IzsrJhM"
          alt=""
        />
      </div>

      <div class="introInfo">
        <div>
          <p>
            <span>Hey, I'm Andrew.</span> I'm currently a web developer student.
          </p>
        </div>

        <ul class="list">
          <li class="listItem">
            <div>
              <img src="../assets/icons/github.png" alt="GitHub Icon" />
            </div>
            <p>Github</p>
          </li>
          <li class="listItem">
            <div>
              <img src="../assets/icons/linkedin.png" alt="" />
            </div>
            <p>Linkedin</p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: flex-start;
}

.introContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  letter-spacing: 1px;

  .introInfo {
    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
      font-size: 24px;
      color: #b0b0b0;
    }
  }

  .profileImage {
    max-width: 120px;
    max-height: 120px;
    border-radius: 9999px;
  }

  .list {
    display: flex;
    align-items: start;
    gap: 12px;
    margin-top: 8px;
  }

  .listItem {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 8px;
    p {
      font-size: 14px;
    }

    img {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
