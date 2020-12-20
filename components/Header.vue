<template>
  <div>
    <v-app-bar app elevate-on-scroll>
      <div
        class="t-container t-flex t-mx-auto t-screen-tablet-portrait:t-px-6 t-pt-2 t-content-center"
      >
        <div class="t-flex t-align-content-center t-mr-auto">
          <div class="flex t-items-center t-mr-auto">
            <nuxt-link class="flex t-align-content-center t-mr-4" to="/">
              <img class="t-h-32px" src="/logo.png" />
            </nuxt-link>
            <nuxt-link
              to="/vision"
              class="t-hidden t-text-lg t-font-bold t-screen-tablet-landscape:t-block t-mx-4"
              >Vision</nuxt-link
            >
            <nuxt-link
              to="/projects"
              class="t-hidden t-text-lg t-font-bold t-screen-tablet-landscape:t-block t-mx-4"
              >Projects</nuxt-link
            >
          </div>
        </div>
        <div class="t-mx-auto"></div>

        <div class="flex align-center">
          <a
            href="https://discord.gg/u3JM2cu"
            class="t-mx-2 t-hidden t-screen-tablet-landscape:t-block"
          >
            <v-icon x-large>mdi-discord</v-icon>
          </a>
          <a
            href="https://github.com/grey-software/futurist.network"
            class="t-mx-2 t-hidden t-screen-tablet-landscape:t-block"
          >
            <v-icon x-large>mdi-github</v-icon>
          </a>
          <v-menu
            v-model="donationMenuOpen"
            open-on-click
            open-on-hover
            offset-y
          >
            <template v-slot:activator="{on, attrs}">
              <v-icon class="t-mx-4" v-bind="attrs" v-on="on" large
                >mdi-charity</v-icon
              >
            </template>
            <v-list>
              <v-list-item
                v-for="donationLink in donationLinks"
                :key="donationLink.name"
              >
                <a
                  class="t-text-xl flex t-items-center t-font-bold"
                  target="_blank"
                  :href="donationLink.link"
                  ><img
                    :src="donationLink.icon"
                    class="t-h-24px t-w-24px t-mr-3"
                  /><span>{{ donationLink.name }}</span></a
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <v-app-bar-nav-icon
            class="t-mx-2"
            x-large
            @click="drawerOpen = !drawerOpen"
          ></v-app-bar-nav-icon>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher v-model="drawerOpen" app right>
      <SideBar />
    </v-navigation-drawer>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'

export default {
  components: {
    SideBar,
  },
  data() {
    return {
      drawerOpen: false,
      donationMenuOpen: false,
      donationLinks: [
        {
          name: 'Paypal',
          link:
            'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SJAKPG8YBNKSN&source=url',
          icon: '/icons/paypal.svg',
        },
        {
          name: 'Open Collective',
          link: 'https://opencollective.com/future#section-contribute',
          icon: '/icons/open-collective.svg',
        },
      ],
    }
  },
}
</script>