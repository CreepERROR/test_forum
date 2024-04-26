// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-server-utils"],
  nitro:{
    experimental: {
      websocket:true
    }
  }
})
