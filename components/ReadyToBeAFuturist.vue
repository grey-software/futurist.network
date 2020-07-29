<template>
  <div class="section">
    <h1 class="heading"> Ready to be a <span style="color: #fa8a01;">Futurist?</span></h1>
    <p class="tag">Come and explore our community via Discord! Chat with experts from all over the world.
      Discover and experience new things!</p>
    <b-row style="margin: 0 220px;">
      <b-col>
        <Btn style="padding: 0;" name="Discord"/>
      </b-col>

      <b-col>
        <Btn style="padding: 0;" name="Youtube"/>
      </b-col>
    </b-row>

    <img src="../assets/Astronaut.png"/>
    <subscribe class="subscribe"/>
  </div>
</template>

<script>
    import Btn from '../components/Btn.vue'
    import Subscribe from '../components/Subscribe.vue'

    export default {
        components: {
            Btn,
            Subscribe,
        }
    }
</script>
<style scoped>
  .section {
    padding: 120px 0 0 0;
    margin: 0 120px;
    text-align: center;
  }

  img {
    height: 800px;
    width: auto;
    transform: rotate(30deg) translate(-260px, -140px);
    background-color: transparent;
  }

  .subscribe {
    transform: translate(0, -600px);
  }

  .heading {
    font-weight: 800;
    font-family: var(--font-heading);
    color: white;
    letter-spacing: -0.025em;
    font-size: 70px;
    line-height: 1.05;
    z-index: 1000;
    padding: 0 0 20px 0;
  }

  .tag {
    margin: 0 120px;
    font-size: 18px;
    color: lightslategrey;
    padding: 0 0 40px 0;
  }
</style>