<template>
  <div>
    <div class="g-landing">
      <div class="g-hero d-flex align-content-center justify-content-center flex-column">
        <h1 class="g-hero-heading">
          About
          <span class="text-rainbow">US</span>
        </h1>
        <p class="g-hero-tag">Propose, Fund, & Work.</p>

        <link-btn txt="Join Discord" link="https://discord.com/invite/Z37nV2Z" />

        <!-- MORE INDICATOR -->
        <div class="more-indicator animation-more mt">
          <p>MORE</p>
          <fa-icon :icon="['fas', 'angle-double-down']"></fa-icon>
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="heading">
        <h1 class="title">
          What We
          <span class="text-red">Do?</span>
        </h1>
        <p class="sub-title">
          The Futurist foundation is an organization working to guide the future in a net positive direction by allowing the public to propose,
          fund, and work on the themes and technologies of the future.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row row-cols-3">
        <div class="col">
          <div class="icon" style="color: #6f75ff;">
            <span class="fa-stack fa-2x">
              <fa-icon
                :icon="['fas', 'user-friends']"
                class="fa-stack-2x fa-lg"
                style="color: #6f75ff;"
              ></fa-icon>
              <div class="circle fa-stack-2x"></div>
            </span>
          </div>

          <div class="text-box">
            <h5 class="sub-heading">Innovate</h5>
            <p
              class="sub-heading-text"
            >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
          </div>
        </div>

        <div class="col">
          <div class="icon" style="color: #6fffa6;">
            <span class="fa-stack fa-2x">
              <fa-icon
                :icon="['fas', 'dollar-sign']"
                class="fa-stack-2x fa-lg"
                style="color: #6fffa6;"
              ></fa-icon>
              <div class="circle fa-stack-2x"></div>
            </span>
          </div>

          <div class="text-box">
            <h5 class="sub-heading">Inspire</h5>
            <p
              class="sub-heading-text"
            >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
          </div>
        </div>

        <div class="col">
          <div class="icon" style="color: #fab74a;">
            <span class="fa-stack fa-2x">
              <fa-icon
                :icon="['fas', 'chalkboard-teacher']"
                class="fa-stack-2x fa-lg"
                style="color: #fab74a;"
              ></fa-icon>
              <div class="circle fa-stack-2x"></div>
            </span>
          </div>

          <div class="text-box">
            <h5 class="sub-heading">Teaching</h5>
            <p
              class="sub-heading-text"
            >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h1 class="title title-left">
        The
        <span class="text-purple">Team.</span>
      </h1>
      <div class="row d-flex justify-content-around mb-5">
        <span class="col-lg-4 col-12" v-for="team in teams" :key="team.name">
          <TeamCard
            :name="team.name"
            :linkedin="team.linkedin"
            :mail="team.mail"
            :headline="team.headline"
            :discord="team.discord"
            :imgSrc="team.imgSrc"
          />
        </span>
      </div>
    </div>
    <div class="container d-flex flex-column align-items-center">
      <h1 class="contact-title text-center">TELL US HOW WE ARE DOING</h1>
      <h2 class="contact-text">
        Want to send us a feedback? Send Us A Message
        <span class="text-green">futurist@net.io</span>
      </h2>
      <link-btn class="m-5" txt="Message Me!" link="mailto:futurist@net.io" />
    </div>
  </div>
</template>

<script>
import LinkBtn from "@/components/LinkBtn.vue";
import TeamCard from "@/components/TeamCard";

export default {
  data() {
    return {
      teams: [
        {
          mail: "jaymejean@gmail.com",
          headline: "Board Member",
          name: "Jaymes Jean",
          discord: "tsujo#0313",
          linkedin: "https://www.linkedin.com/in/jaymes-jean-9990918a/",
          imgSrc: "/img/jaymesImg.png"
        },
        {
          mail: "ngoert@gmail.com",
          headline: "Founder & Board Member",
          name: "Nick Goertzen",
          discord: "Thiizic#1778",
          linkedin: "https://www.linkedin.com/in/nick-g-59492493/",
          imgSrc: "/img/nickImg.png"
        },
        {
          mail: "stellarator001@gmail.com",
          headline: "Board Member / Team Lead",
          name: "Naeem England",
          discord: "Stellarator#1218",
          linkedin: "",
          imgSrc: "/img/naeemImg.png"
        }
      ]
    };
  },
  components: {
    LinkBtn,
    TeamCard
  }
};
</script>

<style scoped>
.g-hero-heading {
  padding: 0;
}

hr {
  background-color: #fa8a01;
  height: 5px;
  border: 0;
  width: 150px;
}

.heading {
  padding: 0 0 120px;
}

.title {
  font-weight: 700;
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: 70px;
  padding: 0 0 20px 0;
}

.title-left {
  text-align: left;
}

.sub-title {
  margin: 0 120px;
  padding-bottom: 40px;
  color: lightslategrey;
}

.circle {
  border: 5px solid;
  height: 300px;
  width: 310px;
  border-radius: 50%;
  transform: translate(-100px) scale(0.8);
}

.sub-heading {
  font-weight: 700;
  font-size: 26px;
}

.sub-heading-text {
  color: lightslategrey;
}

.desc {
  text-align: left;
  color: lightslategrey;
  font-size: 13px;
}

.sub-box {
  padding: 40px 0;
}

.sub-box .title {
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0 0;
}

.sub-box .desc {
  padding: 0;
}

.col img {
  height: 600px;
  width: 700px;
  text-align: left;
  transform: translate(-120px, -80px);
}

.text-box {
  padding: 120px 0;
}

.text-purple {
  color: #5a1de6 !important;
}

.text-red {
  color: crimson;
}

.text-green {
  color: #6fffa6;
}

.contact-title {
  margin: 120px 0 0;
  font-size: 30px;
  letter-spacing: 2.1px;
  color: #ff8646;
  text-transform: uppercase;
}

.contact-text {
  letter-spacing: 0.8px;
  font-size: 80px;
  text-align: center;
  color: var(--color-text);
}

@media screen and (max-width: 576px) {
  .sub-title {
    margin: 0;
  }

  .title-left {
    text-align: center;
  }

  .contact-text {
    font-size: 55px;
  }
}
</style>
