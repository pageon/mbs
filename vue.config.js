const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Stressemmer',
    themeColor: '#FC9B00',
    manifestPath: 'manifest.nl.json',
    iconPaths: {
      faviconSVG: null,
      favicon32: null,
      favicon16: null,
      appleTouchIcon: 'apple-touch-icon.png',
      maskIcon: null,
      msTileImage: null
    },
    manifestOptions: {
      icons: [
        { src: './android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: './android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
      ]
    }
  }
})
