/* eslint-disable */
<template>
  <div class="pb-5">
    <!-- Hero -->
    <section
      id="f-hero"
      class="f-section">

      <Hero/>
      <HowItWorks/>
      <ReadyToBeAFuturist/>




    </section>

<!--    <section-->
<!--      id="f-projects"-->
<!--      class="f-section"-->
<!--    >-->
<!--      <div-->
<!--        v-if="projects"-->
<!--        class="flex row flex-wrap"-->
<!--      >-->
<!--        <div-->
<!--          v-for="project in projects"-->
<!--          :key="project.title"-->
<!--        >-->
<!--          <project-card :project="project" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
  </div>
</template>

<script>
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ReadyToBeAFuturist from "../components/ReadyToBeAFuturist";
import gql from "graphql-tag";

// import ProjectCard from "@/components/ProjectCard";
// import ProjectsQuery from "@/apollo/queries/projects/Projects.gql";

export default {
  components: {
    Hero,
      HowItWorks,
      ReadyToBeAFuturist,
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  apollo: {
    projects: {
      query: gql`
        query Projects {
          projects {
            title,
            desc,
            image {
              url
            },
            link,
            discord
          }
        }
      `
    }
  }
};
</script>

<style scoped>
* {
  background-color: #050c17;
}

img {
  height: 800px;
  width: auto;
  transform: rotate(30deg) translate(-150px, -540px);
  background-color: transparent;
}
</style>
