<template>
  <div class="container f-footer">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="12" lg="9">
          <li>
            <img src="../assets/f-logo.png" />
          </li>

          <li>
            <p class="desc">
              The Futurist Foundation is an organization that allows individuals
              like you to propose, fund, and work on the technologies of the
              future.
            </p>
          </li>

          <li>
            <div style="color: #fab74a; justify-items: center;">
              <a href="mailto:contact@thefuturistfoundation.com">
                <span class="fa-stack fa-lg">
                  <fa-icon
                    :icon="['fas', 'circle']"
                    class="fa-stack-2x"
                    style="color: #fab74a;"
                  ></fa-icon>
                  <fa-icon
                    :icon="['fas', 'envelope']"
                    class="fa-stack-1x"
                    style="color: black; background-color: #fab74a;"
                  ></fa-icon>
                </span>
              </a>

              <a
                href="https://discord.com/invite/Z37nV2Z"
                target="_blank"
              >
                <span class="fa-stack fa-lg">
                  <fa-icon
                    :icon="['fas', 'circle']"
                    class="fa-stack-2x"
                    style="color: #fab74a;"
                  ></fa-icon>
                  <fa-icon
                    :icon="['fab', 'discord']"
                    class="fa-stack-1x"
                    style="color: black; background-color: #fab74a;"
                  ></fa-icon>
                </span>
              </a>

              <span class="fa-stack fa-lg">
                <fa-icon
                  :icon="['fas', 'circle']"
                  class="fa-stack-2x"
                  style="color: #fab74a;"
                ></fa-icon>
                <fa-icon
                  :icon="['fab', 'linkedin']"
                  class="fa-stack-1x"
                  style="color: black; background-color: #fab74a;"
                ></fa-icon>
              </span>
            </div>
          </li>

          <li>
            <p class="desc" style="padding: 20px 0;">
              Copyright The Futurist Foundation - 2020
            </p>
          </li>
        </b-col>

        <b-col>
          <li>
            <p class="more pt-5 pb-3">More Links.</p>
            <div class="links">
              <a
                target="_blank"
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SJAKPG8YBNKSN&source=url"
                >Donate Now</a
              >
              <a href="https://discord.com/invite/Z37nV2Z"
                target="_blank">Community</a>
              <a href="mailto:contact@thefuturistfoundation.com">Contact Us</a>
              <nuxt-link to="/faq">FAQ</nuxt-link>
            </div>
          </li>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.f-footer {
  padding: 40px;
  color: white;
}

li {
  list-style: none;
}

img {
  width: auto;
  height: 90px;
}

.desc {
  color: lightslategrey;
  font-weight: 500;
  font-size: 16px;
  padding: 40px 0;
  max-width: 600px;
}

.more {
  color: #fa8a01;
  font-weight: 700;
  font-size: 20px;
}

.links {
  font-weight: 600;
}

.links > a {
  margin-bottom: 16px;
  display: block;
}

.links:hover {
  cursor: pointer;
}
</style>
