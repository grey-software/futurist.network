/* eslint-disable */
<template>
  <div class="pb-5">
    <!-- Hero -->
    <section
      id="hero-section"
      class="hero f-section d-flex align-content-center justify-content-center flex-column"
    >
      <p class="hero-tag">Propose, Fund, & Work.</p>
      <div class="flex-col align-items-center">
        <h1 class="hero-heading">
          Crowdsourcing
          <br />the
          <span class="text-rainbow">Future.</span>
        </h1>
        <link-btn
          txt="Join Our Community"
          link="https://discord.com/invite/Z37nV2Z"
        />

        <div class="d-flex justify-center mt-10 mt-sm-20"></div>

        <div class="more-indicator animation-more mt">
          <a href="#work-with-experts"
            ><img
              class="bounce"
              id="arrow"
              src="@/assets/icons/arrow.svg"
              alt="Down Arrow"
          /></a>
        </div>
      </div>
    </section>
    <WorkWithExperts class="mb-5 pb-5" id="work-with-experts" />
    <HowItWorks />
    <ReadyToBeAFuturist />
  </div>
</template>

<script>
import HowItWorks from '../components/HowItWorks'
import ReadyToBeAFuturist from '../components/ReadyToBeAFuturist'
import WorkWithExperts from '../components/WorkWithExperts'

export default {
  components: {
    HowItWorks,
    ReadyToBeAFuturist,
    WorkWithExperts,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style scoped>

hr {
  background-color: #fa8a01;
  height: 5px;
  border: 0;
  width: 150px;
  border-radius: 12px;
}

.title {
  font-weight: 700;
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: 70px;
  padding: 0 0 20px 0;
}

#arrow {
  bottom: 50px;
  width: 75px;
}

.bounce {
  -webkit-animation: bounce 0.75s infinite;
}

@-webkit-keyframes bounce {
  25% {
    transform: scale(1, 0.9) translate(0, 0);
  }

  75% {
    transform: scale(1, 1) translate(0, -10px);
  }
}

@media screen and (max-width: 992px) {
  #arrow {
    width: 60px;
  }
}

@media (max-width: 576px) {
  #arrow {
    width: 50px;
    bottom: 25px;
  }
}
</style>
