<template>
  <div class="btn d-flex justify-content-center">
    <div class="neumorphism-3" :href="link">
      <a>{{ txt }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    txt: String,
    link: String,
  },
}
</script>

<style scoped>
.neumorphism-3 {
  border-radius: 30px;
  background-color: #6c757d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 200px;
  position: relative;
}

.neumorphism-3:hover {
  background-color: var(--bg) !important;
  color: #6c757d !important;
  border: 1px solid #6c757d !important;
}
</style>
