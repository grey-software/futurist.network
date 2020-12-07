<template>
  <div class="container">
    <section class="tw-h-screen tw-grid tw-place-items-center">
      <div class="flex-col align-center tw-mb-12">
        <div class="tw-font-bold tw-text-xl tw-text-center">
          Propose, Fund, Create
        </div>
        <h1 class="tw-font-extrabold tw-text-6xl tw-text-center">
          We're Crowdsourcing
          <br />the
          <span class="text-rainbow">Future!</span>
        </h1>
        <v-btn
          color="primary"
          target="_blank"
          href="https://discord.com/invite/Z37nV2Z"
          x-large
          class="p-4 my-4"
          ><v-icon x-large class="mr-3">mdi-discord</v-icon> Join Our
          Community</v-btn
        >
        <div class="tw-font-bold tw-text-xl tw-text-center">
          We're rebuilding this website...Come help us out on Github!
          <v-btn
            icon
            target="_blank"
            href="https://github.com/grey-software/futurist.network"
            ><v-icon x-large class="ml-3">mdi-github</v-icon></v-btn
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.v-btn {
  width: max-content;
}
</style>
