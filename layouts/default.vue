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

.g-landing {
  margin: 0 120px;
}

.text-rainbow {
  color: red;
  background-image: -webkit-linear-gradient(92deg, red, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
}

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }

  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}

.g-hero {
  height: 100vh;
  text-align: center;
  padding: 80px 40px;
}

.g-hero-heading {
  font-weight: 800;
  font-family: var(--font-heading), sans-serif;
  color: white;
  letter-spacing: -0.025em;
  font-size: calc(12px + 5vw);
  line-height: 1.05;
  z-index: 1000;
  padding: 0 0 80px 0;
}

.g-hero-tag {
  font-size: 18px;
  color: lightslategrey;
  letter-spacing: -0.032em;
  line-height: 1.5;
  padding: 0 0 40px 0;
  text-align: center;
}

.btn {
  z-index: 1;
  padding: 8px 50px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 2px;
  transition: 0.3s ease;
  font-weight: bold;
  border: none;
  color: white;
}

.btn :hover {
  text-decoration: none;
}

/* ----------- MORE INDICATOR ------------ */
.more-indicator {
  text-align: center;
  font-size: 14px;
  padding: 40px 40px;
  opacity: 0;
  color: white;
  font-weight: bold;
}

.mt {
  margin-top: 20px;
}

/* ANIMATE */
.animation-more {
  animation-name: drive;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
}

/* KEYFRAMES */
@keyframes drive {
  from {
    transform: translateY(0);
    opacity: 0;
  }

  to {
    transform: translateY(15px);
    opacity: 1;
  }
}
</style>
