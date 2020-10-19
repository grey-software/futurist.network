<template>
  <div
    class="subscribe-container d-flex align-items-center justify-content-between px-5 py-3"
  >
    <div class="d-flex align-items-center mr-4">
      <fa-icon class="fa-4x mr-4" :icon="['fa', 'envelope']"></fa-icon>
      <div class="heading">Subscribe For<br />Weekly Updates</div>
    </div>

    <div class="flex-col">
      <div class="d-flex align-items-center mb-2">
        <b-input
          class="form-control no-border"
          placeholder="your.email@domain"
          maxlength="50"
          style="color: white; border-radius: 0;"
        />
        <b-button size="md" class="btn-subscribe">
          <fa-icon class="mr-2" :icon="['fa', 'paper-plane']"></fa-icon
          >Subscribe
        </b-button>
      </div>

      <p class="email-promise">
        * Your email is safe from spam and unsolicited sharing with us!
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  background-color: unset;
}

.subscribe-container {
  margin: 20px 20px;
  background-color: #fe5c26;
  border-radius: 30px;
  color: white;
  text-align: start !important;
}

.btn-subscribe {
  padding: 8px 16px;
}

::placeholder {
  color: white;
}

.heading {
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 20px;
  padding: 20px 0 20px 0;
  margin: 0;
  text-align: start !important;
}

.form-group {
  padding-top: 20px;
  text-align: left;
  margin: 0;
  width: auto;
}

.form-control {
  width: auto;
  padding: 0;
}

.form-control:focus {
  background-color: #fe5c26;
}

input:focus,
input.form-control:focus {
  outline: none 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

.no-border {
  border-right: solid 2px #fe5c26;
  border-top: solid 2px #fe5c26;
  border-left: solid 2px #fe5c26;
  border-bottom: solid 2px;
}

.email-promise {
  text-align: start;
}
</style>
