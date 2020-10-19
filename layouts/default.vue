<template>
  <div>
    <FuturistNavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import FuturistNavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default {
  components: {
    Footer,
    FuturistNavBar,
  },
  created() {
    if (process.client) {
      document.addEventListener('keyup', e => {
        if (e.key == 'd') {
          console.log('hello')
          ;[].forEach.call(document.querySelectorAll('*'), function(a) {
            a.style.outline =
              '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
          })
        }
      })
    }
  },
}
</script>

<style>
.g-landing {
  margin: 0 120px;
}

@media screen and (max-width: 576px) {
  .g-landing {
    margin: 0;
  }
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

.btn {
  z-index: 1;
  padding: 24px 36px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 2px;
  transition: 0.3s ease;
  font-weight: bold;
  border: none;
  color: white;
  width: fit-content;
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
