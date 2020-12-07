<template>
  <div>
    <div class="container pt-5">
      <div class="heading">
        <h1 class="title text-center">
          Our Values
        </h1>
        <p class="sub-title text-center">
          The Futurist foundation is an organization working to guide the future
          in a net positive direction by allowing the public to propose, fund,
          and work on the themes and technologies of the future.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row d-flex justify-content-around mb-3">
        <div
          class="col-lg-4 col-12"
          v-for="val in valueDesc"
          :key="val.heading"
        >
          <ValueCard
            :heading="val.heading"
            :bgColor="val.bgColor"
            :desc="val.desc"
            :icon="val.icon"
          />
        </div>
      </div>
    </div>

    <!-- Contact Us -->
    <div class="lighter-bg">
      <div class="container d-flex flex-column align-items-center">
        <h1 class="contact-title text-center">TELL US HOW WE'RE DOING</h1>
        <h2 class="contact-text px-5">
          Want to send us feedback? <br/>Send Us A Message
          <span class="text-green">contact@thefuturistfoundation.com</span>
        </h2>
        <link-btn class="m-5" txt="Message Me!" link="mailto:futurist@net.io" />
      </div>
    </div>
  </div>
</template>

<script>
import LinkBtn from '@/components/LinkBtn.vue'
import ValueCard from '@/components/ValueCard'
import Faq from '@/components/Faq.vue'

export default {
  data() {
    return {
      valueDesc: [
        {
          heading: 'Global Security',
          bgColor: '#6f75ff',
          desc:
            'We will use technology to inspire and enhance global security, through promoting international cooperation of science, de-escalation of arms, and supporting research that betters mankind.',
          icon: 'user-friends',
        },
        {
          heading: 'Technological Progress',
          bgColor: '#6fffa6',
          desc:
            'We aim to move technological progress forward by enhancing humanity’s  understanding of science, logic, and keeping an open mind. Such activity will also promote pragmatic sciences that will further open the path into the future.',
          icon: 'dollar-sign',
        },
        {
          heading: 'Wide Access',
          bgColor: '#fab74a',
          desc:
            'We promote the inclusion of all people regardless of any individual trait, and aim to have a lifestyle where everyone will accept the use of technology to better all lives.',
          icon: 'chalkboard-teacher',
        },
      ],
      teams: [
        {
          mail: 'jaymejean@gmail.com',
          headline: 'Board Member',
          name: 'Jaymes Jean',
          discord: 'tsujo#0313',
          linkedin: 'https://www.linkedin.com/in/jaymes-jean-9990918a/',
          imgSrc: '/img/jaymesImg.png',
        },
        {
          mail: 'ngoert@gmail.com',
          headline: 'Founder & Board Member',
          name: 'Nick Goertzen',
          discord: 'Thiizic#1778',
          linkedin: 'https://www.linkedin.com/in/nick-g-59492493/',
          imgSrc: '/img/nickImg.png',
        },
        {
          mail: 'stellarator001@gmail.com',
          headline: 'Board Member / Team Lead',
          name: 'Naeem England',
          discord: 'Stellarator#1218',
          linkedin: '',
          imgSrc: '/img/naeemImg.png',
        },
      ],
    }
  },
  components: {
    LinkBtn,
    ValueCard,
    Faq,
  },
}
</script>

<style scoped>
* {
  background-color: unset;
}

.lighter-bg {
  background-color: rgba(11, 26, 50, 1);
}

.f-hero-heading {
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
  font-size: 42px;
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
