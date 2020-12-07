<template>
  <div class="btn d-flex justify-content-center">
    <div class="neumorphism-3" >
      <a :href="link" target="_blank">{{ txt }}</a>
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
  background-color: #fa8a01;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: fit-content;
}

.neumorphism-3:hover {
  background-color: var(--bg) !important;
  color: #6c757d !important;
  border: 1px solid #6c757d !important;
}
</style>
