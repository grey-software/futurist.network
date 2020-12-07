<template>
  <div class="d-flex flex-column align-items-center">
    <div :style="Background">
      <div class="circle d-flex align-items-center justify-content-center">
        <fa-icon :icon="['fas', icon]" class="icon" />
      </div>
    </div>

    <div class="text-box text-center">
      <h5 class="sub-heading">{{ heading }}</h5>
      <p class="sub-heading-text">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    desc: String,
    bgColor: {
      type: String,
      default: '#0099cc',
    },
    icon: String,
  },
  computed: {
    Background() {
      return {
        color: this.bgColor,
      }
    },
  },
}
</script>

<style scoped>
.sub-heading {
  font-weight: 700;
  font-size: 26px;
  color: #fff;
}

.sub-heading-text {
  color: lightslategrey;
}

.text-box {
  padding: 20px 0 50px;
}

.circle {
  border: 5px solid;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  z-index: 0;
}

.icon {
  font-size: 70px;
  z-index: 1;
}
</style>
