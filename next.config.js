const path = require('path')
/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        includePaths: [path.join( __dirname,'./assets/scss/themes.scss',)],
    },
}

module.exports = nextConfig
