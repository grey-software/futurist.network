import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b72daf6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _70708019 = () => interopDefault(import('../pages/donations.vue' /* webpackChunkName: "pages/donations" */))
const _19fe6d4a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0b72daf6,
    name: "about"
  }, {
    path: "/donations",
    component: _70708019,
    name: "donations"
  }, {
    path: "/",
    component: _19fe6d4a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
