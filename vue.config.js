const {defineConfig} = require('@vue/cli-service')
const {resolve} = require('path');
module.exports = defineConfig({
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
