<template>
  <div class="g-landing">
    <div class="g-hero">
      <p class="g-hero-tag">Propose, Fund, & Work.</p>
      <h1 class="g-hero-heading">
        Crowdsourcing
        <br />the <span class="text-rainbow">Future.</span>
      </h1>

      <discord-btn />

      <!-- MORE INDICATOR -->
      <div class="more-indicator animation-more mt">
        <p>MORE</p>
        <fa-icon :icon="['fas', 'angle-double-down']"></fa-icon>

      </div>
    </div>
  </div>
</template>

<script>
import DiscordBtn from '@/components/DiscordBtn.vue'

export default {
  components: {
    DiscordBtn
  }  
}
</script>

