<template>
  <div class="container d-flex flex-column align-items-center p">
    <p class="category">MENTORSHIP</p>
    <div class="heading mb-4">Work with <br />the <span style="color: #d52be8;">experts.</span></div>
    <p class="tag text-center">The Futurist Foundation is an organization that allows individuals like you to propose,
      fund, and work on the technologies of the future.</p>

    <div class="w-100 d-flex align-items-center justify-content-center flex-column flex-md-row">
      <div class="mr-md-3 text-center">
        <img src="../assets/spaceship.png" />
      </div>

      <div class="col group">

        <div class="my-3 neumorphism">
          <fa-icon
            class="fa-fw icon"
            :icon="['fa', 'brain']"
          ></fa-icon>
          <a class="group-name">
            A.I.</a>
        </div>

        <div class="my-3 neumorphism">
          <fa-icon
            class="fa-fw icon"
            :icon="['fa', 'heartbeat']"
          ></fa-icon>
          <a class="group-name">
            Longevity</a>
        </div>

        <div class="my-3 neumorphism">
          <fa-icon
            class="fa-fw icon"
            :icon="['fa', 'robot']"
          ></fa-icon>
          <a class="group-name">
            Robotics</a>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  color: white;
}

.heading {
  font-weight: 800;
  font-family: var(--font-heading);
  letter-spacing: -0.025em;
  font-size: 60px;
  line-height: 1.05;
}

.tag {
  font-size: 18px;
  font-weight: 500;
  color: lightslategrey;
  max-width: 600px;
}

.category {
  font-size: 15px;
  font-weight: 800;
  color: #fe5c26;
  letter-spacing: -0.032em;
  text-align: center;
  padding: 20px 20px;
}

.group {
  max-width: 400px;
}

.neumorphism {
  height: 50px;
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

.group-name {
  padding: 0 10px;
  font-weight: 700;
  font-size: 20px;
}

@media screen and (max-width: 540px) {
  img {
    width: 300px;
  }
}
</style>