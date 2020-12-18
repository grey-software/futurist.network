<template>
  <div class="t-container t-mx-auto t-screen-phone:t-px-4">
    <section class="t-h-screen flex-col t-items-center t-justify-center">
      <div class="t-font-bold t-text-xl t-text-center">
        Propose, Fund, Create
      </div>
      <h1
        class="t-font-extrabold t-text-4xl t-screen-pc:t-text-6xl t-text-center t-mb-6"
      >
        We're Crowdsourcing
        <br />the
        <span class="text-rainbow">Future!</span>
      </h1>
      <v-btn
        color="primary"
        target="_blank"
        outlined
        href="https://discord.com/invite/Z37nV2Z"
        large
        class="t-my-4"
        ><v-icon x-large class="mr-3">mdi-discord</v-icon> Join Our
        Community</v-btn
      >
      <div class="t-font-bold t-text-xl t-text-center">
        We're rebuilding this website...Come help us out on Github!
        <v-btn
          icon
          target="_blank"
          href="https://github.com/grey-software/futurist.network"
          ><v-icon x-large class="ml-3">mdi-github</v-icon></v-btn
        >
      </div>
    </section>
    <level-image-right
      title="Our projects"
      desc="Futurists in our community propose, fund, and create the technologies of the future!"
      image="/img/projects.png"
      class="t-mx-auto t-mb-10"
      :button2="{
        text: 'Learn More',
        icon: 'mdi-arrow-right',
        link: '/projects',
        internal: true,
      }"
    />
    <level-image-right
      title="Global Peace and Security"
      desc="We will promote the use of technology to inspire and enhance global security, through promoting international cooperation of science, de-escalation of arms, and supporting research into existential risks."
      image="/img/security.png"
      class="t-mx-auto t-mb-10"
    />
    <level-image-left
      title="Technological Progress"
      desc="We aim to move technological progress forward by enhancing humanity’s understanding of science, logic, and keeping an open mind."
      image="/img/open-mind.png"
      class="t-mx-auto t-mb-10"
    />
    <level-image-right
      title="An inclusive community"
      desc="We promote the inclusion of all people regardless of any individual trait, and aim to ensure that everyone can benefit from the use of technology."
      image="/img/inclusion.png"
      class="t-mx-auto t-mb-10"
    />
    <level-image-left
      title="Pioneer Mentorship"
      desc="Meet our mentors and launch your futurist project!"
      image="/img/pioneer-logo.png"
      :button1="{
        text: 'Book a Mentorship call',
        icon: 'mdi-calendar',
        link:
          'https://calendly.com/greysoftware/futurist-foundation-pioneer-mentorship',
        internal: false,
      }"
      :button2="{
        text: 'Learn More',
        icon: 'mdi-arrow-right',
        link: '/pioneer',
        internal: true,
      }"
      class="t-mx-auto t-mb-10"
    />
  </div>
</template>

<script>
import LevelImageRight from '@/components/LevelImageRight.vue'
import LevelImageLeft from '@/components/LevelImageLeft.vue'
export default {
  components: {LevelImageRight, LevelImageLeft},
}
</script>

<style scoped>
.v-btn {
  width: max-content;
}
</style>
