<template>
  <div class="container nav f-header pt-4">
    <input type="checkbox" id="nav-check" v-model="checked" />
    <div class="nav-header">
      <nuxt-link
        class="d-flex align-items-center ml-1"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo" src="/logo.png" />
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
        to="/about"
        class="f-nav-link nav-link mr-4"
        >About Us</nuxt-link
      >
      <nuxt-link
        @click.native="checked = false"
        to="/projects"
        class="f-nav-link nav-link mr-4"
        >Projects</nuxt-link
      >
      <nuxt-link
        @click.native="checked = false"
        to="/faq"
        class="f-nav-link nav-link mr-4"
        >FAQ</nuxt-link
      >
      <a class="paypal-button" target="_blank"
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SJAKPG8YBNKSN&source=url">
        <img class="paypal-icon" src="@/assets/icons/paypal.png" />Donate
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
}
</script>
<style scoped>
.f-header {
  height: 12vh;
}

.logo {
  height: 80px;
  width: auto;
  margin-right: 16px;
}

.logo-text {
  font-size: 26px;
  color: var(--color-text);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
}

.f-nav-link {
  font-size: 1.125rem;
  color: var(--color-text);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
}
</style>

<style>
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
  height: 28px;
  margin-right: 8px;
}

.paypal-button {
  border-radius: 24px;
  height: 48px;
  border: 1px solid #003084;
  outline: none;
  display: flex;
  align-items: center;
  padding: 2px 20px;
  color: #003084;
  font-size: 20px;
  background-color: white;
  transition: all 0.3s ease-out;
}

.paypal-button:hover {
  cursor: pointer;
  border: 1px solid #1ba0de;
}

.paypal-button:active {
  cursor: pointer;
  border: 1px solid #1ba0de;
  color: white;
  background-color: #003084;
}
</style>
