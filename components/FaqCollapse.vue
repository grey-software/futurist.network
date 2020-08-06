<template>
  <b-card no-body class="mb-5 mt-5">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-link class="neumorphism-3" block v-b-toggle="'index'+faqId" variant="info">
        <div>{{ question }}</div>
      </b-link>
    </b-card-header>
    <b-collapse :id="'index'+faqId" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>{{ desc }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  props: {
    desc: String,
    question: String,
    faqId: String,
  },
};
</script>

<style scoped>
.neumorphism-3 {
  border-radius: 30px;
  display: flex;
  align-items: center;
  height: 55px;
  width: 200px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8), -6px -6px 10px rgba(255, 255, 255, 0.1);
  position: relative;
}

.neumorphism-3::after {
  content: "";
  border-radius: 30px;
  position: absolute;
  height: 75%;
  width: 95%;
  background-color: transparent;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.8), inset -5px -5px 10px rgba(255, 255, 255, 0.1);
}
</style>