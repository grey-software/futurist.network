<template>
  <div class="section">
    <div class="section-content">
      <p class="hero-tag">HOW IT WORKS</p>
      <h2 class="hero-heading">The Project Pitch</h2>

      <div class="d-flex justify-content-between">
        <div class="d-flex column">
          <div class="how-it-works-card">
            <fa-icon
              :icon="['fas', 'volume-up']"
              class="fa-3x"
            ></fa-icon>
            <div class="tag-line">
              <p> Pitch a project! </p>
              <p class="hero-tag"> STEP 1 </p>
            </div>

          </div>
        </div>
        <div class="d-flex column">
          <div class="how-it-works-card">
            <fa-icon
              :icon="['fas', 'link']"
              class="fa-3x"
            ></fa-icon>
            <div class="tag-line">
              <p> Connect with an expert. </p>
              <p class="hero-tag"> STEP 2 </p>
            </div>

          </div>
        </div>
        <div class="d-flex column">
          <div class="how-it-works-card">
            <fa-icon
              :icon="['fas', 'handshake']"
              class="fa-3x"
            ></fa-icon>
            <div class="tag-line">
              <p> Meet & collaborate with the community! </p>
              <p class="hero-tag"> STEP 3 </p>
            </div>

          </div>
        </div>
      </div>

      <!-- <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <div>
              <fa-icon
                :icon="['fas', 'volume-up']"
                class="fa-3x"
              ></fa-icon>
              <div class="tag-line">
                <p> Pitch a project! </p>
                <p class="hero-tag"> STEP 1 </p>
              </div>

            </div>
          </b-col>
          <b-col>
            <div>
              <fa-icon
                :icon="['fas', 'link']"
                class="fa-3x"
              ></fa-icon>
              <div class="tag-line">
                <p> Connect with an expert. </p>
                <p class="hero-tag"> STEP 2 </p>
              </div>

            </div>
          </b-col>
          <b-col>
            <div>
              <fa-icon
                :icon="['fas', 'handshake']"
                class="fa-3x"
              ></fa-icon>
              <div class="tag-line">
                <p> Meet & collaborate with the community! </p>
                <p class="hero-tag"> STEP 3 </p>
              </div>

            </div>
          </b-col>
        </b-row>
      </b-container> -->
    </div>
  </div>

</template>

<style scoped>
* {
  background-color: rgba(11, 26, 50, 1);
}

.section {
  text-align: center;
  color: white;
}

.section-content {
  text-align: center;
  color: white;
  padding: 0 120px;
}

.hero-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: white;
  letter-spacing: -0.025em;
  font-size: 60px;
  line-height: 1.05;
  z-index: 1000;
  padding: 0 0 80px 0;
}

.hero-tag {
  font-size: 18px;
  font-weight: 700;
  color: #fa8a01;
  letter-spacing: -0.032em;
  line-height: 1.5;
  padding: 40px 0 10px 0;
  text-align: center;
}

.tag-line {
  padding: 20px 0;
}

.how-it-works-card {
  width: 232px;
  height: 256px;
}
</style>