export { default as FuturistAbout } from '../../components/FuturistAbout.vue'
export { default as FuturistHero } from '../../components/FuturistHero.vue'
export { default as FuturistNavBar } from '../../components/FuturistNavBar.vue'
export { default as FuturistTeam } from '../../components/FuturistTeam.vue'
export { default as LinkBtn } from '../../components/LinkBtn.vue'
export { default as ProjectCard } from '../../components/ProjectCard.vue'
export { default as TeamCard } from '../../components/TeamCard.vue'

export const LazyFuturistAbout = import('../../components/FuturistAbout.vue' /* webpackChunkName: "components/FuturistAbout'}" */).then(c => c.default || c)
export const LazyFuturistHero = import('../../components/FuturistHero.vue' /* webpackChunkName: "components/FuturistHero'}" */).then(c => c.default || c)
export const LazyFuturistNavBar = import('../../components/FuturistNavBar.vue' /* webpackChunkName: "components/FuturistNavBar'}" */).then(c => c.default || c)
export const LazyFuturistTeam = import('../../components/FuturistTeam.vue' /* webpackChunkName: "components/FuturistTeam'}" */).then(c => c.default || c)
export const LazyLinkBtn = import('../../components/LinkBtn.vue' /* webpackChunkName: "components/LinkBtn'}" */).then(c => c.default || c)
export const LazyProjectCard = import('../../components/ProjectCard.vue' /* webpackChunkName: "components/ProjectCard'}" */).then(c => c.default || c)
export const LazyTeamCard = import('../../components/TeamCard.vue' /* webpackChunkName: "components/TeamCard'}" */).then(c => c.default || c)
