<template>
  <div
    class="t-w-full t-screen-tablet-portrait:t-w-1/2 t-screen-tablet-landscape:t-w-1/3 t-py-6 t-px-3"
  >
    <div class="t-rounded-lg">
      <div class="t-grid t-place-items-center project-card-bg">
        <img
          class="t-h-96px t-w-96px shadowed-image t-m-6"
          :src="project.logo"
        />
      </div>
      <div class="t-p-4 t-bg-gray-200">
        <div
          class="t-uppercase t-tracking-wide t-screen-phone:t-text-lg t-screen-tablet-portrait:t-text-lg t-screen-pc:t-text-xl t-font-bold t-text-gray-700 t-h-8"
        >
          {{ project.name }}
        </div>
        <div
          class="t-text-gray-700 t-screen-tablet-portrait:t-h-12 t-h-10 t-mt-4 t-screen-pc:t-text-lg"
        >
          {{ project.desc }}
        </div>
      </div>
      <div class="flex t-items-center t-justify-end">
        <!-- <a
        target="_blank"
        :href="project.repo"
        class="flex t-items-center t-p-4 t-justify-center t-w-1/2 hover:t-bg-grey-500 project-link"
      >
        <v-icon class="t-mr-3" large>mdi-github</v-icon>
        <span class="t-text-gray-50 t-text-2xl t-font-bold">Repo</span>
      </a> -->
        <a
          target="_blank"
          :href="project.demo"
          class="flex t-items-center t-p-4 t-justify-center t-w-1/2 hover:t-bg-grey-500 project-link"
        >
          <v-icon class="t-mr-3" large>mdi-link</v-icon>
          <span class="t-text-gray-50 t-text-2xl t-font-bold">Link</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      name: String,
      desc: String,
      repo: String,
      logo: String,
      demo: String,
    },
  },
}
</script>

<style scoped>
.project-card-bg {
  background-color: #f29e03;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='46' height='46' fill-opacity='0.6' fill='%23ffa61d'/%3E%3C/svg%3E");
}

.project-link {
  transition: all 0.13s ease-out;
}
</style>