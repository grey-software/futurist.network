import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a8ebd57 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _8fba1c2a = () => interopDefault(import('../pages/donations.vue' /* webpackChunkName: "pages/donations" */))
const _6a46981c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4a8ebd57,
    name: "about"
  }, {
    path: "/donations",
    component: _8fba1c2a,
    name: "donations"
  }, {
    path: "/",
    component: _6a46981c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
