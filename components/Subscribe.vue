<template>
  <div class="sub">
    <b-row>
      <b-col cols="1" style="text-align: right; padding: 0;">
        <fa-icon class="fa-4x" :icon="['fa', 'envelope']"></fa-icon>
      </b-col>
      <b-col cols="3" style="text-align: left; padding: 0; margin-left: 0;">
        <h3 class="heading">Subscribe For<br/>Weekly Updates </h3>
      </b-col>

      <b-col>
        <b-form inline class="form-group">
          <b-input
            class="form-control no-border"
            placeholder="hello@futurist.ca"
            maxlength="50"
            style="color: white; border-radius: 0;"
          />
          <a><fa-icon class="fa-fw" style="padding: 0; margin: 0;" :icon="['fa', 'paper-plane']"></fa-icon>Subscribe</a>

        </b-form>
        <small class="form-text" style="color: white; text-align: left; margin: 0;"
        >* Email data will not be shared with anyone.</small>


      </b-col>
    </b-row>

  </div>
</template>

<style scoped>
  * {
    margin: 20px 20px;
    background-color: #fe5c26;
    border-radius: 30px;
  }

  ::placeholder {
    color: white;
  }

  .sub {
    color: white;
    text-align: center;
  }

  .heading {
    font-weight: 700;
    font-family: var(--font-heading), sans-serif;
    color: white;
    letter-spacing: -0.025em;
    font-size: 35px;
    padding: 20px 0 20px 0;
    margin: 0;
  }

  .form-group {
    padding-top: 20px;
    text-align: left;
    margin: 0;
    width: auto;
  }

  .form-control {
    width: 300px;
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
</style>