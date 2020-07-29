/* eslint-disable */
<template>
  <div class="f-footer">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="7">
          <li>
            <img src="../assets/f-logo.png"/>
          </li>

          <li>
            <p class="desc"> The Futurist Foundation is an organization that allows individuals like you to propose,
              fund, and work on the technologies of the future.
            </p>
          </li>

          <li>
            <div style="color: #fab74a; justify-items: center;">
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
            <p class="desc" style="padding: 20px 0;">Copyright by @FuturistNetwork - 2020</p>
          </li>
        </b-col>

        <b-col style="padding: 0 80px;">
          <li>
            <p class="more"> More Links. </p>
            <div class="links">
              <p>Futurist Network</p>
              <p>Our Team</p>
              <p>Contact Us</p>
              <p>FAQ</p>
            </div>

          </li>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
  .f-footer {
    margin: 0 120px;
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
  }

  .more {
    color: #fa8a01;
    font-weight: 700;
    padding: 40px 0;
  }

  .links {
    font-weight: 600;
  }

  .links:hover {
    cursor: pointer;
  }
</style>