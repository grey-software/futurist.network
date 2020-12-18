<template>
  <div class="nav-drawer t-p-4 t-bg-gray-700">
    <div class="nav-internal flex-col t-pt-5">
      <nuxt-link
        @click="toggleDrawer"
        to="/projects"
        class="drawer-link t-mr-1"
        >Projects</nuxt-link
      >
    </div>
    <div class="flex-col t-my-3">
      <h1 class="drawer-header t-mb-2">Community</h1>
      <a
        @click="toggleDrawer"
        target="_blank"
        href="http://github.com/grey-software/futurist.network"
        class="drawer-link"
        id="github"
        ><github-logo class="drawer-icon t-mr-3" />Contribute</a
      >
      <a
        @click="checked = false"
        target="_blank"
        href="https://discord.com/invite/Z37nV2Z"
        class="drawer-link"
        id="github"
        ><discord-logo class="drawer-icon t-mr-3" />
        <div>Discuss</div></a
      >
    </div>
    <div class="flex-col t-my-3">
      <h1 class="drawer-header t-mb-2">Donate</h1>
      <a
        class="drawer-link"
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SJAKPG8YBNKSN&source=url"
        @click="toggleDrawer"
        ><paypal-logo class="drawer-icon t-mr-3" />Paypal</a
      >
      <a
        class="drawer-link"
        href="https://opencollective.com/future#section-contribute"
        @click="toggleDrawer"
        ><open-collective-logo class="drawer-icon t-mr-3" />Open Collective</a
      >
    </div>
  </div>
</template>

<script>
import GithubLogo from '@/static/icons/github.svg?inline'
import DiscordLogo from '@/static/icons/discord.svg?inline'
import PaypalLogo from '@/static/icons/paypal.svg?inline'
import OpenCollectiveLogo from '@/static/icons/open-collective.svg?inline'

export default {
  components: {
    GithubLogo,
    PaypalLogo,
    OpenCollectiveLogo,
    DiscordLogo,
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
  },
}
</script>

<style>
.nav-drawer {
  height: 100vh;
  z-index: 40;
}

.drawer-header {
  font-size: 22px;
  font-weight: 600;
}

#close-icon {
  width: 24px;
  height: 24px;
}

.drawer-icon {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.drawer-link {
  display: flex;
  padding: 12px 0;
  transition: all 0.3s ease-out;
  font-size: 20px;
  align-items: center;
  color: white !important;
}

.drawer-link:hover {
  padding: 12px 6px;
  background: #fff !important;
  color: var(--bg) !important;
}

.drawer-link:hover .drawer-icon {
  fill: var(--bg);
}
</style>