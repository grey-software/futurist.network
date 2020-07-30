/* eslint-disable */
<template>
  <div class="pb-5">
    <!-- Hero -->
    <section
      id="f-hero"
      class="f-section"
    >

      <Hero />
      <WorkWithExperts />
      <section
        id="f-projects"
        class="f-section d-flex flex-col align-items-center mb-5"
      >
        <hr />
        <div class="title">Featured <span style="color: #6fffa6;">Projects</span></div>
        <div
          v-if="projects"
          class="flex row flex-wrap justify-content-center"
        >

          <project-card
            v-for="project in projects"
            :key="project.title"
            :project="project"
          />
        </div>
      </section>
      <HowItWorks class="pt-5"/>
      <ReadyToBeAFuturist />

    </section>

  </div>
</template>

<script>
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ReadyToBeAFuturist from "../components/ReadyToBeAFuturist";
import WorkWithExperts from "../components/WorkWithExperts";
import gql from "graphql-tag";

// import ProjectCard from "@/components/ProjectCard";
// import ProjectsQuery from "@/apollo/queries/projects/Projects.gql";

export default {
  components: {
    Hero,
    HowItWorks,
    ReadyToBeAFuturist,
    WorkWithExperts
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

hr {
  background-color: #fa8a01;
  height: 5px;
  border: 0;
  width: 150px;
  border-radius: 12px;
}

img {
  height: 800px;
  width: auto;
  transform: rotate(30deg) translate(-150px, -540px);
  background-color: transparent;
}

.title {
  font-weight: 700;
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: 70px;
  padding: 0 0 20px 0;
}
</style>
