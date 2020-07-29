<template>

  <div class="subscribe-container d-flex align-items-center justify-content-between px-4">
    <div class="d-flex align-items-center mr-4">
      <fa-icon
        class="fa-4x mr-4"
        :icon="['fa', 'envelope']"
      ></fa-icon>
      <div class="heading">Subscribe For<br />Weekly Updates </div>
    </div>

    <div class="flex-col">
      <div class="d-flex align-items-center mb-2">
        <b-input
          class="form-control no-border"
          placeholder="your.email@domain"
          maxlength="50"
          style="color: white; border-radius: 0;"
        />
        <b-button
          size="md"
          class="btn-subscribe"
        >
          <fa-icon
            class="mr-2"
            :icon="['fa', 'paper-plane']"
          ></fa-icon>Subscribe
        </b-button>
      </div>

      <p class="email-promise">* Your email is safe from spam and unsolicited sharing with us!</p>
    </div>
  </div>

  <!-- <b-row>
      <b-col
        cols="1"
        style="text-align: right; padding: 0;"
      >
        <fa-icon
          class="fa-4x"
          :icon="['fa', 'envelope']"
        ></fa-icon>
      </b-col>
      <b-col
        cols="3"
        style="text-align: left; padding: 0; margin-left: 0;"
      >
        <h3 class="heading">Subscribe For<br />Weekly Updates </h3>
      </b-col>

      <b-col>
        <b-form
          inline
          class="form-group"
        >
          <b-input
            class="form-control no-border"
            placeholder="your.email@domain"
            maxlength="50"
            style="color: white; border-radius: 0;"
          />
          <a>
            <fa-icon
              class="fa-fw"
              style="padding: 0; margin: 0;"
              :icon="['fa', 'paper-plane']"
            ></fa-icon>Subscribe
          </a>

        </b-form>
        <small
          class="form-text"
          style="color: white; text-align: left; margin: 0;"
        >* Email data will not be shared with anyone.</small>

      </b-col>
    </b-row> -->

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
  font-family: var(--font-heading);
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