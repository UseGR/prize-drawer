const {defineConfig} = require('@vue/cli-service')
const {resolve} = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
    chainWebpack: config => {
        config.plugin('polyfills').use(NodePolyfillPlugin)
    },
    transpileDependencies: true,
    devServer: {
        port: 3000
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/prize-drawer/' :
        '/',
    outputDir: resolve(__dirname, "./docs"),
    assetsDir: './'
})
