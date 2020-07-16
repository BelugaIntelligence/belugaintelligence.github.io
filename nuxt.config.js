export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */

  head: {
    title: 'Beluga Intelligence',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'google-site-verification', content: 'D1V-RQ_HFymXYdw6CtlrMB-v3vi9gM328tClsMOsmAk'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vuetify.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
     }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['veutify'],
    extend(config, ctx) {
    }
  }
}
