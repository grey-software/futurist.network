<template>
  <div>
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default {
  components: {
    NavBar,
    Footer,
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
