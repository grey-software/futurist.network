<template>
  <div class="container text-center">
    <h1 class="heading">
      Ready to be a
      <span style="color: #fa8a01;">Futurist?</span>
    </h1>
    <div class="w100 d-flex justify-content-center">
      <div class="tag text-center">
        Come and explore our community via Discord! Chat with experts from all
        over the world. Discover and experience new things!
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center">
      <div>
        <link-btn
          txt="Join Discord"
          link="https://discord.com/invite/Z37nV2Z"
        />
      </div>

      <div>
        <link-btn txt="Youtube" link="https://discord.com/invite/Z37nV2Z" />
      </div>
    </div>

    <subscribe />
  </div>
</template>

<style scoped>
img {
  height: 800px;
  width: auto;
  transform: rotate(30deg) translate(-260px, -140px);
  background-color: transparent;
}

.heading {
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  color: white;
  letter-spacing: -0.025em;
  font-size: 70px;
  line-height: 1.05;
  padding: 0 0 20px 0;
}

.tag {
  max-width: 600px;
  font-size: 18px;
  color: lightslategrey;
  padding: 0 0 40px 0;
}
</style>
