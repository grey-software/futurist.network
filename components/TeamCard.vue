<template>
  <div
    class="card neu-dark d-flex flex-column align-items-center justify-content-center justify-content-evenly"
  >
    <img :src="imgSrc" class="circle" />
    <div class="card-body">
      <p class="card-text">{{ headline }}</p>
      <h5 class="card-title">{{ name }}</h5>
    </div>
    <div class="icon d-flex align-items-center justify-content-around">
      <a :href="emailAddress">
        <fa-icon :icon="['fas', 'envelope']" class="fa-lg"></fa-icon>
      </a>
      <a @click="copyToClipboard()" v-b-tooltip.hover :title="isCopied">
        <fa-icon :icon="['fab', 'discord']" class="fa-lg"></fa-icon>
      </a>
      <a :href="linkedin">
        <fa-icon :icon="['fab', 'linkedin']" class="fa-lg"></fa-icon>
      </a>
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
    linkedin: String,
    imgSrc: String
  },
  data() {
    return { isCopied: "Click to copy username" };
  },
  methods: {
    copyToClipboard(e) {
      var text = navigator.clipboard
        .writeText(this.discord)
        .then(() => {
          this.isCopied = "Copied!";
          console.log(this.isCopied);
          setTimeout(() => {
            this.isCopied = "Click to copy username";
          }, 5000);
        })
        .catch(() => {
          this.isCopied = "Try Again!";
          setTimeout(() => {
            this.isCopied = "Click to copy username";
          }, 1000);
        });
      console.log("Copy " + text);
    }
  },
  computed: {
    emailAddress() {
      return "mailto:" + this.mail;
    }
  }
};
</script>

<style scoped>
.card {
  color: white;
  border-radius: 10%;
  border: 0;
  background: var(--bg);
  position: relative;
  margin: 42px;
  height: 26rem;
}

@media screen and (min-width: 980px) {
  .card {
    margin: 0;
    max-width: 18rem;
  }
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
  height: 164px;
  width: 164px;
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
