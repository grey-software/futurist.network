<template>
  <b-card
    class="project-card m-4"
  >
    <!-- <div class="project-img">
      <img :src="imageUrl" :alt="`${project.title} Image`" />
    </div> -->
    <div class="flex-col" style="min-height: 200px;">
      <h1 class="project-title">{{project.title}}</h1>
      <b-card-text classs="project-desc">{{project.desc}}</b-card-text>
    </div>
      <div class="spacer"/>
      <div class="mt-5">
        <b-button
          @click="copyToClipboard(project.email)"
          v-b-tooltip.hover
          :title="project.email"
          class="icon-button mr-4"
        >
          <fa-icon :icon="['fas', 'envelope']"></fa-icon>
          Email
        </b-button>
        <b-button
          @click="copyToClipboard(project.discord)"
          v-b-tooltip.hover
          :title="project.discord"
          class="icon-button"
        >
          <fa-icon :icon="['fab', 'discord']"></fa-icon>
          Discord
        </b-button>
      </div>
  </b-card>
</template>

<script>
export default {
  props: {
    project: {
      name: String,
      desc: String,
      link: String,
      email: String,
      discord: String,
      image: {
        url: String
      }
    }
  },
  methods: {
    copyToClipboard (str) {
      const el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  },
  computed: {
    imageUrl () {
      return `http://159.89.124.15${this.project.image.url}`
    }
  }
};
</script>


<style scoped>
.btn {
  border-radius: 20px;
}

.icon-button {
  width: 120px;
  height: 48px;
  padding: 8px;
}

.project-card {
  color: white;
  box-shadow: 12px 24px 72px -12px rgba(133, 126, 126, 0.3);
  margin: 24px;
  width: 400px;
  border-radius: 50px;
}

.project-title {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.96px;
  font-weight: 600;
}

@media (max-width: 810px) {
  .project-card {
    width: 100%;
  }
}
</style>

