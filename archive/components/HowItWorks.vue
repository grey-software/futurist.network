<template>
  <div class="section w-100 mb-5">
    <div class="d-flex flex-column container">
      <p class="hero-tag">HOW IT WORKS</p>
      <h2 class="hero-heading mb-5">The Project Pitch</h2>

      <div
        class="d-flex container justify-content-between align-items-center flex-column flex-md-row"
      >
        <div class="d-flex flex-column">
          <div class="how-it-works-card mb-5">
            <fa-icon
              :icon="['fas', 'volume-up']"
              class="how-it-works-icon"
            ></fa-icon>
            <div class="tag-line">
              <p>Pitch a project!</p>
            </div>
            <p class="hero-tag">STEP 1</p>
          </div>
        </div>

        <div class="d-flex column">
          <div class="how-it-works-card mb-5">
            <fa-icon
              :icon="['fas', 'link']"
              class="how-it-works-icon"
            ></fa-icon>
            <div class="tag-line">
              <p>Connect with an expert.</p>
            </div>
            <p class="hero-tag">STEP 2</p>
          </div>
        </div>

        <div class="d-flex column">
          <div class="how-it-works-card mb-5">
            <fa-icon
              :icon="['fas', 'handshake']"
              class="how-it-works-icon"
            ></fa-icon>
            <div class="tag-line">
              <p>Meet & collaborate with the community!</p>
            </div>
            <p class="hero-tag">STEP 3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  background-color: rgba(11, 26, 50, 1);
  color: white;
}

.section {
  text-align: center;
  background-color: rgba(11, 26, 50, 1);
}

.hero-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  letter-spacing: -0.025em;
  font-size: 60px;
  line-height: 1.05;
}

.hero-tag {
  font-size: 20px;
  font-weight: 700;
  color: #fa8a01;
  letter-spacing: -0.032em;
  line-height: 1.5;
  padding: 40px 0 10px 0;
  text-align: center;
}

.tag-line {
  padding: 24px 0;
  height: 72px;
  font-size: 24px;
}

.how-it-works-card {
  width: 220px;
  height: 256px;
}

.how-it-works-icon {
  font-size: 84px;
}

@media screen and (min-width: 992px) {
  .how-it-works-card {
    width: 232px;
  }
}
</style>
