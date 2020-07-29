<template>
  <div class="g-landing">
    <div class="g-hero d-flex align-content-center justify-content-center flex-column">
      <p class="g-hero-tag">Propose, Fund, & Work.</p>
      <h1 class="g-hero-heading">
        Crowdsourcing
        <br />the
        <span class="text-rainbow">Future.</span>
      </h1>

      <link-btn txt="Join Discord" link="https://discord.com/invite/Z37nV2Z" />

      <!-- MORE INDICATOR -->
      <div class="more-indicator animation-more mt">
        <p>MORE</p>
        <fa-icon :icon="['fas', 'angle-double-down']"></fa-icon>
      </div>
    </div>
  </div>
</template>

<script>
import LinkBtn from "@/components/LinkBtn.vue";

export default {
  components: {
    LinkBtn
  },
};
</script>
