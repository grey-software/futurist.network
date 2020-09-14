<template>
  <div class="container nav g-header pt-4 flex align-items-center">
    <input type="checkbox" id="nav-check" v-model="checked" />
    <div class="nav-header">
      <nuxt-link
        class="d-flex align-items-center ml-1"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo" src="../assets/f-logo.png" />
      </nuxt-link>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <nuxt-link
        @click.native="checked = false"
        to="/projects"
        class="g-nav-link nav-link mr-4"
        >About Us</nuxt-link
      >
      <nuxt-link
        @click.native="checked = false"
        to="/education"
        class="g-nav-link nav-link mr-4"
        >Donations</nuxt-link
      >
      <b-btn
        target="_blank"
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SJAKPG8YBNKSN&source=url"
        class="paypal-btn d-flex align-items-center my-3 mx-3"
        ><img
          class="paypal-icon mx-2"
          src="@/assets/icons/paypal.png"
        />Donate</b-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style>
.g-header {
  height: 12vh;
}

.logo {
  height: 48px;
  width: 48px;
  margin-right: 16px;
}

.g-nav-link {
  font-size: 18px;
  color: var(--color-text);
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}
</style>

<style scoped>
.nav {
  width: 100%;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav-links {
  display: flex;
  align-items: center;
  float: right;
  margin-left: auto;
  font-size: 18px;
}

.nav > #nav-check {
  display: none;
}

.nav-link {
  letter-spacing: 0;
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  height: fit-content;
  color: #efefef;
  transition: all 0.3s ease-out;
}

.nav-link:hover,
.nav-link:active {
  letter-spacing: 2px;
  transform: translateY(-6px);
}

@media (max-width: 768px) {
  .nav > .nav-btn {
    display: inline-block;
    float: right;
    align-self: end;
    margin-left: auto;
  }

  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
    border-radius: 8px;
  }

  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }

  .nav-links {
    position: absolute;
    display: block;
    width: 42%;
    background-color: #333;
    border-radius: 6px;
    transition: all 0.2s ease-out;
    overflow-y: hidden;
    top: 50px;
    right: 50px;
  }

  .nav-link {
    display: block;
    width: 100%;
    padding-left: 16px;
    transition: none;
  }

  .nav-link:hover,
  .nav-link:active {
    letter-spacing: 0;
    transform: none;
  }

  .nav > #nav-check:not(:checked) ~ .nav-links {
    opacity: 0;
    z-index: -1;
  }

  .nav > #nav-check:checked ~ .nav-links {
    overflow-y: auto;
    opacity: 1;
    z-index: 2;
  }
}

.paypal-icon {
  width: 24px;
  height: 24px;
}

.paypal-btn {
  height: 52px;
  width: 132px;
  border-radius: 32px;
}
</style>
