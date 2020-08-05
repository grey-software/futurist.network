<template>
  <b-card
    :img-src="imageUrl"
    :img-alt="`${project.title} Image`"
    img-top
    class="project-card m-4"
  >
    <div class="flex-col">
      <h1 class="project-title">{{project.title}}</h1>
      <b-card-text classs="project-desc">{{project.desc}}</b-card-text>
      <div class="spacer"/>
      <b-card-footer>
        <b-button
          @click="copyToClipboard(project.email)"
          v-b-tooltip.hover
          :title="project.email"
          class="icon-button rounded-circle"
        >
          <fa-icon :icon="['fas', 'envelope']"></fa-icon>
        </b-button>
        <b-button
          @click="copyToClipboard(project.discord)"
          v-b-tooltip.hover
          :title="project.discord"
          class="icon-button rounded-circle"
        >
          <fa-icon :icon="['fab', 'discord']"></fa-icon>
        </b-button>
      </b-card-footer>

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
.icon-button {
  width: 48px;
  height: 48px;
  padding: 8px;
}

.project-card {
  color: white;
  margin: 24px;
  width: 42%;
  height: 545px;
  box-shadow: 10px 10px 22px #030303;
  border-radius: 50px;
}

.project-title {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.96px;
  font-weight: 600;
}
</style>

