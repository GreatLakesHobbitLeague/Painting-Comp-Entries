
// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    generate:{
      nojekyll: true, //not working on this version
    },
    ssr: true, //server side rendered enabled //When true
    target: "static", // and static, nuxt generates a hybrid static site
  },
}
// nuxt.config.js

