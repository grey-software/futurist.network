/* eslint-disable */
<template>
  <div class="pb-5">
    <!-- Hero -->
    <section
      id="hero-section"
      class="hero f-section d-flex align-content-center justify-content-center flex-column"
    >
      <p class="hero-tag">Propose, Fund, & Work.</p>
      <div>
        <h1 class="hero-heading">
          Crowdsourcing
          <br />the
          <span class="text-rainbow">Future.</span>
        </h1>
        <link-btn txt="Join Discord" link="https://discord.com/invite/Z37nV2Z" />

        <div class="more-indicator animation-more mt">
          <p>MORE</p>
          <fa-icon :icon="['fas', 'angle-double-down']"></fa-icon>
        </div>
      </div>
    </section>
    <WorkWithExperts />
    <section class="d-flex flex-col align-items-center mb-5">
      <hr />
      <div class="hero-heading py-4">
        Featured
        <span style="color: #6fffa6;">Projects</span>
      </div>
      <div v-if="projects" class="flex row flex-wrap justify-content-center">
        <project-card v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </section>
    <HowItWorks class="pt-5" />
    <ReadyToBeAFuturist />
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
    WorkWithExperts,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  apollo: {
    projects: {
      query: gql`
        query Projects {
          projects {
            title
            desc
            image {
              url
            }
            link
            discord
          }
        }
      `,
    },
  },
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
