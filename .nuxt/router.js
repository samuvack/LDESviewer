import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77a9a8a2 = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _aa7e2e80 = () => interopDefault(import('..\\pages\\test2\\index.vue' /* webpackChunkName: "pages/test2/index" */))
const _9b1ae3c2 = () => interopDefault(import('..\\pages\\test3\\index.vue' /* webpackChunkName: "pages/test3/index" */))
const _8bb79904 = () => interopDefault(import('..\\pages\\test4\\index.vue' /* webpackChunkName: "pages/test4/index" */))
const _7c544e46 = () => interopDefault(import('..\\pages\\test5\\index.vue' /* webpackChunkName: "pages/test5/index" */))
const _3272b118 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test",
    component: _77a9a8a2,
    name: "test"
  }, {
    path: "/test2",
    component: _aa7e2e80,
    name: "test2"
  }, {
    path: "/test3",
    component: _9b1ae3c2,
    name: "test3"
  }, {
    path: "/test4",
    component: _8bb79904,
    name: "test4"
  }, {
    path: "/test5",
    component: _7c544e46,
    name: "test5"
  }, {
    path: "/",
    component: _3272b118,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
