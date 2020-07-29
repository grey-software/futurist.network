<template>
  <div class="section justify-content-center">
    <p class="category">MENTORSHIP</p>
    <h1 class="heading mb-4">Work with <br />the <span style="color: #d52be8;">experts.</span></h1>
    <p class="tag">The Futurist Foundation is an organization that allows individuals like you to propose,
      fund, and work on the technologies of the future.</p>

    <div class="groups">

      <b-row>
        <b-col>
          <img src="../assets/spaceship.png" />
        </b-col>

        <b-col>
          <b-row style="margin: 20px 0;">
            <div class="neumorphism">
              <fa-icon
                class="fa-fw icon"
                :icon="['fa', 'brain']"
              ></fa-icon>
              <a class="group-name">
                A.I.</a>
            </div>
          </b-row>

          <b-row style="margin: 20px 0;">
            <div class="neumorphism">
              <fa-icon
                class="fa-fw icon"
                :icon="['fa', 'heartbeat']"
              ></fa-icon>
              <a class="group-name">
                Longevity</a>
            </div>
          </b-row>

          <b-row style="margin: 20px 0;">
            <div class="neumorphism">
              <fa-icon
                class="fa-fw icon"
                :icon="['fa', 'robot']"
              ></fa-icon>
              <a class="group-name">
                Robotics</a>
            </div>
          </b-row>

        </b-col>

      </b-row>
    </div>
  </div>
</template>


<style scoped>
.section {
  margin: 0 120px;
  padding: 80px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: white;
  letter-spacing: -0.025em;
  font-size: 60px;
  line-height: 1.05;
  z-index: 1000;
}

.tag {
  font-size: 18px;
  font-weight: 500;
  color: lightslategrey;
  width: 434px;
}

.category {
  font-size: 15px;
  font-weight: 800;
  color: #fe5c26;
  letter-spacing: -0.032em;
  text-align: center;
  padding: 20px 20px;
}

.neumorphism {
  height: 50px;
  width: 350px;
  border-radius: 5px;
  text-align: left;
  padding: 10px 20px;
}

.neumorphism:hover {
  box-shadow:
    10px 10px 20px rgba(0, 0, 0, 0.8),
    -6px -6px 10px rgba(255, 255, 255, 0.1);
  transition: 0.5s;
}

img {
  width: 400px;
  border-radius: 20px;
}

.groups {
  padding: 40px 0;
  color: white;
}

.group-name {
  padding: 0 10px;
  font-weight: 700;
  font-size: 20px;
}
</style>