import { createMemoryHistory, createRouter } from 'vue-router'
import routes from '~pages'

export { default as IconesApp } from './App.vue'

export { default as Icon } from './components/Icon.vue'
export { confirmedIconChoiceForBettysBrain } from './store/localstorage'

let router: any
export const createARouter = (base: string) => {
  if (router)
    return router
  router = createRouter({
    history: createMemoryHistory(base),
    routes,
  })
  return router
}

/* export function launchComponentLibrary(AppInstance: app2<Element>, mountPoint: string | HTMLElement, base?: string | undefined) {
  if (base === undefined)
    base = basePath
  if (!router)
    createARouter(base)

  const element = typeof mountPoint === 'string' ? document.querySelector(mountPoint) : mountPoint
  // check if element is already an app by checking if it already contains some children
  const isAppAlreadyInited = element instanceof HTMLElement && element.children.length >= 2
  if (isAppAlreadyInited)
    return element

  if (!element) {
    console.error('Invalid mount point provided')
    return
  }

  const app = createApp(IconesApp, { mountPoint: element })
  app.use(router)
  return app.mount(element)
  // app.mount(element)
} */
