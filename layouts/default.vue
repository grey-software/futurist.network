<template>
  <div>
    <futurist-nav-bar></futurist-nav-bar>
    <Nuxt />
  </div>
</template>

<script>
import FuturistNavBar from "@/components/FuturistNavBar"

export default {
  components: {
    FuturistNavBar,
  },
  created () {
    if (process.client) {
      document.addEventListener('keyup', (e) => {
        if (e.key == 'd') {
          console.log("hello");
          [].forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) })
        }
      });
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700 &family=Montserrat:wght@400;500&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  background-color: #050c17;
}

a {
  text-decoration: none;
  color: unset;
}

a:hover {
  text-decoration: none;
  color: unset;
}

:root {
  --color-text: #fcfcfc;
  --color-text-dark: #fcfcfc;
  --font-heading: "Montserrat";
  --font-body: "Roboto Sans";
}
</style>
