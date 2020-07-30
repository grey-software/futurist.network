<template>
  <b-card
    :title="project.title"
    :img-src="imageUrl"
    :img-alt="`${project.title} Image`"
    img-top
    class="project-card m-4"
  >
    <b-card-text>{{project.desc}}</b-card-text>

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
  color: gray;
  margin: 24px;
  border-radius: 12px;
  width: 42%;
  height: 420px;
}
</style>

