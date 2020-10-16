<template>
  <b-card
    class="project-card m-4"
  >
    <div class="flex-col" style="min-height: 200px;">
      <div class="d-flex">
        <img class="circle mr-3" :src="project.logo" />
        <span class="project-title">{{project.title}}</span>
      </div>
      <b-card-text classs="project-desc">{{project.desc}}</b-card-text>
    </div>
      <div class="spacer"/>
      <div class="mt-5">
        <b-button
          class="icon-button mr-3"
        >
          <a target="_blank" :href="project.link">
            <fa-icon :icon="['fas', 'globe']"></fa-icon>
            Link
          </a>
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
      logo: {
        url: String
      },
      status: String,
      discord: String
    }
  },
  methods:{
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

.circle {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.icon-button {
  width: 130px;
  height: 48px;
  padding: 8px;
}

.project-card {
  color: white;
  box-shadow: 12px 24px 72px -12px rgba(133, 126, 126, 0.3);
  margin: 24px;
  width: 400px;
  border-radius: 50px;
  background: var(--bg);
}

.project-title {
  font-size: 30px;
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

