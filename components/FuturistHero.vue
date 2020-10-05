<template>
  <div class="f-landing">
    <div class="f-hero d-flex align-content-center justify-content-center flex-column">
      <p class="f-hero-tag">Propose, Fund, & Work.</p>
      <div class="f-hero-heading">
        Crowdsourcing
        <br />the <span class="text-rainbow">Future.</span>
      </div>

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
import LinkBtn from '@/components/LinkBtn.vue'

export default {
  components: {
    LinkBtn
  }  
}
</script>

