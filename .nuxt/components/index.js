export { default as About } from '../../components/About.vue'
export { default as Btn } from '../../components/Btn.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as FuturistTeam } from '../../components/FuturistTeam.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as HowItWorks } from '../../components/HowItWorks.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as ProjectCard } from '../../components/ProjectCard.vue'
export { default as ReadyToBeAFuturist } from '../../components/ReadyToBeAFuturist.vue'
export { default as Subscribe } from '../../components/Subscribe.vue'
export { default as TeamCard } from '../../components/TeamCard.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/About'}" */).then(c => c.default || c)
export const LazyBtn = import('../../components/Btn.vue' /* webpackChunkName: "components/Btn'}" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer'}" */).then(c => c.default || c)
export const LazyFuturistTeam = import('../../components/FuturistTeam.vue' /* webpackChunkName: "components/FuturistTeam'}" */).then(c => c.default || c)
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/Hero'}" */).then(c => c.default || c)
export const LazyHowItWorks = import('../../components/HowItWorks.vue' /* webpackChunkName: "components/HowItWorks'}" */).then(c => c.default || c)
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/NavBar'}" */).then(c => c.default || c)
export const LazyProjectCard = import('../../components/ProjectCard.vue' /* webpackChunkName: "components/ProjectCard'}" */).then(c => c.default || c)
export const LazyReadyToBeAFuturist = import('../../components/ReadyToBeAFuturist.vue' /* webpackChunkName: "components/ReadyToBeAFuturist'}" */).then(c => c.default || c)
export const LazySubscribe = import('../../components/Subscribe.vue' /* webpackChunkName: "components/Subscribe'}" */).then(c => c.default || c)
export const LazyTeamCard = import('../../components/TeamCard.vue' /* webpackChunkName: "components/TeamCard'}" */).then(c => c.default || c)
