<template>
  <div>
    <div class="g-landing">
      <div class="hero d-flex align-content-center justify-content-center flex-column">
        <h1 class="hero-heading">
          About
          <span class="text-rainbow">US</span>
        </h1>
        <p class="hero-tag">Propose, Fund, & Work.</p>
        
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
        <h1 class="title text-center">
          Our Values
        </h1>
        <p class="sub-title text-center">
          The Futurist foundation is an organization working to guide the future in a net positive direction by allowing the public to propose,
          fund, and work on the themes and technologies of the future.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row d-flex justify-content-around mb-3">
        <div class="col-lg-4 col-12" v-for="val in valueDesc" :key="val.heading">
          <ValueCard :heading="val.heading" :bgColor="val.bgColor" :desc="val.desc" :icon="val.icon" />
        </div>
      </div>
    </div>

    <!-- The Team -->
    <div class="container">
      <h1 class="title title-left align-center">
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

    <!-- Contact Us -->
    <div class="container d-flex flex-column align-items-center">
      <h1 class="contact-title text-center">TELL US HOW WE ARE DOING</h1>
      <h2 class="contact-text">
        Want to send us feedback? Send Us A Message
        <span class="text-green">futurist@net.io</span>
      </h2>
      <link-btn class="m-5" txt="Message Me!" link="mailto:futurist@net.io" />
    </div>
  </div>
</template>

<script>
import LinkBtn from "@/components/LinkBtn.vue";
import TeamCard from "@/components/TeamCard";
import ValueCard from "@/components/ValueCard";

export default {
  data() {
    return {
      valueDesc: [
        {
          heading: "Global Security",
          bgColor: "#6f75ff",
          desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
          icon: "user-friends"
        },
        {
          heading: "Technological Progress",
          bgColor: "#6fffa6",
          desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
          icon: "dollar-sign"
        },
        {
          heading: "Global Security",
          bgColor: "#fab74a",
          desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
          icon: "chalkboard-teacher"
        },
      ],
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
    TeamCard,
    ValueCard
  }
};
</script>

<style scoped>
.hero-heading {
  padding: 0;
}

hr {
  background-color: #fa8a01;
  height: 5px;
  border: 0;
  width: 150px;
}

.heading {
  padding: 0 0 50px;
}

.title {
  font-weight: 700;
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: 70px;
  padding: 0 0 20px 0;
}

.sub-title {
  margin: 0 120px;
  padding-bottom: 40px;
  color: lightslategrey;
}

.text-purple {
  color: #5a1de6 !important;
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

@media screen and (max-width: 992px) {
  .sub-title {
    margin: 0 40px;
  }
}

@media screen and (max-width: 576px) {
  .heading {
    padding: 0 0 20px;
  }

  .sub-title {
    margin: 0;
  }

  .contact-text {
    font-size: 47px;
  }

  .contact-title {
    font-size: 20px;
  }

  .align-center {
    text-align: center;
  }
}
</style>
