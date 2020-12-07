<template>
  <div class="tw-container tw-py-6 tw-mx-auto tw-px-4">
    <div class="tw-mt-5 sm:tw-flex tw-justify-space-between">
      <div class="tw-w-full sm:tw-w-1/2 tw-flex-col tw-mr-auto tw-mb-4">
        <nuxt-link to="/">
          <img class="tw-mb-6" src="/logo.png" />
        </nuxt-link>
        <p>
          The Futurist Foundation is an organization that allows individuals
          like you to propose, fund, and create the technologies of the future.
        </p>
        <div class="tw-mt-6">
          <a href="https://discord.com/invite/Z37nV2Z" class="footer-link">
            <v-icon x-large>mdi-discord</v-icon>
          </a>
          <a href="https://www.instagram.com/utm.cssc" class="footer-link tw-ml-2">
            <v-icon x-large>mdi-youtube</v-icon>
          </a>
          <a
            href="https://www.youtube.com/channel/UCvHFwQuoelQWENGwcLGssUg"
            class="footer-link tw-ml-2"
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

      <div class="flex-col xs:tw-align-end">
          <div class="tw-font-bold tw-text-xl tw-mb-4">More Links</div>
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
