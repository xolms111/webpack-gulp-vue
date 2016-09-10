var webpack = require('webpack')

module.exports =  {
    entry: [
        './main/main.js'
    ],
    output: {
        path: "/dist/js",
        publicPath: "/js/",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/src|vue-router\//,
                loader: 'babel'
            },
            {
                test: /\.less/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        modulesDirectories: ['node_modules']
    }
}