<template>
  <section class="t-container h-screen mx-auto t-mt-6">
    <h1 class="t-text-6xl t-font-extrabold">Our Projects</h1>
    <div class="flex t-flex-wrap t-justify-center">
      <project-card
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
export default {
  async asyncData({$content, params, error}) {
    const projectsDataStore = await $content('projects').fetch()
    // console.log(projectsDataStore)
    
    const projects = projectsDataStore.projects
    // console.log(projects)
    return {projects}
  },
  components: {
    ProjectCard,
  },
}
</script>

<style>
.project-cards-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .g-section-heading {
    text-align: center;
  }
}
</style>
