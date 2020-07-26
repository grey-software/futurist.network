<template>
  <div
    class="card neu-dark d-flex flex-column align-items-center justify-content-center justify-content-evenly"
  >
    <div class="circle" />
    <div class="card-body">
      <p class="card-text">{{ headline }}</p>
      <h5 class="card-title">{{ name }}</h5>
    </div>
    <div class="icon d-flex align-items-center justify-content-around">
      <a :href="emailAddress"><fa-icon :icon="['fas', 'envelope']" class="fa-lg"></fa-icon></a>
      <a :href="discord"><fa-icon :icon="['fab', 'discord']" class="fa-lg"></fa-icon></a>
      <a :href="linkedin"><fa-icon :icon="['fab', 'linkedin']" class="fa-lg"></fa-icon></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mail: String,
    headline: String,
    name: String,
    discord: String,
    linkedin: String
  }
}
</script>

<style scoped>
.card {
  margin: 20px 120px;
  color: white;
  border-radius: 10%;
  border: 0;
  background: var(--bg);
  position: relative;
  max-width: 16rem;
  height: 26rem;
}

.neu-dark {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.7), 0 0 22px rgba(255, 255, 255, 0.1);
}

.card-body {
  flex: none;
  position: relative;
  text-align: center;
  margin: 0;
}

.card-title {
  font-weight: 700;
  font-size: 25px;
  margin: 0;
  padding: 10px 0 30px 0;
}

.card-text {
  color: lightslategrey;
  font-size: 16px;
  margin: 0;
}

.circle {
  border: 5px solid;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin-left: 5px;
  text-align: center;
}

.icon {
  padding: 0 0;
  position: relative;
  width: 14rem;
}
</style>
