<template>
  <div class="btn d-flex justify-content-center">
    <b-link class="neumorphism-3" href="https://discord.com/invite/Z37nV2Z">
      <a style="color: white;">{{name}}</a>
    </b-link>
  </div>
</template>
<script>
    export default {
        name: 'Button',
        props: {
            name: String,
        }
    }
</script>
<style scoped>
.neumorphism-3 {
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 200px;
  box-shadow:
    10px 10px 20px rgba(0, 0, 0, 0.8),
    -6px -6px 10px rgba(255, 255, 255, 0.1);
  position: relative;
}

</style>
