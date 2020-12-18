<template>
  <div class="t-container t-py-6 t-mx-auto t-screen-phone:t-px-4">
    <div class="t-mt-5 sm:t-flex t-justify-space-between">
      <div class="t-w-full sm:t-w-1/2 t-flex-col t-mr-auto t-mb-4">
        <nuxt-link to="/">
          <img class="t-mb-6" src="/logo.png" />
        </nuxt-link>
        <p>
          The Futurist Foundation is a non-profit organization on a mission to 
          promote crowd-sourced projects seeking to educate the public on the 
          matters of futurism, and to support research into legal and ethical 
          questions concerning future technology and its usage. 
        </p>
        <div class="t-mt-6">
          <a href="https://discord.com/invite/Z37nV2Z" class="footer-link">
            <v-icon x-large>mdi-discord</v-icon>
          </a>
          <a href="https://www.youtube.com/channel/UCvHFwQuoelQWENGwcLGssUg" class="footer-link t-ml-2">
            <v-icon x-large>mdi-youtube</v-icon>
          </a>
          <a
            href="https://www.youtube.com/channel/UCvHFwQuoelQWENGwcLGssUg"
            class="footer-link t-ml-2"
          >
            <v-icon x-large>mdi-reddit</v-icon>
          </a>
          <a
            href="https://github.com/grey-software/futurist.network"
            class="footer-link ml-2"
          >
            <v-icon x-large>mdi-github</v-icon>
          </a>
        </div>
      </div>

      <div class="flex-col xs:t-align-end">
          <div class="t-font-bold t-text-xl t-mb-4">More Links</div>
          <div class="links">
            <nuxt-link to="/resources"> Resources </nuxt-link>
            <a
              target="_blank"
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SJAKPG8YBNKSN&source=url"
              >Donate Now</a
            >
            <a href="https://discord.gg/SHwbmVg" target="_blank">Community</a>
            <a href="mailto:contact@thefuturistfoundation.com">Contact Us</a>
            <nuxt-link to="/faq">FAQ</nuxt-link>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 84px;
}

svg:hover {
  fill: var(--color-primary-dark);
}

a {
  text-decoration: none;
}

h1 {
  margin-left: 10px;
  font-weight: 600;
  font-size: 35px;
  color: var(--color-primary);
}

li {
  list-style: none;
}

img {
  width: auto;
  height: 70px;
}

.hello {
  padding: 0 0 30px 0;
}

.desc {
  max-width: 420px;
}

.links {
  font-size: 18px;
}

.links > a {
  color: var(--color-body);
  margin-bottom: 10px;
  display: block;
}

.links > a:hover {
  cursor: pointer;
  color: var(--color-primary);
}
</style>
