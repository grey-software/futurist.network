<template>
  <div class="mt-4 mb-5">
    <div
      class="p-1 px-3 pt-2 collapse-btn"
      block
      v-b-toggle="'index'+faqId"
      variant="info"
      header-tag="header"
      role="tab"
    >
      <div class="d-flex align-items-center justify-content-between question">
        <div>{{ question }}</div>
        <fa-icon :icon="['fas', 'plus']" class="fa-lg"></fa-icon>
      </div>
    </div>
    <b-collapse :id="'index'+faqId" accordion="my-accordion" role="tabpanel">
      <div class="answer ml-3 my-4">{{ answer }}</div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    answer: String,
    question: String,
    faqId: String,
  },
};
</script>

<style scoped>
.collapse-btn {
  background: #050c17;
  text-align: left;
  border-radius: 16px;
  box-shadow: -10px -10px 22px #4b4b4b80;
  height: 65px;
  color: #fff;
  width: 100%;
}

.question {
  width: 100%;
  height: 70%;
  position: relative;
  font-weight: 700;
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: 25px;
  top: 5px;
}

.answer {
  color: #838383;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.96px;
  font-weight: 600;
}
</style>